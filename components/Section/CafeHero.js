"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BoardImage from '../../public/assets/board.png';
import LogoImage from '../../public/assets/logo.png';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Boba3DModel = () => {
    const { scene } = useGLTF('/assets/boba_tea_cup/scene.gltf');
    return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
};

const CafeHero = () => {
    return (
        <div className="mx-auto max-w-[1440px] min-h-screen flex flex-col justify-center items-center px-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-10"
            >
                <div className="flex flex-col max-w-6xl space-y-4 gap-6 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Are you ready to sip & play?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                        className="text-lg md:text-xl"
                    >
                        Explore your newest friendgroup hotspot to bring on the
                        heat when playing clue-do and chill it out with some
                        relaxing boba and coffee.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-lg md:text-xl font-bold px-4 py-2 md:px-6 md:py-2 border-2 border-black rounded-lg transition duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-black self-center md:self-start"
                    >
                        Explore Now
                    </motion.button>
                </div>
                {/* Needs to fix again later */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
                    className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[700px] lg:h-[700px]"
                >
                    <Image src={BoardImage} alt="Board" className="absolute top-0 left-0 w-full h-full object-contain" />
                    <Image src={LogoImage} alt="Logo" className="absolute bottom-20 right-10 w-full h-full object-contain" />
                    <Canvas className="absolute bottom-28 right-50 -rotate-45 w-full h-full">
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} intensity={1} />
                        <Boba3DModel />
                    </Canvas>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CafeHero;
