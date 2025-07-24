import React from 'react'
import "./AboutUs.css"
import Slideshow from '../Slideshow/Slideshow'

export default function AboutUs() {
  return (
    <div className='about'>
        <div className='about-left'>
            <Slideshow />
        </div>
        <div className='about-right'>
            <h3 >About Us</h3>
            <p>
                In times of crisis, every second matters. Our mission is to bridge the gap between those in urgent need and those who are ready to help. 
                ResQNet is an AI-powered disaster response coordination platform designed to bring speed, structure, and intelligence to emergency management.
            </p>
            <p>
            From first responders to volunteers, affected individuals to government officials ResQnet unites all key players under one digital roof. 
            Using real-time data analysis, task prioritization, and intuitive dashboards, we ensure that help reaches where it's needed most faster and smarter.
            </p>
            <p>
            Whether it's a flood, earthquake, wildfire, or any disaster scenario, ResQNet adapts with intelligent workflows to simplify communication, track resources, and deliver aid efficiently.
            </p>
            <p>
            Developed with compassion and powered by cutting-edge technology, our goal is simple: to save lives and restore hope when it matters most.
            </p>
        </div>
        <div className="scroll-me">
            <div className="m">
                <div className="w"></div>
            </div>
        </div>
      
    </div>
  )
}
