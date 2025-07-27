import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { useLocation } from 'react-router-dom';


import { useState} from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MainRoutes from './components/MainRoutes/MainRoutes';
import ChatBox from './components/Chatbox/Chatbox';



export default function App() {
  const [showLogin, setShowlogin] = useState(false);
  const location = useLocation(); // variable to store the current route
  const isHome = location.pathname === '/'; //check whether we are on the home page if not do not display the Nav

  return (
    <div className="App">
        <>
      {showLogin && <LoginPopup setShowLogin={setShowlogin} />}
      {isHome && <Navbar setShowlogin={setShowlogin} first='Home' second='About Us' third='Contact Us' first_='home' second_='about' third_='contact' rightmost='Login/SignIn'/>} 
      <MainRoutes />
    </>
      
    
    </div>
  );

}

/*      <div className='container'>
        <Title subTitle='Choose Your Role' title='Support. Respond. Recover'/>
        <ChooseYourRole />
      </div>*/

      
      /*   
       <ChatBox /> */