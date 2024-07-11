import React from 'react';
import styles from './LandingPage.module.css';
const headerImage = "/assets/header-bg.png";
const logo = "/assets/logoLight.png";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
        <div className="block">
            <img src={headerImage} alt="Cafe Header" className={styles.headerImage} />
            <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.rotatingLogo} />
        </div>
        </div>
        <div>
            <div className={styles.bigTextContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.greenTitle} >Who even</p>
                    <p className={styles.textLeft}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.textContainer}>
                    <p className={styles.greenTitle}>are we?</p>
                    <p className={styles.textRight}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default LandingPage;
