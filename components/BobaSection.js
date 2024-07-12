import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

function BobaModel() {
  const { scene } = useGLTF('/assets/boba_tea_cup/scene.gltf');
  scene.scale.set(1.5, 1.5, 1.5);
  return <primitive object={scene} />;
}

const BobaSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id='boba-section'
      className="flex flex-col lg:flex-row justify-around px-4 lg:px-32 py-32 gap-20 text-light-green shadow-2xl"
    >
      <div className="relative lg:w-1/2 h-96 flex justify-center items-center mb-10 lg:mb-0">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-full rounded-lg flex justify-center items-center shadow-xl">
            <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [5, 5, 5] }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[15, 20, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={1.5} />
              <Environment preset="sunset" />
              <Stage environment="city" intensity={0.6}>
                <BobaModel />
              </Stage>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-bold mb-6 text-light-green"
        >
          Boba Menu
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white text-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="font-semibold">CLASSIC BOBA</p>
            <p>$5.25</p>
            <p className="mt-4 font-semibold">MATCHA BOBA</p>
            <p>$5.75</p>
            <p className="mt-4 font-semibold">TARO BOBA</p>
            <p>$5.50</p>
            <p className="mt-4 font-semibold">STRAWBERRY BOBA</p>
            <p>$5.75</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="font-semibold">THAI TEA BOBA</p>
            <p>$5.75</p>
            <p className="mt-4 font-semibold">COCONUT BOBA</p>
            <p>$5.50</p>
            <p className="mt-4 font-semibold">HONEYDEW BOBA</p>
            <p>$5.50</p>
            <p className="mt-4 font-semibold">MANGO BOBA</p>
            <p>$5.75</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BobaSection;
