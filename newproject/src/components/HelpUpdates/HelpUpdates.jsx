import React from 'react';
import './HelpUpdates.css';

export default function HelpUpdates({ setSelectedCard }) {
  const dummyUpdates = [
    { id: 1, message: 'Your food request has been received.', status: 'In Progress' },
    { id: 2, message: 'Medical aid dispatched to your location.', status: 'Completed' },
  ];

  return (
    <div className="help-updates">
      <h2>Help Request Updates</h2>
      {dummyUpdates.map(update => (
        <div key={update.id} className="update-card">
          <p>{update.message}</p>
          <span className={`status ${update.status.toLowerCase()}`}>{update.status}</span>
        </div>
      ))}
      <button className="cancel-button" onClick={() => setSelectedCard(null)}>Back</button>
    </div>
  );
}
