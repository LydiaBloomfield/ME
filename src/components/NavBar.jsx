import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo2 from '../assets/logo2.svg';
import { useState, useEffect } from "react";

import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
import resume from "../assets/resume.pdf"


import './NavBar.css'


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('about');

  const emailAddress = 'lydia.r.bloom@gmail.com'; // Replace with your actual email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <div className="logo">
        <a href="#about"><img src={logo2} /></a>
      </div>
      <Nav className="navlinks">
        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Technologies</Nav.Link>
        <Nav.Link href={resume} className="navbar-link" target="_blank">Resume</Nav.Link>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/lydia-bloomfield" target="_blank"><img src={navIcon1} alt="" /></a>
          <a href="https://github.com/LydiaBloomfield" target="_blank"><img src={navIcon2} alt="" /></a>
          <a onClick={handleEmailClick}><img src={navIcon3} alt="" /></a>
        </div>
      </Nav>
    </Navbar>
  );
};
export default NavBar