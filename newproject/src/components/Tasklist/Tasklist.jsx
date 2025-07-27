import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tasklist.css';

export default function VolunteerForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    volunteerId: '',
    phone: '',
    area: '',
    availability: '',
    commChannel: 'Phone',
    skills: []
  });
  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setProfile('');

    try {
      const res = await fetch('http://localhost:5000/api/generate-volunteer-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setProfile(data.profile || 'AI did not return a valid profile.');
    } catch (err) {
      console.error(err);
      setProfile('Something went wrong while generating the profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="volunteer-form-wrapper">
      <form className='volunteer-form' onSubmit={handleSubmit}>
        <label>Volunteer ID / National ID</label>
        <input type="text" name='volunteerId' value={formData.volunteerId} onChange={handleChange} required />

        <label>Contact Number</label>
        <input type="tel" name='phone' value={formData.phone} onChange={handleChange} required />

        <label>Area / Zone of Operation</label>
        <input type="text" name='area' value={formData.area} onChange={handleChange} required />

        <label>Skill Set</label>
        <div className="checkbox-group">
          {["Medical Aid", "Search & Rescue", "Logistics", "First Aid"].map(skill => (
            <label key={skill}>
              <input type="checkbox" value={skill} checked={formData.skills.includes(skill)} onChange={handleChange} />
              {skill}
            </label>
          ))}
        </div>

        <label>Availability Schedule</label>
        <input type="text" name='availability' value={formData.availability} onChange={handleChange} required />

        <label>Preferred Communication Channel</label>
        <select name="commChannel" value={formData.commChannel} onChange={handleChange}>
          <option value="Phone">Phone</option>
          <option value="SMS">SMS</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="In-app Chat">In-app Chat</option>
        </select>

        <div className="button-group">
          <button type='submit' className="submit-btn">{loading ? 'Generating...' : 'Generate Profile'}</button>
          <button type='button' className="back-btn" onClick={() => navigate('/Volunteer')}>Back</button>
        </div>

        {profile && (
  <div className="volunteer-profile-card">
    <div className="profile-header">
      <div className="avatar">🧑</div>
      <div>
        <h3>Volunteer Profile</h3>
        <p>ID: {formData.volunteerId}</p>
      </div>
    </div>
    <div className="profile-info">
      <p><strong>📍 Zone:</strong> {formData.area}</p>
      <p><strong>🛠️ Skills:</strong> {formData.skills.join(', ') || 'None'}</p>
      <p><strong>🕒 Availability:</strong> {formData.availability}</p>
      <p><strong>💬 Preferred Contact:</strong> {formData.commChannel}</p>
      <p className="ai-summary" style={{ whiteSpace: 'pre-line' }}>{profile}</p>
    </div>
  </div>
)}

      </form>
    </div>
  );
}
