import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Volunteer.css';
import VolunteerForm from '../../components/VolunteerForm/VolunteerForm';
import Tasklist from '../../components/Tasklist/Tasklist';

export default function Volunteer() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  return (
    <div className='Volunteer'>
      {/* ✅ Navbar with Back functionality */}
      <Navbar
        rightmost='Back'
        onBack={() => {
          if (selectedCard !== null) {
            setSelectedCard(null);   // Go back to main menu
          } else {
            navigate('/');            // Go back to previous page
          }
        }}
      />

      {/* Main menu */}
      {selectedCard === null && (
        <div className="volunteer-grid-menu">
          <div className="menu-card" onClick={() => navigate('/Volunteer/profile')}>Volunteer Profile</div>
          <div className="menu-card" onClick={() => navigate('/Volunteer/report')}>Report Form</div>
          <div className="menu-card" onClick={() => navigate('/Volunteer/tasklist')}>Task list</div>
          <div className="menu-card" onClick={() => setSelectedCard("chat")}>Chat Box</div>
        </div>
      )}

      {/* Conditional content sections */}
      {selectedCard === "profile" && (
        <div className="volunteer-form-container">
          <VolunteerForm />
        </div>
      )}

      {selectedCard === "tasks" && (
        <div className="task-form-container">
          <Tasklist />
        </div>
      )}
    </div>
  );
}
