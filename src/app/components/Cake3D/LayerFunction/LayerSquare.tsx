import React from 'react'
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
interface LayerSquareProps {
    numLayers: number;
    layerColor?: string;
    fillLayerColor?: string;
  }

const LayerSquare :React.FC<LayerSquareProps> = ({ 
  numLayers ,
  layerColor = '#e8ad82',
  fillLayerColor = '#D2691E',}) => 
    {
    const layers = [];
      const cakeTexture = useLoader(THREE.TextureLoader, '/textuers/textures.jpg');
    for (let i = 0; i < numLayers; i++) {
      const yOffset = i * 1; // Adjust the offset based on the height of each layer
  
      layers.push(
        <React.Fragment key={i}>
          
          <mesh position={[0, yOffset - 1, 0]}>
            <cylinderGeometry args={[2.3, 2.3, 0.72, 4, 10]} />
            <meshStandardMaterial color={layerColor} map={cakeTexture} />
          </mesh>
          {i < numLayers - 1 && (
            <mesh position={[0, yOffset - 0.5, 0]}>
              <cylinderGeometry args={[2.2, 2.2, 0.23, 4, 10]} />
              <meshStandardMaterial color={fillLayerColor} roughness={0.5} metalness={0.6} />
            </mesh>
          )}
        </React.Fragment>
      );
    }
  
    return (
      <>
        {layers}
        <mesh position={[0, -1.8, 0]}>
          <cylinderGeometry args={[2.8, 2.5, 0.2, 35]} />
          <meshStandardMaterial color="#eadcc9" />
        </mesh>
      </>
    );
}

const FullLayerSquare :React.FC<LayerSquareProps> = ({  
  numLayers ,
  layerColor = '#e8ad82',
  fillLayerColor = '#D2691E',}) => {
  const layers = [];
  const cakeTexture = useLoader(THREE.TextureLoader, '/textuers/textures.jpg');
  for (let i = 0; i < numLayers; i++) {
    const yOffset = i * 1; // Adjust the offset based on the height of each layer

    layers.push(
      <React.Fragment key={i}>
        
        <mesh position={[0, yOffset - 1, 0]}>
          <cylinderGeometry args={[2.32, 2.32, 1, 4, 10]} />
          <meshStandardMaterial color={layerColor} map={cakeTexture} />
        </mesh>
        {i < numLayers - 1 && (
          <mesh position={[0, yOffset - 0.5, 0]}>
            <cylinderGeometry args={[2.2, 2.2, 0.23, 4, 10]} />
            <meshStandardMaterial color={fillLayerColor} roughness={0.5} metalness={0.6} />
          </mesh>
        )}
      </React.Fragment>
    );
  }

  return (
    <>
      {layers}
      <mesh position={[0, -1.8, 0]}>
        <cylinderGeometry args={[2.8, 2.5, 0.2, 35]} />
        <meshStandardMaterial color="#eadcc9" />
      </mesh>
    </>
  );
}


export  {LayerSquare, FullLayerSquare}; 
