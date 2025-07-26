import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

import { useState} from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MainRoutes from './components/MainRoutes/MainRoutes';



export default function App() {
  const [showLogin , setShowlogin]= useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowlogin} />}
      <Navbar setShowlogin={setShowlogin} />
      <MainRoutes />
    </>
  );
}

/*      <div className='container'>
        <Title subTitle='Choose Your Role' title='Support. Respond. Recover'/>
        <ChooseYourRole />
      </div>*/ 