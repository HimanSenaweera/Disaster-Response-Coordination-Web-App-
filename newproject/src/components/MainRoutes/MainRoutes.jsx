import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import VolunteerPage from '../../pages/Volunteer/Volunteer'
import ResponderPage from '../../pages/Responder/Responder';
import EffectedPage from '../../pages/Effected/Effected';
import GovernmentPage from '../../pages/Government/Government';
import Title from '../../components/Title/Title'
import AboutUs from '../../components/AboutUs/AboutUs'
import Contact from '../../components/Contact/Contact'




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

        <Route path="/Volunteer" element={<VolunteerPage />} />
        <Route path="/Responder" element={<ResponderPage />} />
        <Route path="/Effected" element={<EffectedPage />} />
        <Route path="/Governmnet" element={<GovernmentPage />} />
      </Routes>
    
  );
}
