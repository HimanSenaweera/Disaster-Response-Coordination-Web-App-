import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ChooseYourRole from './components/ChooseYourRole/ChooseYourRole'
import Title from './components/Title/Title'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      
      <AboutUs />
      <div className='container'>
        <Title subTitle='Contact us' title='Get in Touch'/>
        <Contact />
      </div>


      
      
    </div>
  )
}

/*      <div className='container'>
        <Title subTitle='Choose Your Role' title='Support. Respond. Recover'/>
        <ChooseYourRole />
      </div>*/ 