"use client"

import React, { useState } from 'react';
import RightNav from './RightNav.js';
const logo = '/assets/logo.png'; 
const headerBg = '/assets/header-bg.jpg'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-blue-800 text-white flex justify-between items-center px-4 py-2 z-10">
      {/* Left section with logo and brand name */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 mr-2" />
        <h1 className="text-xl font-bold">Sip & Play Cafe</h1>
      </div>

      {/* Right section with navigation tabs and mode switch button */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar h-0.5 w-5 bg-white mb-1"></div>
        <div className="bar h-0.5 w-5 bg-white mb-1"></div>
        <div className="bar h-0.5 w-5 bg-white"></div>
      </div>
      
      {/* Conditionally render RightNav based on menu state */}
      {isMenuOpen && <RightNav />}
    </header>
  );
};

export default Header;