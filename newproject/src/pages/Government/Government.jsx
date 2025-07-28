import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './Government.css';
import DisasterBanner from '../../components/DisasterBanner/DisasterBanner';

export default function GovernmentHelpCenter() {
  const navigate = useNavigate();
  // 🧪 Temporary mock data (to simulate incoming disaster data)
  const disasterList = [
    {
      id: "cluster123",
      type: "Flood",
      location: "Galle",
      priority: "High",
      status: "Ongoing",
      timestamp: "2025-07-28T08:15:00Z",
      reportedBy: [
        { name: "Tharindu", role: "Volunteer", contact: "071-1234567" },
        { name: "Nimasha", role: "Affected Individual", contact: "077-9876543" },
      ],
      emergencyServices: {
        police: "Galle Police Station - 091-2223333",
        fire: "Galle Fire Brigade - 091-4445555",
        hospital: "Karapitiya Hospital - 091-6667777"
      },
      influenceContacts: [
        { name: "Mr. Sunil", role: "Village Officer", contact: "077-9998888" }
      ]
    },
    {
      id: "cluster124",
      type: "Landslide",
      location: "Badulla",
      priority: "Critical",
      status: "New",
      timestamp: "2025-07-28T09:30:00Z",
      reportedBy: [
        { name: "Kavindu", role: "Affected Individual", contact: "071-2211444" }
      ],
      emergencyServices: {
        police: "Badulla Police - 055-1122334",
        fire: "Badulla Fire - 055-4455667",
        hospital: "Badulla Base Hospital - 055-9988776"
      },
      influenceContacts: [
        { name: "Ms. Dinali", role: "District Officer", contact: "071-3344556" }
      ]
    }
  ];

  return (
    <div className="GovernmentHelpCenter">
      <Navbar rightmost="Back" onBack={() => navigate('/')} />
      <h1>Government Help Centre Dashboard</h1>

      {/* 🧠 Render each disaster banner */}
      <div className="disaster-list">
        {disasterList.map(disaster => (
          <DisasterBanner key={disaster.id} disaster={disaster} />
        ))}
      </div>
    </div>
  );
}