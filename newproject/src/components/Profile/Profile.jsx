// VolunteerProfilePage.jsx
import React from 'react';
import './Profile.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Profile() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { profile, formData } = state || {};

  if (!formData || !profile) return <p>No profile data found.</p>;

  return (
    <div className="profile-page-wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">🧑‍💒</div>
          <div>
            <h3>Volunteer Profile</h3>
            <p><strong>ID:</strong> {formData.volunteerId}</p>
          </div>
        </div>

        <div className="profile-info">
          <p><strong>📍 Zone:</strong> {formData.area}</p>
          <p><strong>🚰 Skills:</strong> {formData.skills.join(', ')}</p>
          <p><strong>⏰ Availability:</strong> {formData.availability}</p>
          <p><strong>💬 Preferred Contact:</strong> {formData.commChannel}</p>
        </div>

        <div className="ai-summary">
          <pre>{profile}</pre>
        </div>

        <div className="button-group">
          <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
        </div>
      </div>
    </div>
  );
}
