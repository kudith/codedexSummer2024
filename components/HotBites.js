import React from 'react';
import { motion } from 'framer-motion';

const HotBitesSection = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: {
      scale: 1.05,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      id="hot-bites-section"
      className="flex flex-col lg:flex-row justify-between px-6 lg:px-32 py-32 gap-20 shadow-xl"
    >
      <div className="lg:w-1/2 h-96 relative">
        <img
          src="/assets/fries.jpg" // Ganti dengan path gambar JPEG Anda
          alt="Hot Bites"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-4xl font-bold mb-6 text-light-brown"
        >
          Hot Bites
        </motion.h2>
        <motion.div
          variants={listVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg cursor-pointer"
        >
          {[
            { name: 'Chicken Poppers', price: '$6.00' },
            { name: 'Mozz Sticks', price: '$7.00' },
            { name: 'Pigs in a Blanket', price: '$7.00' },
            { name: 'Tater Tots', price: '$5.00' },
            { name: 'Chicken Tenders', price: '$8.00' },
            { name: 'Onion Rings', price: '$5.00' },
            { name: 'Fries', price: '$5.00' },
            { name: 'Sweet Potato Fries', price: '$6.00' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="border-b-2 border-light-brown pb-4"
            >
              <p className="font-bold text-xl">{item.name}</p>
              <p className="text-base">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HotBitesSection;
