import React from 'react';
import styles from './LandingPage.module.css';
const logo = "/assets/logo.png";
const owner = "/assets/owner_rm.png"

const AboutUs = () => {
    return (
        <div className="p-3">
            <div className="flex flex-col md:flex-row justify-between w-11/12 max-w-screen-xl mt-5 mb-7 pb-2 mx-auto items-center">
                <div className="flex flex-col mt-3 items-end">
                    <p className="font-inknut text-3xl mb-3 mx-3 text-light-green">Who even</p>
                    <p className="text-xl text-eggshell font-hind text-right mr-3">
                    Our Founder, Jonathan Li, shares a deep-rooted passion for board games, boba, and exquisite cuisine, which inspired him to establish Sip & Play, Park Slope’s premier board game cafe. With a vision to create a welcoming space where community and gaming enthusiasts alike can gather, Jonathan transformed his passion into reality.
                    </p>
                </div>
                <img src={owner} alt="Jonathan Li" className="w-3/5 max-w-[300px] max-h-[300px] mx-8 my-8 justify-center self-center bg-eggshell rounded-lg" />
                <div className="flex flex-col mt-3">
                    <p className="font-inknut text-3xl mx-3 mb-3 text-light-green">are we?</p>
                    <p className="text-xl text-eggshell font-hind ml-3">
                    Beyond our extensive game collection, we invite you to indulge in our meticulously crafted beverages and culinary delights. From artisanal coffee and espresso to refreshing boba drinks, our menu is curated to complement your gaming experience. Pair your favorite game with our selection of sandwiches, snacks, and desserts, meticulously prepared to satisfy every palate.
                    </p>
                </div>
            </div>
      </div>
    );
};

export default AboutUs;