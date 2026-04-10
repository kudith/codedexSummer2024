'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * BoardGameShowcase - Editorial Vault Style
 * Displays a curated list of featured games with high-contrast Neo-Brutalist elements.
 */
const BoardGameShowcase = () => {
  const collectionLink = "https://docs.google.com/spreadsheets/d/1wN59dJCqqQz-AfNyXqyto9o0ZBRM2wc0ZVhITl5is04/edit?pli=1&gid=0#gid=0";

  const boardGames = [
    {
      id: 1,
      name: 'Settlers of Catan',
      description: 'A strategy masterpiece where players collect resources and build settlements to dominate the island of Catan.',
      image: '/assets/logo.png', 
      players: '3-4 Players',
      time: '60-120 Min',
      tag: 'Strategy'
    },
    {
      id: 2,
      name: 'Ticket to Ride',
      description: 'A fast-paced cross-country train adventure where players collect train cards to claim railway routes connecting iconic cities.',
      image: '/assets/logo.png', 
      players: '2-5 Players',
      time: '30-60 Min',
      tag: 'Family'
    },
    {
      id: 3,
      name: 'Codenames',
      description: 'The ultimate social word game. Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their codenames.',
      image: '/assets/logo.png', 
      players: '2-8+ Players',
      time: '15 Min',
      tag: 'Party'
    },
    {
      id: 4,
      name: 'Pandemic',
      description: 'A cooperative experience where you and your team are specialists fighting four virulent diseases that have broken out all over the world.',
      image: '/assets/logo.png', 
      players: '2-4 Players',
      time: '45 Min',
      tag: 'Co-op'
    },
  ];

  return (
    <section id="game-vault" className="w-full bg-sea-blue py-24 md:py-32 font-hind overflow-hidden border-t-2 border-dark-brown/5">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Editorial Header Section */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-light-green font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block"
          >
            Archive — Vault 01
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-inknut text-dark-brown mb-8 leading-[0.9] tracking-tighter"
          >
            The Game <br/> <span className="text-light-green">Vault.</span>
          </motion.h2>
          <p className="text-dark-blue/70 text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-12">
            Explore our curated collection of over 500+ tabletop experiences. Grab a box, find a table, and let the session begin.
          </p>

          <motion.a
            href={collectionLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-dark-brown text-sea-blue font-inknut text-[10px] tracking-[0.3em] uppercase rounded-sm border-2 border-dark-brown shadow-[8px_8px_0px_0px_#DAB281] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-300"
          >
            View Full Collection
          </motion.a>
        </div>

        {/* Alternating Showcase List */}
        <div className="flex flex-col gap-24 md:gap-40">
          {boardGames.map((game, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                key={game.id}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Section: Hero Frame with Solid Shadow */}
                <div className="w-full lg:w-1/2 group">
                  <div className="relative w-full aspect-[4/3] bg-eggshell border-2 border-dark-brown shadow-[16px_16px_0px_0px_#49361F] group-hover:shadow-[8px_8px_0px_0px_#49361F] group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500">
                    <Image
                      src={game.image}
                      alt={game.name}
                      fill
                      className="object-cover rounded-xl mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                    {/* Corner Metadata Tag */}
                    <div className="absolute top-4 left-4 bg-dark-brown text-sea-blue px-3 py-1 text-[9px] font-black uppercase tracking-widest z-10">
                      Ref_{game.id.toString().padStart(3, '0')}
                    </div>
                  </div>
                </div>

                {/* Content Section: Editorial Typography */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-olive-green text-sea-blue text-[10px] font-black uppercase tracking-widest rounded-sm">
                      {game.tag}
                    </span>
                    <div className="h-[1px] flex-grow bg-dark-brown/10"></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-inknut text-dark-brown mb-8 leading-none tracking-tighter">
                    {game.name}
                  </h3>
                  
                  <p className="text-dark-blue/80 text-xl leading-relaxed mb-10 max-w-xl">
                    {game.description}
                  </p>

                  {/* Technical Specs Ledger */}
                  <div className="grid grid-cols-2 gap-4 border-t-2 border-dark-brown/5 pt-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-dark-brown/40 tracking-widest">Player Capacity</span>
                      <span className="font-inknut text-lg text-dark-brown">{game.players}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-dark-brown/40 tracking-widest">Average Duration</span>
                      <span className="font-inknut text-lg text-dark-brown">{game.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Navigation Link */}
        <div className="mt-32 pt-16 border-t border-dark-brown/10 text-center flex flex-col items-center">
          <p className="font-inknut text-dark-brown text-2xl mb-8 tracking-tighter">
            Seeking a specific title?
          </p>
          <motion.a
            href={collectionLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="text-light-green font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-3 group"
          >
            <span>Browse the full database</span>
            <span className="group-hover:translate-x-2 transition-transform">➝</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default BoardGameShowcase;