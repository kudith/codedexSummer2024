"use client"

import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
const logo = "/assets/logo.png";
const header = "/assets/header-bg.jpg";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
      <header className={styles.header}>
          {/* Left section with logo and brand name */}
          <div className={styles.left}>
              <img src={logo} alt="Logo" className={styles.logo} />
              <h1 className={styles.brandName}>Sip & Play Cafe</h1>
          </div>

          {/* Right section with navigation tabs and mode switch button */}
          <div className={styles.right}>
              <nav className={styles.navLinks}>
                  <ul>
                      <li><a href="/">home</a></li>
                      <li><a href="/menu">menu</a></li>
                      <li><a href="/events">events</a></li>
                  </ul>
              </nav>
              {/* Toggle switch */}
                <label className={styles.switch}>
                    <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
          </div>
      </header>
  );
};

export default Header;


// import Image from 'next/image'

// export default function Header() {
//   return (
//     <header className="relative h-screen">
//       <div className="relative h-full w-full">
//         <Image
//           src="/assets/header-bg.jpg"
//           alt="Cafe background"
//           fill
//           quality={100}
//           className="absolute inset-0 z-0 object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 flex items-center justify-center h-full text-center text-eggshell">
//           <div>
//             <h1 className="text-5xl font-bold">Welcome to Sip & Play Cafe</h1>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
