import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VolunteerForm.css';

export default function VolunteerForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // form processing logic here
    alert('Form submitted!');
  };

  return (
    <div className="volunteer-form-wrapper">
      <form className='volunteer-form' onSubmit={handleSubmit}>

        {/* Form Fields Here */}
        <label>Volunteer ID / National ID</label>
        <input type="text" name='volunteerId' placeholder='Enter your ID' required />

        <label>Contact Number</label>
        <input type="tel" name='phone' placeholder='Enter your mobile number' required />

        <label>Area / Zone of Operation</label>
        <input type="text" name='area' placeholder='Enter your working zone' required />

        <label>Skill Set</label>
        <div className="checkbox-group">
          <label><input type="checkbox" value="Medical Aid" /> Medical Aid</label>
          <label><input type="checkbox" value="Search & Rescue" /> Search & Rescue</label>
          <label><input type="checkbox" value="Logistics" /> Logistics</label>
          <label><input type="checkbox" value="First Aid" /> First Aid</label>
        </div>

        <label>Availability Schedule</label>
        <input type="text" name='availability' placeholder='e.g. Weekdays 9AM – 6PM' required />

        <label>Preferred Communication Channel</label>
        <select name="commChannel">
          <option value="Phone">Phone</option>
          <option value="SMS">SMS</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="In-app Chat">In-app Chat</option>
        </select>

        <div className="button-group">
          <button type='submit' className="submit-btn">Submit Now</button>
          <button type='button' className="back-btn" onClick={() => navigate('/Volunteer')}>Back</button>
        </div>

      </form>
    </div>
  );
}
