import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import "./image.css";
import "../../index.css";
import logo from "../../assets/ChatGPT Image Jul 24, 2025, 10_46_27 AM.png";

export default function Navbar() {
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
      <ul className="nav-links">
        <li><a href="#" className='nav-link'>Home</a></li>
        <li><a href="#" className='nav-link'>Choose Your Role</a></li>
        <li><a href="#" className='nav-link'>Login</a></li>
        <li><a href="#" className='nav-link'>Register</a></li>
        <li><a href="#" className='nav-link'>Contact us</a></li>
      </ul>
    </nav>
  );
}
