import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskList.css';

export default function TaskListIntakeForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1 or Step 2

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted for task generation.");
    // Here you can send to context or backend
  };

  return (
    <div className="tasklist-form-wrapper">
      <form className="tasklist-form" onSubmit={handleSubmit}>
        <h2>Task list Form</h2>

        {step === 1 && (
          <>
            <label>Volunteer Name / ID</label>
            <input type="text" placeholder="Enter volunteer name or ID" required />

            <label>Zone of Operation</label>
            <input type="text" placeholder="e.g. Zone A, Colombo North" required />

            <label>Availability</label>
            <input type="text" placeholder="e.g. Weekdays 8AM – 5PM" required />

            <div className="skillset-inline">
  <label className="skill-label">Skill Set:</label>
  <div className="checkbox-row">
    <label><input type="checkbox" value="Medical Aid" /> Medical Aid</label>
    <label><input type="checkbox" value="Logistics" /> Logistics</label>
    <label><input type="checkbox" value="Search & Rescue" /> Search & Rescue</label>
    <label><input type="checkbox" value="First Aid" /> First Aid</label>
  </div>
</div>


            <div className="button-group">
              <button type="button" className="next-btn" onClick={handleNext}>Next</button>
              <button type="button" className="back-btn" onClick={() => navigate('/Volunteer')}>Back</button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <label>Preferred Task Type</label>
            <select required>
              <option value="">--Select--</option>
              <option value="Medical Support">Medical Support</option>
              <option value="Supply Distribution">Supply Distribution</option>
              <option value="Evacuation Support">Evacuation Support</option>
              <option value="Communication">Communication</option>
            </select>

            <label>Past Experience (optional)</label>
            <textarea placeholder="e.g. Participated in 2022 Galle flood relief..." rows="3" />

            <label>Additional Remarks</label>
            <textarea placeholder="Anything else we should know?" rows="3" />

            <div className="button-group">
              <button type="button" className="back-btn" onClick={handleBack}>Back</button>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
