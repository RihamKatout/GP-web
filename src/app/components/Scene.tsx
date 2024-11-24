import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface CakeLayerProps {
    radius: number;
    height: number;
    color: string;
    positionY: number;
}
interface CreamSwirlProps {
    scale: [number, number, number];
    color: string;
    position: [number, number, number];
}

interface WeaveStripProps {
    width: number;
    height: number;
    color: string;
    position: [number, number, number];
    rotationZ: number;
}


// Component for a single cake layer
function CakeLayer(props: CakeLayerProps) {
    const { radius, height, color, positionY } = props;
  return (
    <mesh position={[0, positionY, 0]}>
      <cylinderGeometry args={[radius, radius, height, 32]} />
      <meshStandardMaterial color={color} roughness={0.8} />
    </mesh>
  );
}

// Component for piped cream rosettes
function CreamSwirl(props: CreamSwirlProps) {
    const { scale, color, position } = props;
  return (
    <mesh position={position} scale={scale}>
      <torusKnotGeometry args={[0.15, 0.05, 100, 16]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
    </mesh>
  );
}

// Component for adding the basket weave pattern
function WeaveStrip(props: WeaveStripProps) {
    const { width, height, color, position, rotationZ } = props;
  return (
    <mesh position={position} rotation={[0, 0, rotationZ]}>
      <boxGeometry args={[width, height, 0.05]} />
      <meshStandardMaterial color={color} roughness={0.7} />
    </mesh>
  );
}

function Cake() {
  return (
    <>
      {/* Cake Layers */}
      <CakeLayer radius={2} height={1} color="#ffd700" positionY={0} />
      <CakeLayer radius={1.8} height={1} color="#ffe4b5" positionY={1.1} />
      <CakeLayer radius={1.6} height={0.8} color="#ff69b4" positionY={2} />

      {/* Cream Swirls (Rosettes) on the top layer */}
      <CreamSwirl position={[1.2, 2.5, 0]} scale={[1, 1, 1]} color="#ffdae0" />
      <CreamSwirl position={[-1.2, 2.5, 0]} scale={[1, 1, 1]} color="#ffdae0" />
      <CreamSwirl position={[0, 2.5, 1.2]} scale={[1, 1, 1]} color="#ffdae0" />
      <CreamSwirl position={[0, 2.5, -1.2]} scale={[1, 1, 1]} color="#ffdae0" />

      {/* Basket Weave Pattern */}
      {[...Array(10)].map((_, i) => (
        <WeaveStrip
          key={i}
          width={1.5}
          height={0.1}
          color="#ffd700"
          position={[0, 1 + i * 0.2, 1.6]}
          rotationZ={0}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <WeaveStrip
          key={i}
          width={0.1}
          height={0.4}
          color="#ffd700"
          position={[0.8, 1 + i * 0.2, 1.6]}
          rotationZ={Math.PI / 2}
        />
      ))}
    </>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Cake />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;