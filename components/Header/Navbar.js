'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from "@/components/Header/Logo";

/**
 * Spring transition for a snappy, high-end tactile feel
 */
const navTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 30,
};

const Navbar = ({ closeNavbar, isScrolled }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-4 md:px-0">
      <motion.nav
        initial={false}
        animate={{
          y: isScrolled ? 20 : 0,
          width: isScrolled ? '95%' : '100%',
          borderRadius: isScrolled ? '16px' : '0px',
        }}
        transition={navTransition}
        className={`pointer-events-auto max-w-[1440px] flex justify-between items-center px-6 md:px-12 py-4 bg-sea-blue border-dark-brown transition-all duration-300 ${
          isScrolled 
            ? 'border-2 shadow-[8px_8px_0px_0px_#49361F]' 
            : 'border-b-2'
        }`}
      >
        {/* Left: Branding Area */}
        <div className="flex items-center gap-6" onClick={closeNavbar}>
          <Logo compact={isScrolled} />
          
          {/* Editorial Metadata (Replacing Fake OS Dots) */}
          <div className="hidden lg:flex flex-col border-l border-dark-brown/10 pl-6 gap-1">
             <span className="text-[10px] font-black text-light-green uppercase tracking-[0.3em] leading-none">
               Player 01
             </span>
             <span className="text-[9px] font-bold text-dark-brown/40 uppercase tracking-widest leading-none">
               Turn: Your Move
             </span>
          </div>
        </div>

        {/* Center: Navigation Links (Board Game Scoreboard Style) */}
        <div className="hidden md:flex items-center bg-dark-brown/5 rounded-full px-8 py-2 border border-dark-brown/5">
          <div className="flex items-center space-x-12">
            <NavLink href="/" label="Home" onClick={closeNavbar} />
            <NavLink href="/menu" label="Menu" onClick={closeNavbar} />
            <NavLink href="/events" label="Events" onClick={closeNavbar} />
          </div>
        </div>

        {/* Right: Action Button */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end hidden lg:flex">
             <span className="text-[9px] font-black text-dark-brown uppercase tracking-widest">Brooklyn, NY</span>
             <span className="text-[9px] font-medium text-dark-brown/40 uppercase tracking-widest italic">Est. 2024</span>
          </div>
          
          <motion.a
            href="https://www.exploretock.com/sipnplay/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={closeNavbar}
            className="px-8 py-3 bg-dark-brown text-sea-blue font-inknut text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm border-2 border-dark-brown shadow-[6px_6px_0px_0px_#94B973] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-300"
          >
            RSVP NOW
          </motion.a>
        </div>

        {/* Mobile: Minimalist Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-dark-brown text-sea-blue rounded-xl shadow-[4px_4px_0px_0px_#72A409]" 
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
};

/**
 * Clean NavLink with Editorial Underline
 */
const NavLink = ({ href, label, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className="group relative">
      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-dark-brown cursor-pointer block pb-1 transition-colors group-hover:text-light-green">
        {label}
      </span>
      {/* Editorial Marker (Dice Pip inspired) */}
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-light-green rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
    </Link>
  );
};

export default Navbar;