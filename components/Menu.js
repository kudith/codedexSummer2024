"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CoffeeSection from './CoffeeSection';
import BobaSection from './BobaSection';
import MenuSelector from './MenuSelector'; // Import the MenuSelector component
import SpecialtyDrinks from './SpecialtyDrinksModel';
import HotBitesSection from './HotBites';
import SandwichesSaladsSection from './Sandwich';
import SeasonalMenu from './SeasonalMenu';
import BeerWineSection from './BeerWine';

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('all'); // State to track selected menu

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="min-h-screen bg-sea-blue text-eggshell">
      <div className="text-center py-8 px-4">
        <h1 className="text-3xl lg:text-5xl font-bold text-light-brown mb-4">
          We have the best coffee, check it out!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 lg:space-x-8 px-4 mb-8">
        <MenuSelector onSelect={handleMenuSelect} selected={selectedMenu} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4"
      >
        {selectedMenu === 'all' && (
          <>
            <CoffeeSection />
            <BobaSection />
            <SpecialtyDrinks />
            <HotBitesSection />
            <SandwichesSaladsSection />
            <SeasonalMenu/>
            <BeerWineSection/>
            {/* Include other sections */}
          </>
        )}
        {selectedMenu === 'coffee' && <CoffeeSection />}
        {selectedMenu === 'boba' && <BobaSection />}
        {selectedMenu === 'hot-bites' && <HotBitesSection />}
        {selectedMenu === 'sandwiches-salads' && <SandwichesSaladsSection />}
        {selectedMenu === 'seasonal-menu' && <SeasonalMenu />}
        {selectedMenu === 'beer-wine' && <BeerWineSection />}
      </motion.div>
    </div>
  );
};

export default MenuPage;
