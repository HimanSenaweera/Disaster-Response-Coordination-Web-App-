import React, { useState } from 'react';
import './ReportForm.css';

export default function ReportForm() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/parse-incident', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      setResponse(data.extracted || { error: 'Failed to parse. Please try again.' });
    } catch (err) {
      console.error(err);
      setResponse({ error: 'Something went wrong while contacting the server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="report-form-wrapper">
      <form className="report-form" onSubmit={handleSubmit}>
        <label htmlFor="textReport">📄 <strong>Situation Report</strong></label>
        <textarea
          id="textReport"
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe the emergency situation in your own words..."
          required
        />

        <div className="button-group">
          <button type="submit" className="submit-btn">
            {loading ? 'Submitting...' : 'Submit Report'}
          </button>
        </div>

        {response && (
          <div className="ai-output-box">
            {response.error ? (
              <p className="error-message">❌ {response.error}</p>
            ) : (
              <>
                <h3>✅ Extracted Details:</h3>
                <p><span className="label-icon">📍</span><strong>Location:</strong> {response.location}</p>
                <p><span className="label-icon">🚨</span><strong>Urgency:</strong> {response.urgency}</p>
                <p><span className="label-icon">🔥</span><strong>Type of Incident:</strong> {response.type}</p>
                <p><span className="label-icon">📦</span><strong>Category:</strong> {response.category}</p>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
