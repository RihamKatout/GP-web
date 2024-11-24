import React from 'react';

import * as THREE from 'three';

interface HeartProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}
const Heart: React.FC<HeartProps> = ({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
  color = '#FF69B4',
}) => {
  // Define the heart shape
  const heartShape = new THREE.Shape();

  // Move to the starting point of the heart shape
  heartShape.moveTo(0, 0.5);
  
  // Draw the left side of the heart using quadratic curves
  heartShape.quadraticCurveTo(-0.5, 0.9, -1, 0.5);
  heartShape.quadraticCurveTo(-1.4, 0, -0.7, -0.7);
  
  // Draw the right side of the heart
  heartShape.quadraticCurveTo(0, -1.4, 0.7, -0.7);
  heartShape.quadraticCurveTo(1.4, 0, 1, 0.5);
  heartShape.quadraticCurveTo(0.5, 0.9, 0, 0.5);

  // Create 3D geometry from the heart shape by extruding it
  const extrudeSettings = { depth: 0.3, bevelEnabled: true, bevelSegments: 0, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 };
  const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

  return (
    <mesh geometry={heartGeometry} position={position} scale={scale} rotation={rotation}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Heart;