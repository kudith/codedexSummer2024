import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function SpecialtyDrinksModel() {
  const { scene } = useGLTF('/assets/iced_coffee/scene.gltf'); // Ganti dengan path ke model 3D Anda
  scene.scale.set(1.5, 1.5, 1.5); // Sesuaikan ukuran model 3D
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

const SpecialtyDrinks = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      id="specialty-drinks-section"
      className="flex flex-col lg:flex-row justify-between px-6 lg:px-32 py-32 gap-20 shadow-xl"
    >
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-4xl font-bold mb-6 text-light-brown"
        >
          Specialty Drinks
        </motion.h2>
        <motion.div
          variants={listVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg cursor-pointer"
        >
          {[
            { name: 'ICED AMERICANO', price: '$3.75' },
            { name: 'MOCHA', price: '$5.75' },
            { name: 'CAPPUCCINO', price: '$4.50' },
            { name: 'ESPRESSO', price: '$3.25' },
            { name: 'IRISH COFFEE', price: '$6.25' },
            { name: 'CHAI LATTE', price: '$5.25' },
            { name: 'GREEN TEA LATTE', price: '$4.75' },
            { name: 'HOT CHOCOLATE', price: '$4.25' },
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
      <div className="relative lg:w-1/2 h-96">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [5, 5, 5] }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[15, 20, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={1.5} />
              <Environment preset="sunset" />
              <OrbitControls enableZoom={false} />
              <Stage environment="city" intensity={0.6}>
                <SpecialtyDrinksModel />
              </Stage>
            </Canvas>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialtyDrinks;
