"use client"

import React, { useState, useEffect } from 'react';
import styles from "./RightNav.module.css";

const RightNav = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    

    return (
        <div className={styles.right}>
            <nav className={styles.navLinks}>
              <ul>
                <li><a href="/public">home</a></li>
                <li><a href="/menu-page">menu</a></li>
                <li><a href="/events">events</a></li>
                {/* Toggle switch
                <label className={styles.switch}>
                    <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label> */}
              </ul>
            </nav>
        </div>
    );
};

export default RightNav;