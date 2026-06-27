"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function StarField() {
  const points = useRef<THREE.Points>(null);
  const particles = useMemo(() => {
    const count = 2400;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    return positions;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.02;
    points.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.03} sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

function Nebula() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.03;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -1.6]}>
      <planeGeometry args={[12, 8]} />
      <meshBasicMaterial transparent opacity={0.3} color="#a864ff" blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

export default function SpaceCanvas() {
  return (
    <div className="absolute inset-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.2} />
        <pointLight position={[2, 1, 3]} intensity={20} color="#78d7ff" />
        <pointLight position={[-2, -1, 2]} intensity={12} color="#ff78d1" />
        <StarField />
        <Nebula />
      </Canvas>
    </div>
  );
}
