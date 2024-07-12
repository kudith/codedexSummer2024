"use client"

import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import RightNav from './RightNav.js';
const logo = "/assets/logo.png";
const header = "/assets/header-bg.jpg";

const Header = () => {

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className={styles.header}>
          {/* Left section with logo and brand name */}
          <div className={styles.left}>
              <img src={logo} alt="Logo" className={styles.logo} />
              <h1 className={styles.brandName}>Sip & Play Cafe</h1>
          </div>

          {/* Right section with navigation tabs and mode switch button */}
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
            <RightNav />
      </header>
  );
};

export default Header;