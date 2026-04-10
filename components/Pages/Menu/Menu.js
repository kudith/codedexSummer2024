'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Section Imports ---
import CoffeeSection from './CoffeeSection';
import BobaSection from './BobaSection';
import SpecialtyDrinks from './SpecialtyDrinksModel';
import HotBitesSection from './HotBites';
import SandwichesSaladsSection from './Sandwich';
import SeasonalMenu from './SeasonalMenu';
import BeerWineSection from './BeerWine';

const menuCategories = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'boba', label: 'Boba' },
  { id: 'specialty', label: 'Specialty' },
  { id: 'hot-bites', label: 'Snacks' },
  { id: 'sandwiches-salads', label: 'Sammies' },
  { id: 'seasonal', label: 'Limited' },
  { id: 'beer-wine', label: 'Brew' },
  { id: 'all', label: 'View All' },
];

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('coffee');

  return (
    <div className="min-h-screen bg-sea-blue font-hind overflow-x-hidden">
      
      {/* Editorial Header Section */}
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1500px] mx-auto flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-light-green font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block"
        >
          Catalog // Archive_002
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl xl:text-9xl font-black font-inknut text-dark-brown leading-[0.85] tracking-tighter mb-8"
        >
          The <br/> <span className="text-light-green">Menu.</span>
        </motion.h1>
        
        <p className="text-dark-blue/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
          Fuel your next campaign with our artisanal coffee, refreshing boba, and savory bites designed for long-form strategy.
        </p>
      </div>

      {/* Sticky Navigation (Board Game Token Style) */}
      <div className="sticky top-[70px] md:top-[80px] z-40 bg-sea-blue/80 backdrop-blur-md py-6 border-y border-dark-brown/5">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Metadata Bar */}
          <div className="flex justify-between items-center mb-4 px-2 opacity-30">
             <span className="text-[9px] font-black text-dark-brown uppercase tracking-[0.3em]">Database_Scan // Select_Provisions</span>
             <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-light-green"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-dark-brown"></div>
             </div>
          </div>

          {/* Navigation Grid (Tiles) */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {menuCategories.map((category) => {
              const isActive = selectedMenu === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedMenu(category.id)}
                  className={`relative px-4 py-2 md:px-8 md:py-3 font-inknut text-[9px] md:text-[11px] uppercase tracking-widest font-bold border-2 border-dark-brown transition-all duration-300 ${
                    isActive
                      ? 'bg-light-green text-dark-brown shadow-[6px_6px_0px_0px_#49361F] translate-x-[-2px] translate-y-[-2px]'
                      : 'bg-eggshell text-dark-brown hover:bg-light-brown/20 hover:shadow-[4px_4px_0px_0px_#49361F] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Rendering Zone */}
      <div className="min-h-[60vh] bg-sea-blue flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMenu}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {/* Logic for Category Rendering */}
            {selectedMenu === 'all' && (
              <div className="flex flex-col">
                <CoffeeSection />
                <BobaSection />
                <SpecialtyDrinks />
                <HotBitesSection />
                <SandwichesSaladsSection />
                <SeasonalMenu />
                <BeerWineSection />
              </div>
            )}
            
            {selectedMenu === 'coffee' && <CoffeeSection />}
            {selectedMenu === 'boba' && <BobaSection />}
            {selectedMenu === 'specialty' && <SpecialtyDrinks />}
            {selectedMenu === 'hot-bites' && <HotBitesSection />}
            {selectedMenu === 'sandwiches-salads' && <SandwichesSaladsSection />}
            {selectedMenu === 'seasonal' && <SeasonalMenu />}
            {selectedMenu === 'beer-wine' && <BeerWineSection />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Disclaimer */}
      <div className="bg-sea-blue py-12 px-6 border-t border-dark-brown/5 text-center">
          <span className="text-[10px] font-black text-dark-brown/20 uppercase tracking-[0.5em]">
            Database_End // Archive_002
          </span>
      </div>

    </div>
  );
};

export default MenuPage;