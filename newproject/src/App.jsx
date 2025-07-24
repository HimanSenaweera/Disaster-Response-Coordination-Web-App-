import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ChooseYourRole from './components/ChooseYourRole/ChooseYourRole'
import Title from './components/Title/Title'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <div className='container'>
        <Title subTitle='Choose Your Role' title='Support. Respond. Recover'/>
        <ChooseYourRole />
      </div>
      
      
    </div>
  )
}
