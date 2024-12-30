import {  useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import { useGLTF } from '@react-three/drei';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const MiniCharacter = ({ position = [0, 0, 0], scale = 0.5, rotation = [0, 0, 0] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [isRotating, setIsRotating] = useState(false); // Track rotation state
  const [rotationProgress, setRotationProgress] = useState(0); // Track rotation progress
  const clockRef = useRef(0); // Persistent clock for the jumping effect

  const handleClick = () => {
    if (!isRotating) {
      setIsRotating(true); // Start rotating
      setRotationProgress(0); // Reset progress
    }
  };

  useFrame(() => {
    if (groupRef.current) {
      // Handle rotation
      if (isRotating) {
        const rotationSpeed = 0.1; // Speed of rotation
        groupRef.current.rotation.y += rotationSpeed;
        setRotationProgress((prev) => prev + rotationSpeed);

        // Stop rotation after 360° (2 * Math.PI radians)
        if (rotationProgress + rotationSpeed >= 2 * Math.PI) {
          groupRef.current.rotation.y = Math.PI / 2; // Reset rotation
          setIsRotating(false); // Stop rotating
          setRotationProgress(0); // Reset progress
        }
      }

      // Handle jumping (bobbing) animation
      clockRef.current += 0.05; // Increment clock
      groupRef.current.position.y = position[1] + Math.sin(clockRef.current) * 0.2; // Bobbing effect
    }
  });

  const { scene } = useGLTF('./cute_chick.glb'); // Ensure this path is correct

  return (
    <primitive
      ref={groupRef}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
      onClick={handleClick}
    />
  );
};

const SpeechBubble = ({ texts, position, interval = 2000, rotation }: { texts: string[], position: [number, number, number], interval?: number, rotation: [number, number, number] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [texts, interval]);

  return (
    <Text
      position={position}
      rotation={rotation}
      fontSize={0.25} // Larger font size for better visibility
      color={'#e14d97'} // Bright, fun color
      
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.05} // Add an outline to make the text stand out
      outlineColor={'#00000091'} // Black outline
    >
      {texts[currentTextIndex]}
    </Text>
  );
};
 export { MiniCharacter, SpeechBubble };