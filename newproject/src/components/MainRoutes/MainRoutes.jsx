import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import VolunteerPage from '../../pages/Volunteer/Volunteer'
import ResponderPage from '../../pages/Responder/Responder';
import EffectedPage from '../../pages/Effected/Effected';
import GovernmentPage from '../../pages/Government/Government';
import Title from '../Title/Title'
import AboutUs from '../AboutUs/AboutUs'
import Contact from '../Contact/Contact'
import VolunteerProfile from '../VolunteerForm/VolunteerForm'; // Form component
import ReportForm from '../Reportform/Reportform';
import Tasklist from '../../components/Tasklist/Tasklist'



export default function MainRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={
        <>
            <Home />
            <AboutUs />
            <div className='container'>
                <Title subTitle='Contact us' title='Get in Touch'/>
                <Contact />
            </div>
        </>
}       />
        
          <Route path="/Volunteer/profile" element={<VolunteerProfile />} />
          <Route path="/Volunteer/report" element={<ReportForm />} />
        <Route path="/Volunteer" element={<VolunteerPage />} />
        <Route path="/Responder" element={<ResponderPage />} />
        <Route path="/Effected" element={<EffectedPage />} />
      <Route path="/Governmnet" element={<GovernmentPage />} />
      <Route path="/Volunteer/tasklist" element={<Tasklist />} />
      </Routes>
    
  );
}
