import React from 'react';
import { motion } from 'framer-motion';

const MenuSelector = ({ onSelect, selected }) => {
  const menuItems = [
    { id: 'all', label: 'All menu items' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'boba', label: 'Boba' },
    { id: 'hot-bites', label: 'Hot Bites' },
    { id: 'sandwiches-salads', label: 'Sandwiches and Salads' },
    { id: 'seasonal-menu', label: 'Seasonal Menu' }
  ];

  return (
    <>
      {menuItems.map((item) => (
        <motion.a
          key={item.id}
          href="#"
          className={`hover:underline cursor-pointer ${selected === item.id ? 'font-bold text-light-brown underline' : ''}`}
          onClick={() => onSelect(item.id)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.label}
        </motion.a>
      ))}
    </>
  );
};

export default MenuSelector;
