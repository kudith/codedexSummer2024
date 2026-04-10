'use client';

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    day: 'Monday',
    shadow: 'shadow-dark-brown', 
    accent: 'border-dark-brown',
    items: [
      { 
        title: 'Park Slope Chess Club', 
        time: '6:00 PM', 
        desc: 'Free open play for all skill levels. Connect with the local chess community.',
        link: 'https://www.instagram.com/parkslopechess/',
        linkLabel: 'Follow Instagram'
      },
      { 
        title: 'MTG Draft', 
        time: '6:30 PM', 
        desc: 'Vote on the set via our Discord. Competitive fun for Magic players.',
        link: 'https://discord.com/invite/bdURvWC',
        linkLabel: 'Join Discord'
      },
      { 
        title: 'Bi-weekly Writing Meetup', 
        time: 'Rotating', 
        desc: 'Find your flow and share your work with fellow writers.'
      }
    ]
  },
  {
    day: 'Tuesday',
    shadow: 'shadow-olive-green', 
    accent: 'border-olive-green',
    items: [
      { 
        title: 'Riftbound', 
        time: '7:00 PM', 
        desc: 'Pack per match win! Even 0-3 players walk away with a pack.' 
      },
      { 
        title: 'Bi-weekly Boardgame Meetup', 
        time: 'Rotating', 
        desc: 'Alternates weeks with the writing meetup. Find new gaming friends.' 
      }
    ]
  },
  {
    day: 'Wednesday',
    shadow: 'shadow-dark-blue', 
    accent: 'border-dark-blue',
    items: [
      { 
        title: 'Commander Night!', 
        time: '6:00 PM', 
        desc: 'Magic’s most popular format. $12 for entry includes all-night play and weekly raffles.' 
      }
    ]
  },
  {
    day: 'Thursday',
    shadow: 'shadow-light-brown', 
    accent: 'border-light-brown',
    items: [
      { 
        title: 'Flesh and Blood', 
        time: '7:00 PM', 
        desc: 'Format depends on the week. Drafts are typical after new set releases.' 
      }
    ]
  },
  {
    day: 'Friday',
    shadow: 'shadow-light-green', 
    accent: 'border-light-green',
    items: [
      { 
        title: 'Family Fridays!', 
        time: 'After 4:00 PM', 
        desc: 'After 4pm, kids play for half off with their parents! Bring the whole crew.' 
      }
    ]
  },
  {
    day: 'Saturday',
    shadow: 'shadow-dark-green', 
    accent: 'border-dark-green',
    items: [
      { 
        title: 'MTG Draft', 
        time: '10:15 AM', 
        desc: 'Draft the latest set. Match wins net you packs; participation nets you one too!' 
      },
      { 
        title: 'Lorcana', 
        time: '11:00 AM', 
        desc: "Disney's newest card game and the fastest growing community yet at Sip!" 
      }
    ]
  }
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-sea-blue font-hind py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      
      {/* Background Watermark */}
      <div className="absolute top-40 -left-20 text-[20rem] font-inknut text-dark-brown/[0.02] select-none pointer-events-none rotate-90 leading-none">
        COMMUNITY
      </div>

      {/* Top Event Ticker */}
      <div className="absolute top-0 left-0 w-full bg-dark-brown py-3 overflow-hidden z-20 border-b-2 border-light-green">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex gap-10 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-light-green font-inknut text-xs uppercase tracking-[0.3em] font-bold">
              • Weekly Events • Join the Discord • New MTG Set Out Now • Chess Every Monday • Lorcana Saturdays •
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto mb-32 pt-10 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1 bg-light-green/10 border border-light-green text-light-green font-bold text-[10px] uppercase tracking-[0.4em] mb-8 rounded-full"
        >
          Live Schedule
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-6xl md:text-9xl font-black font-inknut text-dark-brown leading-[0.85] tracking-tighter mb-10"
        >
          Community <br/> <span className="text-light-green">Hub.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-dark-blue text-lg md:text-2xl max-w-2xl font-medium leading-relaxed opacity-80"
        >
          We&apos;re a board game cafe that just wants to facilitate more happiness and bring people together. Explore our weekly rotations below.
        </motion.p>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 relative z-10">
        {events.map((dayData, index) => (
          <motion.div
            key={dayData.day}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`bg-eggshell border-2 border-dark-brown p-8 rounded-[2rem] ${dayData.shadow} shadow-[12px_12px_0px_0px] flex flex-col hover:translate-y-[-8px] hover:translate-x-[-8px] hover:shadow-[20px_20px_0px_0px] transition-all duration-300`}
          >
            {/* Card Header with Technical Tag */}
            <div className="border-b-2 border-dark-brown pb-6 mb-8 flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-dark-brown/30 uppercase tracking-[0.3em] mb-1">Schedule_File</span>
                <h2 className="font-inknut text-4xl text-dark-brown leading-none">{dayData.day}</h2>
              </div>
              <div className={`w-3 h-3 rounded-full ${dayData.accent.replace('border', 'bg')} animate-pulse mt-2`}></div>
            </div>

            {/* Event Items */}
            <div className="flex flex-col gap-10">
              {dayData.items.map((item, itemIndex) => (
                <div key={itemIndex} className="group flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-inknut text-xl text-dark-brown group-hover:text-light-green transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-black bg-dark-brown text-sea-blue px-2 py-1 uppercase tracking-widest">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-sm text-dark-blue font-medium leading-relaxed mb-4 opacity-70">
                    {item.desc}
                  </p>
                  
                  {item.link && (
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-black uppercase tracking-widest text-light-green flex items-center gap-2"
                    >
                      <span className="border-b-2 border-light-green">{item.linkLabel}</span>
                      <span>➝</span>
                    </motion.a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modern Discord CTA Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-5xl mx-auto mt-40 p-12 bg-dark-brown border-2 border-light-green shadow-[24px_24px_0px_0px_#72A409] rounded-[3rem] text-center flex flex-col items-center relative overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-light-green/10 rounded-full blur-3xl"></div>
        
        <span className="text-light-green font-bold tracking-[0.5em] uppercase text-[10px] mb-6 relative z-10">
          Digital Community
        </span>
        <h3 className="font-inknut text-4xl md:text-6xl text-sea-blue mb-6 tracking-tighter relative z-10">
          Join the <br className="md:hidden"/> Inner Circle.
        </h3>
        <p className="text-sea-blue/60 text-lg md:text-xl mb-12 max-w-xl font-medium relative z-10">
          Stay up to date with all our events, community votes, and secret promos on the Sip & Play Discord.
        </p>
        
        <motion.a
          href="https://discord.com/invite/bdURvWC"
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-light-green text-dark-brown px-12 py-5 font-inknut text-xs tracking-[0.2em] uppercase font-bold border-2 border-dark-brown shadow-[8px_8px_0px_0px_#263640] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all relative z-10"
        >
          Open Discord Server
        </motion.a>
      </motion.div>

    </div>
  );
};

export default EventsPage;