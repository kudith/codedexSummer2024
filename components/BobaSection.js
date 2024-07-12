import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function BobaModel() {
  const { scene } = useGLTF('/assets/boba_tea_cup/scene.gltf');
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.001;

  });

  scene.scale.set(0.9, 0.9, 0.9);

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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  hover: {
    scale: 1.05,
    transition: {
      yoyo: Infinity,
    },
  },
};

const BobaSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      id="boba-section"
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
                <BobaModel />
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
          Boba
        </motion.h2>
        <motion.div
          variants={listVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg cursor-pointer"
        >
          {[
            { name: 'THE OG', price: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\n*Classic milk tea*' },
            { name: 'BROWN SUGAR BOBA', price: 'Medium: $4.75\nLarge: $5.75\nHot: $5.75\n*Caffeine free*' },
            { name: 'TARO BOBA COCONUT BOBA', price: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\n*Caffeine free, dairy free*' },
            { name: 'FRUIT GREEN/BLACK TEA', price: 'Medium: $4.25\nLarge: $5.25\n*Comes in a variety of flavors: mango/strawberry/passionfruit/peach/green apple/lychee/kiwi*\n*Feel free to mix and match!*' },
            { name: 'FRUIT BLACK TEA', price: 'Medium: $4.25\nLarge: $5.25\n*Comes in a variety of flavors: peach/strawberry*\n*Feel free to mix and match!*' },
            { name: 'JASMINE MILK TEA', price: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\n*Dairy free*' },
            { name: 'WINTERMELON MILK TEA', price: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\n*Dairy free*' },
            { name: 'TOPPINGS +$0.50', price: '*Tapioca pearls, lychee jelly, mixed jelly, grass jelly, pop strawberry, pop passionfruit, mango stars*' },
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

export default BobaSection;
