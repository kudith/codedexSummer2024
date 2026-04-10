'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Coffee3D = dynamic(() => import('@/components/3dModels/Coffee3D'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center text-eggshell/20 font-hind text-xs uppercase tracking-[0.2em] z-0">Initializing 3D...</div>
});

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

const CoffeeSection = () => {
  const menuItems = [
    { name: 'Latte', hot: '$4.75', cold: '$5.25' },
    { name: 'Cortado', hot: '$4.25', cold: '$4.75' },
    { name: 'Cafe Au Lait', hot: '$3.25', cold: '—' },
    { name: 'Mocha', hot: '$5.75', cold: '$6.25' },
    { name: 'Red Eye', hot: '$4.50', cold: '$4.75' },
    { name: 'Americano', hot: '$3.75', cold: '$4.25' },
  ];

  return (
    <section id="coffee-section" className="w-full bg-dark-brown py-24 md:py-32 font-hind overflow-hidden border-t-4 border-dark-brown">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
        
        {/* Left: Menu List */}
        <div className="w-full lg:w-3/5">
          <div className="mb-16 relative">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-light-green font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              Signature Sips
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-inknut font-bold text-eggshell leading-none tracking-tighter"
            >
              Caffeinate<span className="text-light-green">.</span>
            </motion.h2>
          </div>

          {/* Menu Table */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full space-y-1"
          >
            {/* Header Kolom */}
            <div className="grid grid-cols-12 w-full pb-4 border-b border-eggshell/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-light-green/60">
              <div className="col-span-7 md:col-span-8">Beverage Selection</div>
              <div className="col-span-2 md:col-span-2 text-right">Hot</div>
              <div className="col-span-3 md:col-span-2 text-right">Iced</div>
            </div>

            {/* Iterasi Item Menu */}
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group grid grid-cols-12 items-center py-5 border-b border-eggshell/5 hover:bg-eggshell/[0.02] transition-all duration-300 px-1"
              >
                {/* Nama Minuman & Garis Titik-titik */}
                <div className="col-span-7 md:col-span-8 flex items-baseline gap-2 pr-4">
                  <span className="font-inknut text-lg md:text-2xl text-eggshell group-hover:text-light-green transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                  {/* Dotted Leader Line */}
                  <div className="hidden md:block flex-grow border-b border-dotted border-eggshell/20 h-0 translate-y-[-4px]"></div>
                </div>

                {/* Harga Hot */}
                <div className="col-span-2 md:col-span-2 text-right">
                   <span className="font-mono text-sm md:text-lg text-sea-blue group-hover:text-eggshell transition-colors">
                    {item.hot}
                  </span>
                </div>

                {/* Harga Cold */}
                <div className="col-span-3 md:col-span-2 text-right">
                  <span className="font-mono text-sm md:text-lg text-sea-blue group-hover:text-eggshell transition-colors">
                    {item.cold}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-12 text-eggshell/30 text-[10px] uppercase tracking-widest font-bold">
            * All espresso drinks feature our signature house blend
          </p>
        </div>

        {/* Right: 3D Canvas Box (The Window Frame) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/5 sticky top-32"
        >
          <div className="relative group">
            {/* Shadow solid di belakang box */}
            <div className="absolute inset-0 bg-light-green translate-x-4 translate-y-4 rounded-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            
            <div className="aspect-[4/5] bg-dark-brown border-2 border-eggshell rounded-3xl overflow-hidden shadow-2xl">
              {/* Fake UI Header */}
              <div className="w-full h-12 bg-eggshell flex items-center justify-between px-6 border-b-2 border-dark-brown">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-dark-brown"></div>
                  <div className="w-3 h-3 rounded-full bg-dark-brown opacity-30"></div>
                  <div className="w-3 h-3 rounded-full bg-dark-brown opacity-30"></div>
                </div>
              </div>

              {/* Canvas Content */}
              <div className="w-full h-[calc(100%-3rem)] bg-[#1a130c] relative cursor-grab active:cursor-grabbing">
                <Coffee3D />

                {/* Interaction Label */}
              <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <span className="bg-eggshell text-dark-blue px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] border-2 border-dark-blue shadow-xl">
                  Touch me
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

export default CoffeeSection;