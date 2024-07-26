import React from 'react';
import styles from './LandingPage.module.css';
import CafeHero from '../../Section/CafeHero';
import AboutUs from '../../Section/AboutUs';
import SocialMediaEmbeds from '../../Section/SocialMediaPosts';
import SectionWithSpeechBubbles from '../../Section/SectionWithSpeechBubbles';
import BoardGameCarousel from '../Menu/BoardGames';
import HowWeWork from '../../Section/HowWeWork';
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
