import React from 'react';
import styles from './LandingPage.module.css';
import SocialMediaEmbeds from './SocialMediaPosts';
import SectionWithSpeechBubble from './SectionWithSpeechBubble';
import BoardGames from './BoardGames';
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
                    Our Founder, Jonathan Li, shares a deep-rooted passion for board games, boba, and exquisite cuisine, which inspired him to establish Sip & Play, Park Slope’s premier board game cafe. With a vision to create a welcoming space where community and gaming enthusiasts alike can gather, Jonathan transformed his passion into reality.
                    </p>
                </div>
                <img src={logo} alt="Logo" className={styles.separator} />
                <div className={styles.textContainer}>
                    <p className={styles.greenTitle}>are we?</p>
                    <p className={styles.textRight}>
                    At Sip & Play, we pride ourselves on offering a diverse library of  games, ranging from classics to modern favorites. At Sip & Play, we strive to create memorable experiences where laughter, strategy, and camaraderie thrive. Join us for a game-filled adventure and discover why Sip & Play is more than just a cafe – it's a community hub where board games and great food come together.
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
                Come on in with your friends and family and play boardgames from our collection of over 500+ games! Just $10 a person for 3 hours of gameplay. ($12 a person Friday-Sunday and Holidays) Play while enjoying bubble tea, coffee, beer sandwiches or salads and have a great time! If you want to guarantee a table, you can make a reservation which is $15 a person for 3 hours of gameplay. 
                </p>
                <br></br>
                <a className="text-sea-blue" href="https://www.exploretock.com/sipnplay/">https://www.exploretock.com/sipnplay/</a>
            </div>
        </div>
        <SectionWithSpeechBubble />
        <SocialMediaEmbeds />

    </div>
    
  );
};

export default LandingPage;
