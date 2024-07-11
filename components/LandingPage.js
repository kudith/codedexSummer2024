import React from 'react';
import styles from './LandingPage.module.css';
const headerImage = "/assets/header-bg.png";
const logo = "/assets/logoLight.png";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <img src={headerImage} alt="Cafe Header" className={styles.headerImage} />
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.rotatingLogo} />
      </div>
      <section className={styles.content}>
        <h1>Welcome to Sip & Play Café</h1>
        <p>Forget and savor that sip.</p>
      </section>
    </div>
  );
};

export default LandingPage;
