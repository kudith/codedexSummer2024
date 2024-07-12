"use client";

import React, { useEffect } from 'react';
import './custom.css';
import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';



const SocialMediaEmbeds = () => {
  useEffect(() => {
    const scrollContainer = document.getElementById('scrollContainer');

    const handleMouseEnter = () => {
      scrollContainer.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      scrollContainer.style.animationPlayState = 'running';
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="mt-24 bg-sea-blue">
        <h1 className="text-3xl text-light-green font-hind my-8 text-center sm:max-w-md mx-4 sm:mx-auto">
            not sure yet? check out our socials to see if we're a good fit
        </h1>
        <div className="relative overflow-hidden py-5">
            <div className="flex  mb-24 content-center space-x-12 h-2/6 animate-scroll bg-seablue" id="scrollContainer">
                <h1 className="text-3xl text-light-green font-hind mx-5 text-center align-baseline">the best coffee</h1>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <InstagramEmbed url="https://www.instagram.com/p/C9SsumKP9i-/" width={328} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <InstagramEmbed url="https://www.instagram.com/p/CjN53CiAHy1/" width={328} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <TikTokEmbed url="https://www.tiktok.com/@sipnplaynycofficial/video/6939953055282498821" width={328} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <FacebookEmbed url="https://www.facebook.com/reel/997052531960067" width={328} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <TikTokEmbed url="https://www.tiktok.com/@sipnplaynycofficial/video/6932186188321131781" width={328} />
                </div>


        {/* Duplicate the content for the seamless scroll effect */}
            <h1 className="text-3xl text-light-green font-hind my-5 text-center align-middle">board game fun</h1>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <InstagramEmbed url="https://www.instagram.com/p/C9SsumKP9i-/" width={328} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <InstagramEmbed url="https://www.instagram.com/p/CjN53CiAHy1/" width={328} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <TikTokEmbed url="https://www.tiktok.com/@sipnplaynycofficial/video/6939953055282498821" width={328} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <FacebookEmbed url="https://www.facebook.com/reel/997052531960067" width={328} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <TikTokEmbed url="https://www.tiktok.com/@sipnplaynycofficial/video/6932186188321131781" width={328} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default SocialMediaEmbeds;
