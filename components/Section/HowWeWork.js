'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * HowWeWork Section - Rulebook Editorial Style
 * Fixed: Z-index layering to ensure frame UI elements sit on top of the image.
 */
const HowWeWork = () => {
  return (
    <section id="how-it-works" className="w-full bg-light-brown py-24 md:py-32 font-hind overflow-hidden border-t-2 border-dark-brown/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Editorial Instructions */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:sticky lg:top-32"
        >
          <div className="mb-10">
            <span className="text-dark-brown font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block opacity-60">
              Manual — Instruction 01
            </span>
            <h2 className="text-5xl md:text-7xl font-inknut text-sea-blue leading-[0.9] tracking-tighter">
              So, how do we <br/> <span className="text-dark-brown">work?</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-8">
            <p className="text-xl md:text-2xl text-dark-blue font-medium leading-relaxed">
              Come on in with your friends and family and play board games from our collection of over <span className="text-dark-brown font-bold">500+ titles</span>.
            </p>
            
            {/* Structured Pricing Card (Board Game Stats Style) */}
            <div className="relative group max-w-md">
              <div className="absolute inset-0 bg-dark-brown translate-x-3 translate-y-3 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
              <div className="bg-eggshell border-2 border-dark-brown p-8 rounded-2xl shadow-xl">
                 <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-end border-b border-dark-brown/10 pb-4">
                       <span className="text-[10px] font-black text-light-green uppercase tracking-widest">Standard Play</span>
                       <span className="font-inknut text-2xl text-dark-brown">$10 <small className="text-xs">/PP</small></span>
                    </div>
                    <div className="flex justify-between items-end border-b border-dark-brown/10 pb-4">
                       <span className="text-[10px] font-black text-light-green uppercase tracking-widest">Weekend & Holiday</span>
                       <span className="font-inknut text-2xl text-dark-brown">$12 <small className="text-xs">/PP</small></span>
                    </div>
                    <p className="text-[11px] text-dark-blue/60 leading-relaxed uppercase font-bold tracking-wider">
                      * All rates cover a generous 3-hour gaming session.
                    </p>
                 </div>
              </div>
            </div>

            <p className="text-lg text-dark-blue/80 leading-relaxed italic">
              Play while enjoying boba, coffee, or snacks. To guarantee your spot, reservations are <span className="text-dark-brown font-bold">$15 per person</span>.
            </p>
          </div>

          <div className="mt-12">
            <motion.a
              href="https://www.exploretock.com/sipnplay/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-dark-brown text-sea-blue font-inknut text-[10px] tracking-[0.3em] uppercase rounded-sm border-2 border-dark-brown shadow-[8px_8px_0px_0px_#72A409] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-300"
            >
              Secure a Table
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Wide Visual Frame (FIXED Z-INDEX) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full group"
        >
          {/* Neo-Brutalist Shadow */}
          <div className="absolute inset-0 bg-dark-brown translate-x-4 translate-y-4 rounded-[2.5rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          
          {/* Main Visual Frame Container */}
          <div className="relative w-full aspect-[16/10] bg-sea-blue border-2 border-dark-brown rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
            
            {/* 1. TOP UI BAR (Z-30 to stay on top) */}
            <div className="relative w-full h-14 border-b-2 border-dark-brown bg-dark-brown flex justify-between items-center px-10 z-30 shrink-0">
               <div className="flex gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-light-green"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-sea-blue opacity-20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-sea-blue opacity-20"></div>
               </div>
               <span className="text-[10px] font-black text-sea-blue/40 uppercase tracking-[0.4em]">Live_Atmosphere.raw</span>
            </div>

            {/* 2. IMAGE WRAPPER (Z-10 to stay behind UI) */}
            <div className="relative flex-grow z-10 w-full h-full">
              <Image
                src="/assets/sipnplayhowitworks.avif"
                alt="Sip & Play Interior Atmosphere"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 900px"   
                priority           
              />
              
              {/* Aesthetic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent pointer-events-none"></div>
            </div>

            {/* 3. FLOATING BRANDING OVERLAY (Z-30 to stay on top) */}
            <div className="absolute bottom-8 right-8 z-30">
               <div className="bg-eggshell text-dark-brown px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_0px_#72A409] border-2 border-dark-brown">
                 Brooklyn HQ // NY
               </div>
            </div>
          </div>

          {/* Optional: Design markers outside the frame for extra aesthetic */}
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-dark-brown/20 pointer-events-none"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-dark-brown/20 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowWeWork;