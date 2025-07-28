import React from 'react';
import './DisasterBanner.css';

export default function DisasterBanner({ disaster }) {
  const {
    id,
    type,               // e.g., 'Flood'
    location,
    priority,           // 'High', 'Moderate', 'Critical'
    status,             // 'New', 'Ongoing', 'Resolved'
    reportedBy,         // array of reporters
    timestamp,          // earliest report time
    emergencyServices,  // { police, fire, hospital }
    influenceContacts,  // array of { name, role, contact }
  } = disaster;

  return (
    <div className={`disaster-banner ${priority.toLowerCase()}`}>
      <div className="disaster-header">
        <h3>{type} in {location}</h3>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <p><strong>Priority:</strong> {priority}</p>
      <p><strong>First reported:</strong> {new Date(timestamp).toLocaleString()}</p>
      <p><strong>Reports merged:</strong> {reportedBy.length}</p>

      <div className="disaster-reporters">
        <strong>Reported by:</strong>
        <ul>
          {reportedBy.map((r, i) => (
            <li key={i}>{r.name} ({r.role}) - {r.contact}</li>
          ))}
        </ul>
      </div>

      <div className="emergency-contacts">
        <strong>Nearest Services:</strong>
        <ul>
          <li>🚓 Police: {emergencyServices.police}</li>
          <li>🚒 Fire Brigade: {emergencyServices.fire}</li>
          <li>🏥 Hospital: {emergencyServices.hospital}</li>
        </ul>
      </div>

      <div className="influencers">
        <strong>Influential Contacts:</strong>
        <ul>
          {influenceContacts.map((c, i) => (
            <li key={i}>{c.name} ({c.role}) - {c.contact}</li>
          ))}
        </ul>
      </div>

      <div className="disaster-actions">
        {/* 🔧 These buttons are placeholders for backend integration */}
        <button>Assign Responders</button>
        <button>Broadcast Alert</button>
        <button>Mark as Resolved</button>
      </div>
    </div>
  );
}
