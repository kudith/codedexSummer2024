import React from 'react';
import { motion } from 'framer-motion';

const SandwichesSection = () => {
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
      id="sandwiches-section"
      className="flex flex-col lg:flex-row-reverse justify-between px-6 lg:px-32 py-32 gap-20 shadow-xl"
    >
      <div className="lg:w-1/2 flex flex-col justify-center lg:order-2">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-4xl font-bold mb-6 text-light-brown"
        >
          Sandwiches
        </motion.h2>
        <motion.div
          variants={listVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg cursor-pointer"
        >
          {[
            { name: 'BEYOND BUSSIN SANDWICH', price: '$15.00', description: 'Our new VEGAN sandwich highlighting the beyond burger and our house-made vegan chipotle aioli alongside lettuce, onion and avocado. Comes with a side of our house made chipotle aioli and chips' },
            { name: 'SPICY CHICKEN SANDWICH', price: '$13.00', description: 'Spicy mayo, grilled chicken, crispy bacon and avocado on Italian herb focaccia. Comes with chips' },
            { name: 'ITALIAN PANINI', price: '$11.00', description: 'Prosciutto, pesto, and mozzarella in between herb focaccia and pressed til golden brown and crispy (pesto contains pine nuts). Comes with chips' },
            { name: 'TUNA MELT', price: '$11.00', description: 'House-made tuna salad with American cheese on Italian herb focaccia pressed to perfection (can be spicy on request). Comes with chips' },
            { name: 'ZESTO CHICKEN SANDWICH', price: '$13.00', description: 'Basil pesto, grilled chicken, fresh mozzarella and lemon zest on Italian herb focaccia (pesto contains pine nuts). Comes with chips' },
            { name: 'TURKEY CLUB', price: '$11.00', description: 'Roast turkey, lettuce, tomato, crispy bacon and American cheese on sourdough. Comes with chips' },
            { name: 'GRILLED CHEESE', price: '$6.50', description: 'Comes with chips. +bacon/tomato/turkey: $1.50' },
            { name: 'PIZZA PANINI', price: '$11.00', description: 'Pepperoni, fresh mozzarella, marinara and olive oil on Italian herb focaccia and pressed to perfection! Comes with chips' },
            { name: 'SMOKED SALMON TARTINE', price: '$11.00', description: 'Lemon zest infused cream cheese on toasted heritage wheat. Piled high with smoked salmon and topped with pickled red onion. Comes with a side salad' },
            { name: 'AVOCADO TOAST', price: '$10.00', description: 'Avocado mashed with salt, pepper, lemon juice and olive oil on toasted heritage wheat. Comes with a side salad. +egg: $1' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="border-b-2 border-light-brown pb-4"
            >
              <p className="font-bold text-xl">{item.name}</p>
              <p className="text-base">{item.price}</p>
              <p className="text-sm italic">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="lg:w-1/2 h-96 relative lg:order-1">
        <img
          src="/assets/sandwich.jpg"
          alt="Sandwiches"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>
    </motion.div>
  );
};

export default SandwichesSection;
