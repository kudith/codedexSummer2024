'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Editorial About Section - Typographic Manifesto Style
 * Removed images to focus on bold typography and structured grid layout.
 */
const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-sea-blue py-24 md:py-40 font-hind overflow-hidden border-t-2 border-dark-brown/5">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Main Editorial Header */}
        <div className="flex flex-col mb-24 lg:mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-light-green font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
          >
            Philosophy — 001
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inknut text-5xl md:text-8xl xl:text-9xl text-dark-brown leading-[0.85] tracking-tighter"
          >
            The Story Behind <br/>
            <span className="text-light-green">The Sip.</span>
          </motion.h2>
        </div>

        {/* 3-Column Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Column 1: The Founder (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="mb-8 flex items-center gap-4">
               <div className="w-10 h-[2px] bg-light-brown"></div>
               <span className="font-inknut text-xl text-dark-brown">The Visionary</span>
            </div>
            <p className="text-xl md:text-2xl text-dark-blue font-medium leading-relaxed">
              Our Founder, <span className="text-dark-brown font-bold">Jonathan Li</span>, shares a deep-rooted passion for board games, boba, and exquisite cuisine. 
            </p>
            <p className="mt-6 text-dark-blue/70 leading-relaxed italic">
              Inspired to establish Park Slope’s premier board game cafe, Jonathan transformed a simple vision into a community reality—creating a welcoming space where gaming enthusiasts gather.
            </p>
          </motion.div>

          {/* Column 2: Technical Specs / Quote (Center) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-4 bg-eggshell border-2 border-dark-brown p-10 rounded-[2rem] shadow-[16px_16px_0px_0px_#DAB281] relative overflow-hidden"
          >
             <div className="relative z-10">
                <span className="text-[10px] font-black text-light-green uppercase tracking-[0.3em] mb-4 block">Manifesto.sys</span>
                <p className="font-inknut text-2xl md:text-3xl text-dark-brown leading-tight mb-8">
                  &quot;We facilitate happiness by bringing people together.&quot;
                </p>
                <div className="flex flex-col gap-2">
                   <div className="flex justify-between border-b border-dark-brown/10 pb-2">
                      <span className="text-[10px] uppercase font-bold text-dark-brown/40">Location</span>
                      <span className="text-[10px] uppercase font-bold text-dark-brown">Brooklyn, NY</span>
                   </div>
                   <div className="flex justify-between border-b border-dark-brown/10 pb-2">
                      <span className="text-[10px] uppercase font-bold text-dark-brown/40">Est. Date</span>
                      <span className="text-[10px] uppercase font-bold text-dark-brown">Circa 2017</span>
                   </div>
                </div>
             </div>
             {/* Decorative Background Icon */}
             <div className="absolute -bottom-10 -right-10 text-[15rem] font-inknut text-dark-brown/[0.03] select-none pointer-events-none">
                &amp;
             </div>
          </motion.div>

          {/* Column 3: The Experience (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-4 flex flex-col"
          >
             <div className="mb-8 flex items-center gap-4">
               <div className="w-10 h-[2px] bg-light-brown"></div>
               <span className="font-inknut text-xl text-dark-brown">The Craft</span>
            </div>
            <p className="text-xl md:text-2xl text-dark-blue font-medium leading-relaxed">
              Beyond our extensive collection, we invite you to indulge in <span className="text-light-green font-bold">meticulously crafted</span> beverages and culinary delights.
            </p>
            <p className="mt-6 text-dark-blue/70 leading-relaxed">
              From artisanal coffee and espresso to refreshing boba drinks, our menu is curated to complement your gaming experience. Pair your favorite session with our selection of sandwiches and snacks.
            </p>
          </motion.div>

        </div>

        {/* Bottom Decorative Scroll Text */}
        <div className="mt-32 pt-12 border-t border-dark-brown/5 overflow-hidden">
           <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap flex gap-20"
           >
              {[...Array(5)].map((_, i) => (
                <span key={i} className="font-inknut text-6xl md:text-8xl text-dark-brown/[0.8] uppercase">
                  Sip & Play Brooklyn — Community First — Board Games & Boba — 
                </span>
              ))}
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;