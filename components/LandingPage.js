import React from 'react';
import styles from './LandingPage.module.css';
import SocialMediaEmbeds from './SocialMediaPosts';
import SectionWithSpeechBubbles from './SectionWithSpeechBubbles';
import BoardGameCarousel from './BoardGame';
const headerImage = "/assets/header-bg.png";
const logoLight = "/assets/logoLight.png";
const logo = "/assets/logo.png";

const LandingPage = () => {
  return (
    <div className="relative z-10 bg-sea-blue">
        <div className="relative h-[70vh]">
            <img src={headerImage} alt="Cafe Header" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 flex justify-center items-center">
                <img src={logoLight} alt="Logo" className="rotating-logo" />
            </div>
        </div>

      <div className={styles.section1Container}>
        <div className={styles.bigTextContainer}>
          <div className={styles.textContainer}>
            <p className={styles.greenTitleLeft}>Who even</p>
            <p className={styles.textLeft}>
              Our Founder, Jonathan Li, shares a deep-rooted passion for board games, boba, and exquisite cuisine, which inspired him to establish Sip & Play, Park Slope’s premier board game cafe. With a vision to create a welcoming space where community and gaming enthusiasts alike can gather, Jonathan transformed his passion into reality.
            </p>
          </div>
          <img src={logo} alt="Logo" className={styles.separator} />
          <div className={styles.textContainer}>
            <p className={styles.greenTitle}>are we?</p>
            <p className={styles.textRight}>
              Beyond our extensive game collection, we invite you to indulge in our meticulously crafted beverages and culinary delights. From artisanal coffee and espresso to refreshing boba drinks, our menu is curated to complement your gaming experience. Pair your favorite game with our selection of sandwiches, snacks, and desserts, meticulously prepared to satisfy every palate.
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
            Come on in with your friends and family and play board games from our collection of over 500+ games! 
            Just $10 a person for 3 hours of gameplay. ($12 a person Friday-Sunday and Holidays) 
            Play while enjoying bubble tea, coffee, beer sandwiches or salads and have a great time! 
            If you want to guarantee a table, you can make a reservation which is $15 a person for 3 hours of gameplay. 
            <br></br>
            <br></br>
            <a className="text-xl font-bold font-inknut" href="https://www.exploretock.com/sipnplay/">RSVP</a>
          </p>
        </div>
      </div>
      <SectionWithSpeechBubbles />
      <BoardGameCarousel />
      <SocialMediaEmbeds />
    </div>
  );
};

export default LandingPage;
