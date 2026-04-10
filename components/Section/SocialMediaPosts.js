'use client';

import React from 'react';
import { motion } from 'framer-motion';

/** * URL Helpers for social media embeds */
const instagramEmbedUrl = (url) => {
  const cleanUrl = url.endsWith('/') ? url : `${url}/`;
  return `${cleanUrl}embed`;
};

const tiktokEmbedUrl = (url) => {
  const match = url.match(/\/video\/(\d+)/);
  if (!match) return '';
  return `https://www.tiktok.com/player/v1/${match[1]}`;
};

const facebookEmbedUrl = (url) => {
  const encoded = encodeURIComponent(url);
  return `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false&width=320&height=560`;
};

const getEmbedUrl = (item) => {
  if (item.platform === 'Instagram') return instagramEmbedUrl(item.url);
  if (item.platform === 'TikTok') return tiktokEmbedUrl(item.url);
  return facebookEmbedUrl(item.url);
};

/** * EmbedCard: A curated editorial frame for social video content */
const EmbedCard = ({ item, index }) => {
  const embedUrl = getEmbedUrl(item);

  return (
    <div className="snap-center shrink-0 w-[320px] flex flex-col bg-eggshell border-2 border-dark-brown rounded-2xl overflow-hidden shadow-[12px_12px_0px_0px_#49361F] hover:shadow-[6px_6px_0px_0px_#49361F] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
      {/* Editorial Label (Replacing Fake OS Header) */}
      <div className="w-full px-5 py-4 border-b-2 border-dark-brown bg-dark-brown/5 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-light-green uppercase tracking-[0.2em] leading-none mb-1">
            {item.platform}_REF
          </span>
          <span className="text-[9px] font-bold text-dark-brown/40 uppercase tracking-widest leading-none">
            Post ID: {index.toString().padStart(3, '0')}
          </span>
        </div>
        {/* Dice Pip Decoration */}
        <div className="w-2 h-2 bg-light-green rounded-full shadow-[2px_2px_0px_0px_#49361F]"></div>
      </div>

      {/* Media Viewport */}
      <div className="w-full h-[560px] bg-dark-blue flex items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center text-sea-blue/20 font-hind text-xs uppercase tracking-[0.3em] -z-10">
          Syncing Feed...
        </div>
        <iframe
          src={embedUrl}
          title={`${item.platform} Feed ${index}`}
          className="w-full h-full border-none z-10"
          loading="lazy"
          scrolling="no"
          allowFullScreen
          allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
};

/** * TypographicCard: Editorial separator styled like a game manual card */
const TypographicCard = ({ text }) => {
  return (
    <div className="snap-center shrink-0 w-[320px] h-[636px] flex flex-col justify-between bg-dark-brown border-2 border-dark-brown rounded-2xl shadow-[12px_12px_0px_0px_#94B973] p-10 text-left relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute top-0 right-0 text-[12rem] font-inknut text-sea-blue/[0.03] leading-none select-none -translate-y-10 translate-x-10">
        &
      </div>

      <div className="relative z-10">
        <div className="w-12 h-1 bg-light-green mb-8"></div>
        <span className="text-light-green font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
          Community Pulse
        </span>
        <h3 className="font-inknut text-5xl leading-[0.9] text-sea-blue tracking-tighter uppercase">
          {text.split(' ').map((word, i) => (
            <React.Fragment key={i}>{word}<br/></React.Fragment>
          ))}
        </h3>
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        <p className="text-sea-blue/40 text-[10px] font-bold uppercase tracking-widest">
          Sip & Play Brooklyn
        </p>
        <div className="w-full h-[1px] bg-sea-blue/10"></div>
      </div>
    </div>
  );
};

/** * SocialMediaEmbeds: Horizontal scroll section for brand social proof */
const SocialMediaEmbeds = () => {
  const socialItems = [
    { platform: 'Instagram', url: 'https://www.instagram.com/p/C9SsumKP9i-/' },
    { platform: 'Instagram', url: 'https://www.instagram.com/p/CjN53CiAHy1/' },
    { platform: 'TikTok', url: 'https://www.tiktok.com/@sipnplaynycofficial/video/6939953055282498821' },
    { platform: 'Facebook', url: 'https://www.facebook.com/reel/997052531960067' },
    { platform: 'TikTok', url: 'https://www.tiktok.com/@sipnplaynycofficial/video/6932186188321131781' },
  ];

  return (
    <section id="social-feed" className="w-full bg-sea-blue py-24 md:py-32 font-hind overflow-hidden border-t-2 border-dark-brown/5">
      {/* Section Header */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <div className="flex flex-col">
          <span className="text-light-green font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
            Digital Connection — 007
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-inknut text-dark-brown leading-[0.85] tracking-tighter"
          >
            Don&apos;t believe us? <br/>
            <span className="text-light-green text-stroke-brown">See for yourself.</span>
          </motion.h2>
        </div>
        
        <div className="flex flex-col items-start lg:items-end shrink-0">
          <span className="text-[10px] font-black text-dark-brown/40 uppercase tracking-widest mb-4">
            Navigation Instructions
          </span>
          <div className="flex items-center gap-4 text-dark-brown font-bold uppercase tracking-widest text-[11px] border-b-2 border-dark-brown pb-1">
            <span>Scroll horizontally to explore</span>
            <span className="animate-pulse">➝</span>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-12 pb-16 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <TypographicCard text="the best coffee" />

        {socialItems.slice(0, 3).map((item, index) => (
          <EmbedCard item={item} index={index + 1} key={`batch1-${item.platform}-${index}`} />
        ))}

        <TypographicCard text="board game magic" />

        {socialItems.slice(3, 5).map((item, index) => (
          <EmbedCard item={item} index={index + 4} key={`batch2-${item.platform}-${index}`} />
        ))}
        
        {/* End Padding to ensure the last card isn't clipped */}
        <div className="shrink-0 w-8 md:w-24"></div>
      </motion.div>
    </section>
  );
};

export default SocialMediaEmbeds;