import React, { useState } from 'react';

function ChatBox() {
  const [userInput, setUserInput] = useState('');
  const [incidentData, setIncidentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIncidentData(null);

    try {
      const res = await fetch('http://localhost:5000/api/parse-incident', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();

      if (data.extracted) {
        setIncidentData(data.extracted);
      } else {
        setIncidentData({ error: 'Invalid response', raw: data.raw || '' });
      }
    } catch (error) {
      console.error('Error:', error);
      setIncidentData({ error: 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial' }}>
      <h2>🆘 ResQNet Incident Parser</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Describe the incident report here..."
          style={{ width: '100%', padding: '10px', resize: 'vertical' }}
        />
        <button type="submit" style={{ marginTop: '10px' }}>Extract Info</button>
      </form>

      {loading && <p>⏳ Analyzing...</p>}

      {incidentData && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          {incidentData.error ? (
            <>
              <p>❌ <strong>Error:</strong> {incidentData.error}</p>
              {incidentData.raw && <pre>{incidentData.raw}</pre>}
            </>
          ) : (
            <>
              <p><strong>📍 Location:</strong> {incidentData.location}</p>
              <p><strong>🚨 Urgency:</strong> {incidentData.urgency}</p>
              <p><strong>🔥 Incident Type:</strong> {incidentData.type}</p>
              <p><strong>📦 Category:</strong> {incidentData.category}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatBox;
