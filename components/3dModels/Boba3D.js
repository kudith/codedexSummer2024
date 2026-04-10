'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, Environment, OrbitControls } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/assets/boba_tea_cup/scene.gltf');
  
  // HAPUS useFrame di sini! Kita tidak butuh manual rotasi lagi.

  return <primitive object={scene} scale={1.5} position={[0, -0.5, 0]} />;
}

export default function Boba3D() {
  return (
    <Suspense fallback={null}>
      {/* Tambahkan dpr={[1, 2]} untuk performa anti-patah-patah */}
      <Canvas 
        dpr={[1, 2]} 
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 2, 6] }}
        style={{ pointerEvents: 'auto' }} // Pastikan canvas bisa disentuh
      >
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        <Environment preset="city" />
        
        <Stage environment="apartment" intensity={0.5} contactShadow opacity={0.5} blur={2}>
          <Model />
        </Stage>
        
        {/* OrbitControls mengambil alih semua rotasi otomatis. enablePan={false} agar tidak ganggu scroll HP */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1.0} 
          makeDefault
        />
      </Canvas>
    </Suspense>
  );
}