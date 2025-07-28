import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Effected.css';
import RequestForm from '../../components/RequestForm/RequestForm';
import HelpUpdates from '../../components/HelpUpdates/HelpUpdates';

export default function AffectedIndividual() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  // ✅ Back button logic for Navbar
  const handleBack = () => {
    if (selectedCard !== null) {
      setSelectedCard(null); // Go back to menu
    } else {
      navigate(-1); // Go back to previous page
    }
  }

  return (
    <div className="AffectedIndividual">
      <Navbar rightmost="Back" onBack={handleBack} />

      {/* ℹ️ Top banner for urgent info */}
      <div className="info-banner">
        📢 If you are in danger, call <strong>119</strong> or your local emergency number.
        You can also request food, shelter, or medical help below. Stay safe and help others if you can.
      </div>

      {/* 📦 Menu in center */}
      {selectedCard === null && (
        <div className="affected-grid-wrapper">
          <div className="affected-grid-menu">
            <div className="menu-card" onClick={() => setSelectedCard('request')}>
              Submit Help Request
            </div>
            <div className="menu-card" onClick={() => setSelectedCard('updates')}>
              View Help Updates
            </div>
          </div>
        </div>
      )}

      {selectedCard === 'request' && (
        <div className="request-form-container">
          <RequestForm setSelectedCard={setSelectedCard} />
        </div>
      )}

      {selectedCard === 'updates' && (
        <div className="help-updates-container">
          <HelpUpdates setSelectedCard={setSelectedCard} />
        </div>
      )}
    </div>
  );
}
