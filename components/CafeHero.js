import React from 'react';

const headerImage = "/assets/header-bg.png";
const headerVideo = "/assets/hero_video_2.mov";
const logoLight = "/assets/logoLight.png";
const logo = "/assets/logo.png"

const CafeHero = () => {
  return (
    <div className="relative z-10 bg-sea-blue">
        <div className="relative h-[70vh]">
        <video src={headerVideo} className="w-full h-full object-cover" autoPlay loop muted />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 h-1/5 flex justify-center items-center">
                <img src={logo} alt="Logo" className="rotating bg-light-green rounded-full border-4 border-teal" />
            </div>
        </div>
    </div>
  );
};

export default CafeHero;