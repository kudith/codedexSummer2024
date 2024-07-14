import React from 'react';
import styles from './LandingPage.module.css';
import CafeHero from './CafeHero';
import AboutUs from './AboutUs';
import SocialMediaEmbeds from './SocialMediaPosts';
import SectionWithSpeechBubbles from './SectionWithSpeechBubbles';
import BoardGameCarousel from './BoardGame';
import HowWeWork from './HowWeWork';
const headerImage = "/assets/header-bg.png";
const logoLight = "/assets/logoLight.png";
const logo = "/assets/logo.png";

const LandingPage = () => {
  return (
    <div className="relative z-10 bg-sea-blue">
        <CafeHero />
        <AboutUs />
        <HowWeWork />
        <SectionWithSpeechBubbles />
        <BoardGameCarousel />
        <SocialMediaEmbeds />
    </div>
  );
};

export default LandingPage;
