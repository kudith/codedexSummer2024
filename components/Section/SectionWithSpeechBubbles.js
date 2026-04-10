'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * FAQConversation - Clean Editorial Dialog
 * Uses the established Neo-Brutalist card system with simplified labeling.
 */
const FAQConversation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const bubbleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 120, damping: 20 } 
    },
  };

  return (
    <section id="faq" className="w-full bg-sea-blue py-24 md:py-40 font-hind overflow-hidden border-t-2 border-dark-brown/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-light-green font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block"
          >
            Communication — 002
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-inknut text-dark-brown leading-[0.85] tracking-tighter"
          >
            Got Any <br/> <span className="text-light-green">Questions?</span>
          </motion.h2>
        </div>

        {/* Dialog Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12 md:gap-20"
        >
          {/* User Query 01 */}
          <motion.div variants={bubbleVariants} className="flex justify-start w-full group">
            <div className="relative max-w-full md:max-w-[80%] bg-eggshell border-2 border-dark-brown p-8 md:p-12 rounded-[2rem] rounded-bl-none shadow-[12px_12px_0px_0px_#49361F] transition-transform hover:-translate-y-1 duration-300">
              <span className="absolute -top-4 left-10 px-4 py-1.5 bg-dark-brown text-sea-blue text-[10px] font-black uppercase tracking-[0.3em] rounded-sm">
                YOU
              </span>
              <p className="font-inknut text-2xl md:text-4xl text-dark-brown leading-tight tracking-tight">
                &quot;Okay cool, so when are y&apos;all open?&quot;
              </p>
            </div>
          </motion.div>

          {/* Sip & Play Response 01 */}
          <motion.div variants={bubbleVariants} className="flex justify-end w-full group">
            <div className="relative w-full md:w-[85%] bg-dark-blue border-2 border-dark-brown p-8 md:p-12 rounded-[2rem] rounded-br-none shadow-[-12px_12px_0px_0px_#72A409] transition-transform hover:-translate-y-1 duration-300">
              <span className="absolute -top-4 right-10 px-4 py-1.5 bg-light-green text-dark-blue text-[10px] font-black uppercase tracking-[0.3em] rounded-sm">
                SIP & PLAY
              </span>
              
              <h3 className="font-inknut text-light-green text-2xl md:text-3xl border-b border-sea-blue/10 pb-6 mb-8 tracking-tighter">
                Operating Hours
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                {[
                  { day: 'Sunday', hours: '10am – 11pm' },
                  { day: 'Mon – Thu', hours: '11am – 11pm' },
                  { day: 'Friday', hours: '11am – 12am' },
                  { day: 'Saturday', hours: '10am – 12am' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-sea-blue/5 pb-2">
                    <span className="text-[10px] font-bold text-sea-blue/40 uppercase tracking-widest">{item.day}</span>
                    <span className="font-hind text-lg font-bold text-sea-blue">{item.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-dark-brown/30 p-6 rounded-xl border border-light-green/20">
                <p className="text-light-green text-sm md:text-base font-medium flex items-center gap-3 italic">
                  <span className="text-2xl not-italic">♨</span> 
                  Kitchen closes ~2.5–3 hours before house close.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Query 02 */}
          <motion.div variants={bubbleVariants} className="flex justify-start w-full group">
            <div className="relative max-w-full md:max-w-[80%] bg-eggshell border-2 border-dark-brown p-8 md:p-12 rounded-[2rem] rounded-bl-none shadow-[12px_12px_0px_0px_#49361F] transition-transform hover:-translate-y-1 duration-300">
              <span className="absolute -top-4 left-10 px-4 py-1.5 bg-dark-brown text-sea-blue text-[10px] font-black uppercase tracking-[0.3em] rounded-sm">
                YOU
              </span>
              <p className="font-inknut text-2xl md:text-4xl text-dark-brown leading-tight tracking-tight">
                &quot;And what games do y&apos;all have?&quot;
              </p>
            </div>
          </motion.div>

          {/* Sip & Play Response 02 */}
          <motion.div variants={bubbleVariants} className="flex justify-end w-full group">
            <div className="relative w-full md:w-[75%] bg-dark-blue border-2 border-dark-brown p-8 md:p-12 rounded-[2rem] rounded-br-none shadow-[-12px_12px_0px_0px_#72A409] transition-transform hover:-translate-y-1 duration-300">
              <span className="absolute -top-4 right-10 px-4 py-1.5 bg-light-green text-dark-blue text-[10px] font-black uppercase tracking-[0.3em] rounded-sm">
                SIP & PLAY
              </span>
              <p className="text-sea-blue text-xl md:text-2xl font-medium leading-relaxed mb-6">
                We have every kind of game you can think of—fantasy, adventure, strategy, and party classics.
              </p>
              <div className="flex items-center gap-4 text-light-green font-bold text-xs uppercase tracking-widest">
                <div className="w-8 h-[2px] bg-light-green"></div>
                <span>500+ Titles in Archive</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FAQConversation;