'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

/**
 * Dynamically import 3D Model to optimize performance 
 * and prevent WebGL context issues on long pages.
 */
const Specialty3D = dynamic(() => import('@/components/3dModels/Specialty3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-eggshell/20 font-hind text-xs uppercase tracking-[0.2em] z-0">
      Loading Drink Engine...
    </div>
  )
});

/**
 * Clean animation variants for staggered entry
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const SpecialtyDrinks = () => {
  const specialtyMenu = [
    { name: 'Iced Americano', price: '$3.75' },
    { name: 'Mocha', price: '$5.75' },
    { name: 'Cappuccino', price: '$4.50' },
    { name: 'Espresso', price: '$3.25' },
    { name: 'Irish Coffee', price: '$6.25' },
    { name: 'Chai Latte', price: '$5.25' },
    { name: 'Green Tea Latte', price: '$4.75' },
    { name: 'Hot Chocolate', price: '$4.25' },
  ];

  return (
    <section id="specialty-drinks-section" className="w-full bg-dark-blue py-24 md:py-32 font-hind overflow-hidden border-t-2 border-eggshell/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Editorial Menu Content */}
        <div className="w-full lg:w-3/5">
          <div className="mb-16">
            <span className="text-light-brown font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              House Specialties
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-inknut font-bold text-eggshell leading-none tracking-tighter"
            >
              The Faves<span className="text-light-brown">.</span>
            </motion.h2>
          </div>

          {/* Menu Ledger List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col w-full"
          >
            {specialtyMenu.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex justify-between items-center py-5 border-b border-eggshell/10 hover:bg-eggshell/[0.02] transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-4">
                  {/* Subtle Accent Mark */}
                  <div className="w-1 h-1 bg-light-brown rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <h3 className="font-inknut text-xl md:text-2xl text-eggshell group-hover:text-light-brown transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>

                <div className="text-light-brown font-hind font-bold text-lg md:text-xl">
                  {item.price}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note Footer */}
          <p className="mt-12 text-eggshell/20 text-[10px] uppercase tracking-[0.2em] font-bold">
            * Seasonal rotations available upon request
          </p>
        </div>

        {/* Right Column: 3D Visual Frame (Neo-Brutalist) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/5 lg:sticky lg:top-32"
        >
          <div className="relative group">
            {/* Solid Shadow Accent using light-brown */}
            <div className="absolute inset-0 bg-light-brown translate-x-4 translate-y-4 rounded-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            
            <div className="aspect-[4/5] bg-dark-brown border-2 border-eggshell rounded-3xl overflow-hidden shadow-2xl">
              {/* Retro App Header */}
              <div className="w-full h-12 bg-eggshell flex items-center justify-between px-6 border-b-2 border-dark-brown">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-dark-blue"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-dark-blue opacity-20"></div>
                </div>
              </div>

              {/* Interactive 3D Canvas */}
              <div className="w-full h-[calc(100%-3rem)] relative bg-[#1c2830]">
                <Specialty3D />

                {/* Interaction Label */}
              <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <span className="bg-eggshell text-dark-blue px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] border-2 border-dark-blue shadow-xl">
                  Inspect to orbit
                </span>
              </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SpecialtyDrinks;