// backend/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("GEMINI KEY LOADED:", process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- ROUTE 1: Simple freeform Gemini chat ---
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (err) {
    console.error('🔥 Gemini API Error:');
    if (err.response) {
      console.error('Response error data:', err.response.data);
      console.error('Status:', err.response.status);
    } else {
      console.error('Error:', err.message || err);
    }
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// --- ROUTE 2: Incident information extraction ---
app.post('/api/parse-incident', async (req, res) => {
  const { message } = req.body;

  const prompt = `
Extract the following details from this disaster report:
- Location
- Urgency (Low / Medium / High)
- Type of incident (e.g., Flood, Earthquake, Power outage)
- Category (e.g., Rescue, Medical, Shelter, Supplies)

Respond in RAW JSON only (no Markdown, no backticks).

Example format:
{
  "location": "...",
  "urgency": "...",
  "type": "...",
  "category": "..."
}

Input: ${message}
`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = response.text().trim();

    // ✅ Clean Markdown block if present
    let cleaned = rawText;
    if (cleaned.startsWith('```json')) {
      cleaned = cleaned.replace(/^```json/, '').replace(/```$/, '').trim();
    } else if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```/, '').replace(/```$/, '').trim();
    }

    // ✅ Try to parse cleaned string
    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      return res.status(400).json({ error: 'AI did not return valid JSON', raw: cleaned });
    }

    res.json({ extracted: parsed });
  } catch (err) {
    console.error('Parsing Error:', err);
    res.status(500).json({ error: 'Something went wrong in AI parsing' });
  }
});

// --- ROUTE 3: Generate AI Volunteer Profile ---
app.post('/api/generate-volunteer-profile', async (req, res) => {
  const volunteer = req.body;

  const prompt = `
You are an AI volunteer coordinator. Given the following form data, write a professional, friendly profile.

Include:
- a title like "Volunteer Profile"
- bullet or paragraph structure with key info (zone, skills, availability, contact preference)
- fabricated but realistic past experience (e.g., assisted in Galle flood 2022)
- Tone should sound dependable, confident, and helpful.
- Keep the language natural. Respond in plain text only. No markdown or formatting symbols.

Volunteer Info:
${JSON.stringify(volunteer, null, 2)}
`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const profile = response.text().trim();
    res.json({ profile });
  } catch (err) {
    console.error('Profile Gen Error:', err);
    res.status(500).json({ error: 'Something went wrong generating the profile' });
  }
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Gemini backend running on http://localhost:${PORT}`);
});
