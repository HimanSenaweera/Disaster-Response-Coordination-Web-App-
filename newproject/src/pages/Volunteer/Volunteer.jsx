import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Volunteer.css'
import VolunteerForm from '../../components/VolunteerForm/VolunteerForm'
import VolunteerHome from '../../components/VolunteerHome/VolunteerHome'
import React2, { useState } from 'react';
import Tasklist from '../../components/Tasklist/Tasklist'

import { useNavigate } from 'react-router-dom';




export default function Volunteer() {

    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    return (
    
        
    <div className='Volunteer'>
               
            <Navbar rightmost='Back' />

            {selectedCard === null && (
    <div className="volunteer-grid-menu">
      <div className="menu-card" onClick={() => navigate('/Volunteer/profile')}>Volunteer Profile</div>
            <div className="menu-card" onClick={() => navigate('/Volunteer/report')}>Report Form</div>
            
      <div className="menu-card" onClick={() => navigate('/Volunteer/tasklist')}>Task list</div>
      
      <div className="menu-card" onClick={() => setSelectedCard("chat")}>Chat Box</div>
    </div>
  )}

  {/* Show only the selected section */}
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
        
    
        
  )
}

/* <VolunteerForm  /> */