'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faTiktok,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

/**
 * Ambient background texture — Floating Dice
 */
const FloatingDice = ({ className, delay = 0, duration = 8 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      y: [0, -25, 0],
      rotate: [0, 90, 180, 270, 360],
      x: [0, 15, 0],
      opacity: 0.08
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
    className={`absolute pointer-events-none ${className}`}
  >
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height="90" rx="15" stroke="#72A409" strokeWidth="6"/>
      <circle cx="30" cy="30" r="7" fill="#72A409"/>
      <circle cx="70" cy="70" r="7" fill="#72A409"/>
      <circle cx="50" cy="50" r="7" fill="#72A409"/>
    </svg>
  </motion.div>
);

const Footer = () => {
  return (
    <footer className="relative w-full bg-dark-blue text-sea-blue py-24 md:py-32 font-hind border-t-[12px] border-dark-brown overflow-hidden">
      
      <FloatingDice className="top-12 left-[8%]" delay={0} duration={10} />
      <FloatingDice className="bottom-24 right-[12%] scale-125" delay={2} duration={12} />

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">

          {/* Section 01: Inquiry */}
          <div className="md:col-span-3 flex flex-col gap-12">
            <div>
              <span className="text-light-green text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                Contact // 001
              </span>
              <h3 className="font-inknut text-3xl md:text-4xl text-sea-blue mb-8 tracking-tighter">Reach out.</h3>
              <ul className="text-lg space-y-4 font-medium text-sea-blue/60">
                <li className="hover:text-light-green transition-colors cursor-pointer duration-300 w-fit">
                  sipnplaynyc@gmail.com
                </li>
                <li className="hover:text-light-green transition-colors cursor-pointer duration-300 w-fit">
                  718-971-1684
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <SocialLink href="https://discord.com/invite/bdURvWC" icon={faDiscord} label="Discord" />
              <SocialLink href="https://www.facebook.com/sipnplaynyc/" icon={faFacebook} label="Facebook" />
              <SocialLink href="https://www.tiktok.com/@sipnplaynycofficial" icon={faTiktok} label="TikTok" />
              <SocialLink href="https://www.instagram.com/sipnplaynyc/?hl=en" icon={faInstagram} label="Instagram" />
            </div>
          </div>

          {/* Section 02: Codédex Submission (Highlight) */}
          <div className="md:col-span-5 flex flex-col gap-10 md:px-10 border-y-2 md:border-y-0 md:border-x-2 border-sea-blue/5 py-12 md:py-0">
            <div>
              <span className="text-light-green text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                Summer Hackathon // 2024
              </span>
              <h3 className="font-inknut text-3xl md:text-4xl text-sea-blue mb-8 tracking-tighter">The Build.</h3>
              <p className="text-sea-blue/60 text-lg md:text-xl leading-relaxed mb-8">
                Exclusively developed for the <strong className="text-light-green font-bold uppercase tracking-wider">Codédex Summer Hackathon 2024</strong>. 
                Designed and engineered by{" "}
                <a href="https://github.com/kudith" target="_blank" rel="noopener noreferrer" className="text-sea-blue font-bold italic underline decoration-light-green underline-offset-4 hover:text-light-green transition-colors">adty</a>,{" "}
                <a href="https://github.com/brateepodder" target="_blank" rel="noopener noreferrer" className="text-sea-blue font-bold italic underline decoration-light-green underline-offset-4 hover:text-light-green transition-colors">Bratee</a>, &{" "}
                <a href="https://github.com/ritwiktrivedi" target="_blank" rel="noopener noreferrer" className="text-sea-blue font-bold italic underline decoration-light-green underline-offset-4 hover:text-light-green transition-colors">Ritwik</a>.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-eggshell/5 border border-light-green/20 rounded-sm">
                 <div className="w-1.5 h-1.5 rounded-full bg-light-green animate-pulse"></div>
                 <span className="text-light-green text-[10px] font-black uppercase tracking-[0.3em]">Project Open Source</span>
              </div>
            </div>
          </div>

          {/* Section 03: Geolocation */}
          <div className="md:col-span-4 flex flex-col gap-10">
            <div>
              <span className="text-light-green text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                Location // 003
              </span>
              <h3 className="font-inknut text-3xl md:text-4xl text-sea-blue mb-8 tracking-tighter">The Spot.</h3>
              <p className="text-lg font-medium text-sea-blue/60 mb-8 leading-tight">
                471 5th Ave, Brooklyn, NY 11215
              </p>

              <div className="relative group">
                <div className="absolute inset-0 bg-light-brown translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <div className="w-full aspect-video bg-dark-brown border-2 border-eggshell/20 rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2648664653916!2d-73.98952032362695!3d40.66813264029953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b963c296a77%3A0x33cab105836ef465!2sSip%20%26%20Play!5e0!3m2!1sen!2sus!4v1775820700520!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(85%) opacity(0.7)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sip & Play Brooklyn Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branding Footer */}
        <div className="mt-32 pt-12 border-t border-sea-blue/5 flex flex-col lg:flex-row justify-between items-center gap-12">
          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            className="font-inknut text-7xl md:text-[12rem] leading-none text-sea-blue uppercase tracking-tighter select-none pointer-events-none"
          >
            Sip & Play
          </motion.h1>
          
          <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
             <div className="flex items-center gap-4 text-light-green font-black text-[10px] uppercase tracking-[0.5em]">
               <span>Play Every Day</span>
             </div>
             <p className="text-[10px] text-sea-blue/20 uppercase tracking-widest font-bold">
               © {new Date().getFullYear()} All Rights Reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-14 h-14 flex items-center justify-center bg-sea-blue text-dark-blue border-2 border-dark-brown rounded-full shadow-[6px_6px_0px_0px_#94B973] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] hover:bg-light-green transition-all duration-300"
  >
    <FontAwesomeIcon icon={icon} size="lg" />
  </a>
);

export default Footer;