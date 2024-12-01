import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Define the custom GLTF type based on the structure of the model
type GLTFResult = {
  nodes: {
    Strawberry: THREE.Mesh; // Replace 'Strawberry' with the actual name from the GLTF structure
  };
  materials: {
    StrawberryMaterial: THREE.MeshStandardMaterial; // Replace 'StrawberryMaterial' with the actual material name
  };
};

function Strawberry({ position = [0, 0, 0], scale = [1, 1, 1] }: { position?: [number, number, number]; scale?: [number, number, number]; }) {
  // Load the GLTF model and type it as GLTFResult
  const { nodes, materials } = useGLTF('/models/strawberr.glb') as unknown as GLTFResult;

  return (
    <mesh
      geometry={nodes.Strawberry.geometry} // Use the correct node name here
      material={materials.StrawberryMaterial} // Use the correct material name here
      position={position}
      scale={scale}
    />
  );
}

export default Strawberry;
