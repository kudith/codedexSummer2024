import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function BeerWineModel() {
  const { scene } = useGLTF('/assets/beer/scene.gltf');

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

const BeerWineSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      id="beer-wine-section"
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
                <BeerWineModel />
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
          Beer/Wine
        </motion.h2>
        <motion.div
          variants={listVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg cursor-pointer"
        >
          {[
            { name: 'Babe Rose' },
            { name: 'Archer Roose White/Red' },
            { name: 'Kona Lager' },
            { name: 'Blue Point' },
            { name: 'Juneshine' },
            { name: 'Lunar Hard Seltzers' },
            { name: 'Allagash White' },
            { name: 'Doc Cider' },
            { name: 'Stella Artois' },
            { name: 'Shocktop' },
            { name: 'Finback' },
            { name: 'Three\'s Brewery' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="border-b-2 border-light-brown pb-4"
            >
              <p className="font-bold text-xl">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BeerWineSection;
