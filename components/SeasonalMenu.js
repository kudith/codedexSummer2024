import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function SeasonalModel() {
  const { scene } = useGLTF('/assets/bublble_tea/scene.gltf');

  scene.scale.set(1.5, 1.5, 1.5);

  return <primitive object={scene} />;
}

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

const SeasonalMenu = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      id="seasonal-menu"
      className="flex flex-col lg:flex-row justify-between px-6 lg:px-32 py-32 gap-20 shadow-xl"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative lg:w-1/2 h-96 shadow-xl rounded-2xl"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [5, 5, 5] }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[15, 20, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={1.5} />
              <Environment preset="sunset" />
              <OrbitControls enableZoom={false} />
              <Stage environment="city" intensity={0.6}>
                <SeasonalModel />
              </Stage>
            </Canvas>
          </div>
        </div>
      </motion.div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-4xl font-bold mb-6 text-light-brown"
        >
          Seasonal Menu
        </motion.h2>
        <motion.div
          variants={listVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg cursor-pointer"
        >
          {[
            { name: 'Pina Colada', price: '$4.75 (M) $5.75 (L)\n*Our coconut boba with pineapple flavor!*' },
            { name: 'Matcha Lemonade', price: 'Medium: $5.00\nLarge: $6.00\n*Our freshly squeezed lemonade with a balance of an earthy shot of matcha*' },
            { name: 'Yuzu-Ade', price: 'Large: $5.25\n*Popular in South Korea, Yuzu-Ade is a carbonated drink with yuzu marmalade. Yuzu is a citrus with a tart and fragrant flavor of orange and grapefruit.*' },
            { name: 'Freshly Squeezed Lemonade', price: 'Medium: $4.00\nLarge: $5.00\n*Real lemons with our signature recipe = amazing lemonade*' },
            { name: 'Matcha Lavender Oat', price: '$6.50\n*Lavender infused into our oatmilk steamed over a matcha shot.*' },
            { name: 'Berry Lavender Lemonade', price: 'Medium: $5.25\nLarge: $6.25\n*Made with real bourbon and definitely the drink we\'re most excited for this fall.*' },
            { name: 'Citrus Boba (Grapefruit or Orange)', price: 'Large: $6.00\n*Made with real fruit juice and fruit slices!*' },
            { name: 'Rotating Beer/Wine Program', price: '*Check out our beer and wine at the front of our store! We\'re constantly rotating out product from local breweries!*' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="border-b-2 border-light-brown pb-4"
            >
              <p className="font-bold text-xl">{item.name}</p>
              <p className="whitespace-pre-line text-base" dangerouslySetInnerHTML={{ __html: item.price.replace(/\*(.*?)\*/g, '<em class="text-sm">$1</em>') }}></p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SeasonalMenu;
