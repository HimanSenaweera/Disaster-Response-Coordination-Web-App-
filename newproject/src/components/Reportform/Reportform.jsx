import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReportForm.css';

export default function ReportForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
    alert('Report submitted!');
  };

  return (
    <div className="report-form-wrapper">
      <form className="report-form" onSubmit={handleSubmit}>

        <label>Reporter ID</label>
        <input type="text" name="reporterName" placeholder="Enter your name" required />

        <label>Contact Number</label>
        <input type="tel" name="contact" placeholder="Enter your phone number" required />

        <label>Incident Location</label>
        <input type="text" name="location" placeholder="Enter location of the incident" required />

        <label>Type of Incident</label>
        <select name="incidentType" required>
          <option value="">--Select--</option>
          <option value="Medical Emergency">Medical Emergency</option>
          <option value="Fire">Fire</option>
          <option value="Flood">Flood</option>
          <option value="Rescue">Rescue</option>
          <option value="Other">Other</option>
        </select>

        <label>Incident Description</label>
        <textarea name="description" placeholder="Describe the incident in detail..." rows="4" required />

        <div className="urgency-group">
  <label className="urgency-label">Urgency Level:</label>
  <div className="urgency-options">
    <label><input type="radio" name="urgency" value="Low" /> Low</label>
    <label><input type="radio" name="urgency" value="Medium" /> Medium</label>
    <label><input type="radio" name="urgency" value="High" /> High</label>
  </div>
</div>


        <div className="button-group">
          <button type="submit" className="submit-btn">Submit Report</button>
          <button type="button" className="back-btn" onClick={() => navigate('/Volunteer')}>Back</button>
        </div>

      </form>
    </div>
  );
}
