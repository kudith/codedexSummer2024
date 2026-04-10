'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

/** * Dynamically import 3D Model with SSR disabled to prevent WebGL context issues 
 */
const Boba3D = dynamic(() => import('@/components/3dModels/Boba3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-dark-brown/20 font-hind text-xs uppercase tracking-[0.2em] z-0">
      Loading 3D Asset...
    </div>
  )
});

/** * Animation variants for staggered list appearance 
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const BobaSection = () => {
  const bobaMenu = [
    { name: 'The OG', details: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\n*Classic milk tea*' },
    { name: 'Brown Sugar', details: 'Medium: $4.75\nLarge: $5.75\nHot: $5.75\n*Caffeine free*' },
    { name: 'Taro Coconut', details: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\n*Caffeine free, dairy free*' },
    { name: 'Fruit Green Tea', details: 'Medium: $4.25\nLarge: $5.25\n*Flavors: mango, strawberry, peach, lychee*' },
    { name: 'Jasmine Milk', details: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\n*Dairy free available*' },
    { name: 'Wintermelon', details: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\n*Dairy free*' },
  ];

  /** * Formats menu strings into a clean receipt-style layout 
   */
  const parseMenuDetails = (detailsStr) => {
    return detailsStr.split('\n').map((line, idx) => {
      // Italic descriptions wrapped in asterisks
      if (line.startsWith('*') && line.endsWith('*')) {
        return (
          <span key={idx} className="block text-[10px] md:text-xs italic text-olive-green font-bold uppercase tracking-wider mt-2">
            {line.replace(/\*/g, '')}
          </span>
        );
      }
      // Size and Price columns
      if (line.includes(':')) {
        const [label, price] = line.split(':');
        return (
          <div key={idx} className="flex justify-between items-center w-full border-b border-dark-brown/10 py-1">
            <span className="text-[10px] uppercase font-bold tracking-tighter text-dark-blue/40">{label.trim()}</span>
            <span className="font-hind text-sm font-bold text-dark-brown">{price.trim()}</span>
          </div>
        );
      }
      return <span key={idx} className="block text-sm text-dark-brown/70">{line}</span>;
    });
  };

  return (
    <section id="boba-section" className="w-full bg-eggshell py-24 md:py-32 font-hind overflow-hidden border-t-2 border-dark-brown/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start">
        
        {/* Right Column: Menu Text Content */}
        <div className="w-full lg:w-3/5">
          <div className="mb-16">
            <span className="text-light-green font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Specialty Boba
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-inknut font-bold text-dark-brown leading-none tracking-tighter"
            >
              Boba Time<span className="text-light-green">!</span>
            </motion.h2>
          </div>

          {/* Menu Items Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
          >
            {bobaMenu.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col cursor-default"
              >
                {/* Title: Only color changes on hover, no movement */}
                <div className="mb-4 border-b-2 border-dark-brown pb-2">
                  <h3 className="font-inknut text-xl md:text-2xl text-dark-brown group-hover:text-light-green transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>

                {/* Pricing Ledger */}
                <div className="flex flex-col gap-1 pr-4">
                  {parseMenuDetails(item.details)}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Add-ons Information Box */}
          <div className="mt-16 p-6 bg-dark-brown text-sea-blue rounded-sm shadow-[8px_8px_0px_0px_#94B973]">
             <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-light-green">Extras / +$0.50</p>
             <p className="text-sm font-medium opacity-80 leading-relaxed text-eggshell">
               Tapioca Pearls, Lychee Jelly, Mixed Jelly, Grass Jelly, Pop Strawberry, Pop Passionfruit, Mango Stars.
             </p>
          </div>
        </div>

        {/* Left Column: 3D Window (Sticky Frame) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/5 lg:sticky lg:top-32"
        >
          <div className="relative group">
            {/* Neo-brutalist Solid Shadow using olive-green */}
            <div className="absolute inset-0 bg-olive-green translate-x-[-16px] translate-y-4 rounded-3xl -z-10 group-hover:translate-x-[-8px] group-hover:translate-y-2 transition-transform duration-500"></div>
            
            {/* The Window Frame */}
            <div className="aspect-[4/5] bg-sea-blue border-2 border-dark-brown rounded-3xl overflow-hidden shadow-2xl">
              {/* Header Bar */}
              <div className="w-full h-12 bg-dark-brown flex items-center justify-between px-6 border-b-2 border-dark-brown">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-light-green"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-sea-blue opacity-20"></div>
                </div>
              </div>

              {/* 3D Model Area */}
              <div className="w-full h-[calc(100%-3rem)] relative bg-sea-blue cursor-grab active:cursor-grabbing">
                <Boba3D />  

                {/* Interaction Label */}
              <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <span className="bg-eggshell text-dark-blue px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] border-2 border-dark-blue shadow-xl">
                  Inspect Boba
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

export default BobaSection;