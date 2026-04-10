'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

/**
 * Dynamically import 3D Snack Model
 * Optimized for performance with a clean loading placeholder
 */
const HotBites3D = dynamic(() => import('@/components/3dModels/HotBites3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-dark-brown/20 font-hind text-xs uppercase tracking-[0.2em] z-0">
      Preparing Kitchen...
    </div>
  )
});

/**
 * Animation variants for professional list entrance
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const HotBitesSection = () => {
  const snackMenu = [
    { name: 'Chicken Poppers', price: '$6.00' },
    { name: 'Mozz Sticks', price: '$7.00' },
    { name: 'Pigs in a Blanket', price: '$7.00' },
    { name: 'Tater Tots', price: '$5.00' },
    { name: 'Chicken Tenders', price: '$8.00' },
    { name: 'Onion Rings', price: '$5.00' },
    { name: 'Fries', price: '$5.00' },
    { name: 'Sweet Potato Fries', price: '$6.00' },
  ];

  return (
    <section id="hot-bites-section" className="w-full bg-olive-green py-24 md:py-32 font-hind overflow-hidden border-t-2 border-dark-brown/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
        
        {/* Right Column: Menu List (Compact 35% Width) */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center">
          <div className="mb-12">
            <span className="text-dark-brown font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block opacity-60">
              Savory & Crispy
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-inknut font-bold text-dark-brown leading-none tracking-tighter"
            >
              Hot Bites<span className="text-sea-blue">.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col w-full gap-1"
          >
            {snackMenu.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex justify-between items-center py-4 border-b border-dark-brown/10 hover:border-dark-brown transition-colors cursor-default"
              >
                <h3 className="font-inknut text-base md:text-lg text-dark-brown group-hover:text-sea-blue transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="font-hind font-bold text-dark-brown group-hover:text-sea-blue transition-colors">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-8 text-dark-brown/40 text-[9px] uppercase tracking-[0.2em] font-bold">
            * Prepared fresh upon order
          </p>
        </div>

        {/* Left Column: Wide 3D Window (Extended 65% Width) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ willChange: 'transform, opacity' }}
          className="w-full lg:w-[65%] relative lg:sticky lg:top-32"
        >
          {/* Neo-Brutalist Shadow */}
          <div className="absolute inset-0 bg-dark-brown translate-x-[-12px] translate-y-3 rounded-[2rem] -z-10 group-hover:translate-x-[-6px] group-hover:translate-y-2 transition-transform duration-500"></div>
          
          {/* Wide Window Container - Aspect Ratio set to 16:10 for extra width */}
          <div className="w-full aspect-[16/10] bg-eggshell border-2 border-dark-brown rounded-[2rem] overflow-hidden group shadow-2xl flex flex-col">
            
            {/* Extended OS Header Bar */}
            <div className="w-full h-12 border-b-2 border-dark-brown bg-dark-brown/5 flex justify-between items-center px-8 z-20 shrink-0">
              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-olive-green border border-dark-brown/20"></div>
                <div className="w-3 h-3 rounded-full bg-dark-brown opacity-10"></div>
                <div className="w-3 h-3 rounded-full bg-dark-brown opacity-10"></div>
              </div>
              <div className="flex items-center gap-4">
              </div>
            </div>

            {/* Expansive 3D Canvas Area */}
            <div className="flex-grow relative z-10 bg-eggshell">
              <HotBites3D />
              
              {/* Decorative Corner Accents */}
              <div className="absolute top-6 left-6 flex flex-col gap-1 pointer-events-none opacity-20">
                 <div className="w-10 h-[1px] bg-dark-brown"></div>
                 <div className="w-[1px] h-10 bg-dark-brown"></div>
              </div>

              {/* Interaction Label */}
              <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <span className="bg-dark-brown text-sea-blue px-6 py-2 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] border border-sea-blue/10 shadow-2xl">
                  Inspect the Bites
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HotBitesSection;