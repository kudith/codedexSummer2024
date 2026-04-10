'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

/**
 * Dynamically import 3D Bottle Model
 * SSR disabled to ensure smooth performance and prevent WebGL conflicts
 */
const BeerWine3D = dynamic(() => import('@/components/3dModels/BeerWine3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-eggshell/20 font-hind text-xs uppercase tracking-[0.2em] z-0">
      Uncorking Selection...
    </div>
  )
});

const BeerWineSection = () => {
  return (
    <section id="beer-wine-section" className="w-full bg-dark-blue py-24 md:py-32 font-hind overflow-hidden border-t-2 border-eggshell/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Editorial Content (45% Width) */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-light-brown font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Curated Spirits
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-inknut font-bold text-eggshell leading-none tracking-tighter"
            >
              The Cellar<span className="text-light-brown">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Main Descriptive Paragraph */}
            <p className="text-xl md:text-2xl font-hind font-medium text-eggshell/90 leading-relaxed border-l-2 border-light-brown pl-6 py-2">
               Rotating menu of beers from local breweries!
            </p>

            {/* Legal / Info Disclaimer */}
            <div className="mt-4">
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-light-brown/60 max-w-sm leading-loose">
                * Must be 21+ to order. Check the front chalkboard for our current seasonal selections and local craft rotations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Visual Frame (55% Width) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-[55%] relative"
        >
          {/* Neo-Brutalist Shadow using light-brown palette */}
          <div className="absolute inset-0 bg-light-brown translate-x-4 translate-y-4 rounded-[2rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          
          {/* Visual Container with balanced 4:3 Aspect Ratio to prevent it being too wide */}
          <div className="w-full aspect-[4/3] bg-dark-brown border-2 border-eggshell rounded-[2rem] overflow-hidden group shadow-2xl flex flex-col">
            
            {/* Fake OS Header */}
            <div className="w-full h-12 border-b-2 border-eggshell/10 bg-black/20 flex justify-between items-center px-8 z-20 shrink-0">
              <div className="flex gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-light-brown"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-eggshell opacity-10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-eggshell opacity-10"></div>
              </div>
            </div>

            {/* Rendering Zone */}
            <div className="flex-grow relative z-10">
              <BeerWine3D />
              
              {/* Corner Design Accents */}
              <div className="absolute top-6 right-8 flex flex-col items-end gap-1 opacity-20 pointer-events-none">
                 <div className="w-12 h-[1px] bg-eggshell"></div>
                 <div className="w-[1px] h-12 bg-eggshell"></div>
              </div>

              {/* Interaction Label */}
              <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <span className="bg-eggshell text-dark-blue px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] border-2 border-dark-blue shadow-xl">
                  Inspect Bottle Selection
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BeerWineSection;