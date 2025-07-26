import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import "./image.css";
import "../../index.css";
import logo from "../../assets/ChatGPT Image Jul 24, 2025, 10_46_27 AM.png";
import {Link} from 'react-scroll'

export default function Navbar({setShowlogin}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`container navbar ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} className='logo' alt="logo" />
      <ul className="nav-links center-links">
  <li>
    <Link to="home" smooth={true} offset={0} duration={500} className="nav-link">Home</Link>
  </li>
  <li>
    <Link to="about" smooth={true} offset={-175} duration={500} className="nav-link">About Us</Link>
  </li>
  <li>
    <Link to="contact" smooth={true} offset={-220} duration={500} className="nav-link">Contact us</Link>
  </li>
</ul>

      <ul className="nav-links right-links">
        <li><button className="nav-btn" onClick={()=>setShowlogin(true)}>Login/SignIn</button></li>
        
      </ul>

    </nav>
  );
}
