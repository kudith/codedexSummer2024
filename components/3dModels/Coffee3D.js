'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, Environment, OrbitControls } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/assets/cafe_latte_with_art/scene.gltf');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive object={scene} ref={modelRef} scale={1.2} position={[0, -0.5, 0]} />;
}

export default function Coffee3D() {
  return (
    <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-dark-brown">Loading 3D...</div>}>
      <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 2, 6] }}>
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <Environment preset="city" />
        <Stage environment="apartment" intensity={0.5} contactShadow opacity={0.5} blur={2}>
          <Model />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </Suspense>
  );
}