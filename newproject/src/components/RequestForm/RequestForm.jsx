import React, { useState } from 'react';
import './RequestForm.css';

export default function RequestForm({ setSelectedCard }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    typeOfHelp: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Request:', formData);
    alert('Request submitted successfully.');
  };

  return (
    <div className="request-form">
      <h2>Submit Help Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>

        <label>Type of Help:
          <select name="typeOfHelp" value={formData.typeOfHelp} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="food">Food</option>
            <option value="shelter">Shelter</option>
            <option value="medical">Medical</option>
            <option value="rescue">Rescue</option>
          </select>
        </label>

        <label>Description:
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" />
        </label>

        <button type="submit">Submit Request</button>
        <button type="button" className="cancel-button" onClick={() => setSelectedCard(null)}>Cancel</button>
      </form>
    </div>
  );
}


