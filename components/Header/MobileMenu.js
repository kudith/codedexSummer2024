'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from '@/components/Header/Logo';

const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { 
    opacity: 1, 
    x: '0%', 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0,
    x: '100%', 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const mobileLinks = [
  { label: 'Home', href: '/', num: '01' },
  { label: 'Menu', href: '/menu', num: '02' },
  { label: 'Events', href: '/events', num: '03' },
];

const MobileMenu = ({ isOpen, toggleNavbar, closeNavbar }) => (
  <motion.div
    className="fixed inset-0 w-full min-h-screen bg-sea-blue z-[100] flex flex-col overflow-hidden"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={menuVariants}
  >
    {/* Decorative Background Grid (Board Game Texture) */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(#49361F 1px, transparent 1px)', size: '30px 30px' }} />

    {/* Header Menu */}
    <div className="flex justify-between items-center px-8 py-6 relative z-10">
      <div onClick={closeNavbar} className="flex flex-col">
        <Logo compact />
        <span className="text-[9px] font-bold text-dark-brown/30 uppercase tracking-[0.3em] mt-1">Manual v.2024</span>
      </div>
      
      <button 
        onClick={toggleNavbar} 
        className="group flex items-center gap-3"
      >
        <span className="text-[10px] font-black text-dark-brown uppercase tracking-widest opacity-40">Close</span>
        <div className="p-3 bg-eggshell border-2 border-dark-brown text-dark-brown shadow-[4px_4px_0px_0px_#49361F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </button>
    </div>

    {/* Navigation Items */}
    <div className="flex-1 flex flex-col justify-center px-10 relative z-10">
      <motion.div 
        className="flex flex-col gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {mobileLinks.map((item) => (
          <motion.div key={item.href} variants={itemVariants}>
            <Link href={item.href} onClick={closeNavbar} className="group flex items-baseline gap-6">
              <span className="font-inknut text-xs text-light-green mb-4">{item.num}</span>
              <span className="font-inknut text-5xl text-dark-brown group-hover:text-light-green transition-colors leading-none tracking-tighter">
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}

        {/* Action Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="https://www.exploretock.com/sipnplay/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNavbar}
            className="inline-flex items-center justify-center w-full py-5 bg-dark-brown text-sea-blue font-inknut text-xs tracking-[0.3em] uppercase border-2 border-dark-brown shadow-[8px_8px_0px_0px_#94B973] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
          >
            RSVP TABLE
          </a>
        </motion.div>
      </motion.div>
    </div>

    {/* Footer Metadata */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="p-10 flex justify-between items-end relative z-10"
    >
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-black text-light-green uppercase tracking-widest">Brooklyn</span>
        <span className="text-[9px] font-bold text-dark-brown/40 uppercase tracking-[0.2em]">471 5th Ave, NY</span>
      </div>
      <div className="text-right">
        <span className="text-[10px] font-black text-dark-brown uppercase tracking-widest">Est. 2024</span>
      </div>
    </motion.div>
  </motion.div>
);

export default MobileMenu;