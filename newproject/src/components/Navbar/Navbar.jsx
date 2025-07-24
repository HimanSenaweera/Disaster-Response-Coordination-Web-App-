import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import "./image.css";
import "../../index.css";
import logo from "../../assets/ChatGPT Image Jul 24, 2025, 10_46_27 AM.png";
import {Link} from 'react-scroll'

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
      <ul className="nav-links center-links">
        <li><a href="#" className='nav-link'>
            <Link to="home" smooth={true} offset={0} duration={500} >Home</Link>
          </a>
        </li>
        <li><a href="#" className='nav-link'><Link to="about" smooth={true} offset={-175} duration={500} >About Us</Link></a></li>
        <li><a href="#" className='nav-link'><Link to="contact" smooth={true} offset={-220} duration={500} >Contact us</Link></a></li>
      </ul>

      <ul className="nav-links right-links">
        <li><button className="nav-btn">Login</button></li>
        <li><button className="nav-btn">Sign In</button></li>
      </ul>

    </nav>
  );
}
