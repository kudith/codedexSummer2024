'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

/**
 * Dynamically import 3D Asset
 * SSR disabled to optimize performance and prevent WebGL conflicts
 */
const Seasonal3D = dynamic(() => import('@/components/3dModels/Seasonal3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-eggshell/20 font-hind text-xs uppercase tracking-[0.2em] z-0">
      Loading Seasonal Assets...
    </div>
  )
});

/**
 * Animation variants for a clean, professional entrance
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SeasonalMenu = () => {
  // Explicit menu items provided by the user
  const seasonalItems = [
    { 
        name: 'Matcha Lemonade', 
        details: '*Our freshly squeezed lemonade with a balance of an earthy shot of matcha*' 
    },
    { 
        name: 'Yuzu-Ade', 
        details: 'Large: $5.5\n*Popular in South Korea, Yuzu-Ade is a carbonated drink with yuzu marmalade. Yuzu is a citrus with a tart and fragrant flavor of orange and grapefruit.*' 
    },
    { 
        name: 'Matcha Lavender Oat', 
        details: '$6.50\n*Lavender infused into our oatmilk steamed over a matcha shot.*' 
    },
    { 
        name: 'Berry Lavender Lemonade', 
        details: 'Medium: $5.25\nLarge: $6.25' 
    },
    { 
        name: 'Rotating Beer/Wine Program', 
        details: '*Check out our beer and wine at the front of our store! We\'re constantly rotating out product from local breweries!*' 
    },
  ];

  // Split items: 2 for the left column (wrapped under canvas), 3 for the right column
  const leftItems = seasonalItems.slice(0, 2);
  const rightItems = seasonalItems.slice(2);

  /**
   * Formats menu strings into a clean editorial ledger style
   */
  const parseDetails = (detailsStr) => {
    return detailsStr.split('\n').map((line, idx) => {
      // Italicized descriptions wrapped in asterisks
      if (line.startsWith('*') && line.endsWith('*')) {
        return (
          <span key={idx} className="block text-[10px] md:text-xs italic text-light-green/80 mt-2 font-medium tracking-wide">
            {line.replace(/\*/g, '')}
          </span>
        );
      }
      // Specific pricing with labels (e.g., Large: $5.5)
      if (line.includes(':')) {
        const [label, price] = line.split(':');
        return (
          <div key={idx} className="flex justify-between items-center text-sm font-bold text-eggshell border-b border-eggshell/10 pb-1 mt-1">
            <span className="uppercase text-[9px] tracking-[0.2em] opacity-50">{label.trim()}</span>
            <span className="font-hind">{price.trim()}</span>
          </div>
        );
      }
      // Standalone prices (e.g., $6.50)
      if (line.includes('$')) {
        return (
          <div key={idx} className="flex justify-end text-sm font-bold text-eggshell mt-1 border-b border-eggshell/10 pb-1">
            <span className="font-hind">{line.trim()}</span>
          </div>
        );
      }
      return <span key={idx} className="block text-sm text-eggshell font-medium">{line}</span>;
    });
  };

  return (
    <section id="seasonal-menu" className="w-full bg-dark-green py-24 md:py-32 font-hind overflow-hidden border-t-2 border-eggshell/5">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Wide 3D Visual + First 2 Menu Items */}
        <div className="flex flex-col gap-16 order-2 lg:order-1">
          {/* Broad-Angle 3D Workstation Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Neo-Brutalist Shadow Accent */}
            <div className="absolute inset-0 bg-light-green translate-x-[-12px] translate-y-3 rounded-[2.5rem] -z-10"></div>
            
            <div className="w-full aspect-[16/9] bg-dark-brown border-2 border-eggshell rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col group">
              {/* Fake OS Terminal Header */}
              <div className="w-full h-12 border-b-2 border-eggshell/10 bg-black/20 flex justify-between items-center px-8 z-20 shrink-0">
                <div className="flex gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-light-green"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-eggshell opacity-10"></div>
                </div>
              </div>

              {/* Interaction Rendering Zone */}
              <div className="flex-grow relative z-10">
                <Seasonal3D />
                <div className="absolute bottom-8 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-eggshell text-dark-brown px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] border-2 border-dark-brown shadow-xl">
                    Orbit Visual
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Menu Items (Items 1-2 Wrapped Under Canvas) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {leftItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="group border-b border-eggshell/10 pb-6">
                <h3 className="font-inknut text-xl text-light-green group-hover:text-eggshell transition-colors duration-300 mb-3 leading-tight">
                  {item.name}
                </h3>
                <div className="flex flex-col">{parseDetails(item.details)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Title + Remaining 3 Menu Items */}
        <div className="flex flex-col order-1 lg:order-2">
          {/* Bold Editorial Header */}
          <div className="mb-16">
            <span className="text-light-green font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Seasonal Menu
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-inknut font-bold text-eggshell leading-[0.9] tracking-tighter"
            >
              The<br/>Seasonals<span className="text-light-green">.</span>
            </motion.h2>
          </div>

          {/* Right Menu Items (Remaining Items) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            {rightItems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="group border-b border-eggshell/10 pb-8 hover:border-light-green transition-colors duration-300"
              >
                <h3 className="font-inknut text-2xl text-light-green group-hover:text-eggshell transition-colors duration-300 mb-3 leading-tight">
                  {item.name}
                </h3>
                <div className="flex flex-col">{parseDetails(item.details)}</div>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-16 text-eggshell/20 text-[9px] uppercase tracking-[0.3em] font-bold">
            * Limited time availability — check front store for details
          </p>
        </div>

      </div>
    </section>
  );
};

export default SeasonalMenu;