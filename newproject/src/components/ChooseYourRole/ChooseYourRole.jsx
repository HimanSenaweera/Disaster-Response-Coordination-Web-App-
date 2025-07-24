import React from 'react'
import role1 from "../../assets/firstresponders.jpeg"
import role2 from "../../assets/volunteers.jpg"
import role3 from "../../assets/affectedindividuals.jpg"
import role4 from "../../assets/Army_assists_in__disaster_P09.jpg"
import "./ChooseYourRole.css"



export default function ChooseYourRole() {
  return (
    <div className='role'>
        <div className='role1'>
            <img src={role1} alt="" />
            <div className='caption'>
                <p>First Responders</p>
            </div>
        </div>
        <div className='role2'>
            <img src={role2} alt="" />
            <div className='caption'>
                <p>Volunteers</p>
            </div>
        </div>
        <div className='role3'>
            <img src={role3} alt="" />
            <div className='caption3'>
                <p>Affected Individuals</p>
            </div>
        </div>
        <div className='role4'>
            <img src={role4} alt="" />
            <div className='caption4'>
                <p>Government Help Centre</p>
            </div>
        </div>
      
    </div>
  )
}