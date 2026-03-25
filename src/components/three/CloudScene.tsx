"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Clone } from "@react-three/drei";
import * as THREE from "three";

type CloudConfig = {
  position: [number, number, number];
  scale: number;
  speed: number;
  color?: string;
};

const CLOUDS: CloudConfig[] = [
  // 가까운 구름 (y: -1 ~ 0)
  { position: [-2, -1, -5], scale: 1.9, speed: 0.4 },
  { position: [-15, -1, -1], scale: 1.1, speed: 0.65 },
  { position: [7, 0, -3], scale: 1, speed: 0.75 },
  { position: [15, -1, -1], scale: 1, speed: 0.65 },

  // 중간 구름 (y: 2.5 ~ 5)
  { position: [-15, 3, 0], scale: 0.5, speed: 0.45 },
  { position: [-8, 4, -6], scale: 0.8, speed: 0.5 },
  { position: [15, 2.5, 0], scale: 0.5, speed: 0.45 },
  { position: [8, 5, -2], scale: 0.55, speed: 0.75 },
  { position: [1, 6, -3], scale: 0.5, speed: 0.75 },

  // 먼 구름 (y: 7 ~ 12)
  { position: [-4, 7, -2], scale: 0.4, speed: 0.75 },
  { position: [26, 10, -15], scale: 0.7, speed: 0.55 },
  { position: [-26, 12, -15], scale: 0.7, speed: 0.55 },
];

function Cloud({ position, scale, speed, color = "#ffffff" }: CloudConfig) {
  const { scene } = useGLTF("/glb/cloud.glb");
  const ref = useRef<THREE.Group>(null);
  const offset = useRef(Math.random() * Math.PI * 2);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh)
        (
          (child as THREE.Mesh).material as THREE.MeshStandardMaterial
        ).color.set(color);
    });
  }, [scene, color]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * speed + offset.current) * 0.3;
  });

  return <Clone ref={ref} object={scene} position={position} scale={scale} />;
}

useGLTF.preload("/glb/cloud.glb");

export default function CloudScene() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <ambientLight intensity={20} />
      <directionalLight position={[10, 10, 5]} intensity={5.5} />
      {CLOUDS.map((cloud, i) => (
        <Cloud key={i} {...cloud} />
      ))}
    </Canvas>
  );
}
