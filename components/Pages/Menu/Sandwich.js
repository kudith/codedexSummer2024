'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

/**
 * Dynamically import 3D Sandwich Model
 * Prevents WebGL context overload and ensures smooth scroll performance
 */
const Sandwich3D = dynamic(() => import('@/components/3dModels/Sandwich3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-eggshell/20 font-hind text-xs uppercase tracking-[0.2em] z-0">
      Preparing Kitchen...
    </div>
  )
});

/**
 * Animation variants for a structured, staggered appearance
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SandwichesSection = () => {
  const sandwichesMenu = [
    { name: 'Beyond Bussin', price: '$15.00', desc: 'Vegan beyond burger, house-made vegan chipotle aioli, lettuce, onion, and avocado.' },
    { name: 'Spicy Chicken', price: '$13.00', desc: 'Spicy mayo, grilled chicken, crispy bacon, and avocado on Italian herb focaccia.' },
    { name: 'Italian Panini', price: '$11.00', desc: 'Prosciutto, pesto, and mozzarella pressed til golden brown and crispy.' },
    { name: 'Tuna Melt', price: '$11.00', desc: 'House-made tuna salad with American cheese on Italian herb focaccia.' },
    { name: 'Zesto Chicken', price: '$13.00', desc: 'Basil pesto, grilled chicken, fresh mozzarella, and lemon zest.' },
    { name: 'Turkey Club', price: '$11.00', desc: 'Roast turkey, lettuce, tomato, crispy bacon, and American cheese on sourdough.' },
    { name: 'Grilled Cheese', price: '$6.50', desc: 'Classic comfort on toasted bread. Add bacon or turkey for +$1.50.' },
    { name: 'Pizza Panini', price: '$11.00', desc: 'Pepperoni, fresh mozzarella, marinara, and olive oil on herb focaccia.' },
  ];

  // Perfectly balanced 4-and-4 split
  const leftItems = sandwichesMenu.slice(0, 4);
  const rightItems = sandwichesMenu.slice(4);

  return (
    <section id="sandwiches-section" className="w-full bg-dark-green py-24 md:py-32 font-hind overflow-hidden border-t-2 border-sea-blue/5">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Header + First 4 Items (40% Width) */}
        <div className="flex flex-col">
          <div className="mb-16">
            <span className="text-light-brown font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Handheld Classics
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-inknut font-bold text-eggshell leading-[0.9] tracking-tighter"
            >
              The<br/>Sammies<span className="text-light-brown">.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col w-full gap-2"
          >
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col py-6 border-b border-sea-blue/10 hover:border-light-brown transition-colors cursor-default"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-inknut text-xl md:text-2xl text-eggshell group-hover:text-light-brown transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-hind font-bold text-light-brown text-lg">{item.price}</span>
                </div>
                <p className="text-sm text-sea-blue/60 leading-relaxed max-w-md group-hover:text-sea-blue/90 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 3D Frame + Remaining 4 Items (60% Width) */}
        <div className="flex flex-col gap-16">
          {/* Hero 3D Interactive Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Neo-Brutalist Shadow using dark-brown */}
            <div className="absolute inset-0 bg-dark-brown translate-x-4 translate-y-4 rounded-[2.5rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            
            {/* OS Styled Frame */}
            <div className="w-full aspect-[16/9] bg-dark-brown border-2 border-eggshell rounded-[2.5rem] overflow-hidden group shadow-2xl flex flex-col">
              <div className="w-full h-14 border-b-2 border-eggshell/10 bg-black/20 flex justify-between items-center px-10 z-20 shrink-0">
                <div className="flex gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-light-brown"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-eggshell opacity-10"></div>
                </div>
              </div>
              <div className="flex-grow relative z-10">
                <Sandwich3D />
                <div className="absolute bottom-10 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-eggshell text-dark-brown px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] border-2 border-dark-brown shadow-xl">
                    Orbit Sandwich Selection
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Symmetrical Grid for Remaining 4 Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
          >
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col py-6 border-b border-sea-blue/10 hover:border-light-brown transition-colors cursor-default"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-inknut text-xl text-eggshell group-hover:text-light-brown transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-hind font-bold text-light-brown text-lg">{item.price}</span>
                </div>
                <p className="text-sm text-sea-blue/60 leading-relaxed group-hover:text-sea-blue/90 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-sea-blue/20 text-[9px] uppercase tracking-[0.4em] font-bold italic">
            * All sammies served with house-made chips & pickles
          </p>
        </div>

      </div>
    </section>
  );
};

export default SandwichesSection;