import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function Model() {
  const { scene } = useGLTF('/assets/cafe_latte_with_art/scene.gltf');
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  scene.scale.set(1.5, 1.5, 1.5);

  return (
    <>
      <primitive object={scene} ref={modelRef} />
      <OrbitControls enableZoom={false} />
    </>
  );
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
    },
  },
};

const CoffeeSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      id="coffee-section"
      className="flex flex-col lg:flex-row justify-around px-4 lg:px-32 py-32 gap-20 text-light-brown shadow-2xl"
    >
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-4xl font-bold mb-6 text-light-brown"
        >
          Coffee
        </motion.h2>
        <motion.div
          variants={listVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-eggshell text-lg"
        >
          {[
            { name: 'LATTE', price: '$4.75 (Hot) / $5.25 (Cold)' },
            { name: 'CORTADO', price: '$4.25 (Hot) / $4.75 (Cold)' },
            { name: 'CAFE AU LAIT', price: '$3.25 (Hot)' },
            { name: 'MOCHA', price: '$5.75 (Hot) / $6.25 (Cold)' },
            { name: 'RED EYE', price: '$4.50 (Hot) / $4.75 (Cold)' },
            { name: 'AMERICANO', price: '$3.75 (Hot) / $4.25 (Cold)' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="border-b-2 border-light-brown pb-4"
            >
              <p className="font-bold">{item.name}</p>
              <p>{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
              <Stage environment="city" intensity={0.6}>
                <Model />
              </Stage>
            </Canvas>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CoffeeSection;
