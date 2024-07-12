import React from 'react';
import styles from './LandingPage.module.css';
const headerImage = "/assets/header-bg.png";
const logoLight = "/assets/logoLight.png";
const logo = "/assets/logo.png";
const turtle = "/assets/turtle.png";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
        <div className="block">
            <img src={headerImage} alt="Cafe Header" className={styles.headerImage} />
            <div className={styles.logoContainer}>
                <img src={logoLight} alt="Logo" className={styles.rotatingLogo} />
            </div>
        </div>

        <div className={styles.section1Container}>
            <div className={styles.bigTextContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.greenTitleLeft} >Who even</p>
                    <p className={styles.textLeft}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <img src={logo} alt="Logo" className={styles.separator} />
                <div className={styles.textContainer}>
                    <p className={styles.greenTitle}>are we?</p>
                    <p className={styles.textRight}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.section2}>
            <div className={styles.section2ImageHolder}>
                <div className={styles.section2ImageShadow}></div>
                <div className={styles.section2Image}></div>
            </div>
            <div className={styles.section2TextContainer}>
                <p className={styles.section2Header}>so, how do we work?</p>
                <p className={styles.section2Body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

    </div>
    
  );
};

export default LandingPage;
