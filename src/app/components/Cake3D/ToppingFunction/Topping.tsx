import React from 'react';
import { MeshProps } from '@react-three/fiber';
import * as THREE from 'three';
import Heart from '../Heart'


interface ToppingPieceProps extends MeshProps {
    position: [number, number, number];
    rotation?: [number, number, number];
    color?: string;
}

function ToppingPiece({ position, rotation = [Math.PI / 2, 0, 0], color = "#fb87c3" }: ToppingPieceProps) {
  return (
      <mesh position={position} rotation={new THREE.Euler(...rotation)}>
          <torusKnotGeometry args={[0.18, 0.18, 111, 20, 1, 11]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
      </mesh>
  );
}

function SmallTopping({ position, rotation = [Math.PI / 2, 0, 0], color = "#fb87c3" }: ToppingPieceProps) {
    return (
        <mesh position={position} rotation={new THREE.Euler(...rotation)}>
            <torusKnotGeometry args={[0.23, 0.15, 140, 10, 2, 3]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
        </mesh>
    );
}

function Bottom({ position, rotation = [Math.PI / 2, 0, 0], color = "#ea89bb" }: ToppingPieceProps) {
    return (
        <mesh position={position} rotation={new THREE.Euler(...rotation)}>
            <torusKnotGeometry args={[0.34, 0.34, 140, 10, 1, 5]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
        </mesh>
    );
}

function ToppingCorners() {
  const cornerPositions: [number, number, number][] = [
      [1.7, 1.5, 0],
      [-1.7, 1.5, 0],
      [0, 1.5, 1.7],
      [0, 1.5, -1.7],
  ];

  return (
      <>
          {cornerPositions.map((position, index) => (
              <ToppingPiece key={index} position={position} />
          ))}
      </>
  );
}
function ToppingSmallCorners() {
    const cornerPositions: [number, number, number][] = [
        [1.7, 1.5, 0],
        [-1.7, 1.5, 0],
        [0, 1.5, 1.7],
        [0, 1.5, -1.7],
    ];
  
    return (
        <>
            {cornerPositions.map((position, index) => (
                <SmallTopping key={index} position={position} />
            ))}
        </>
    );
  }

function ToppingEdges() {
  const edgePositions: [number, number, number][] = [
      [1.2, 1.5, 1.2],
      [-1.2, 1.5, 1.2],
      [1.2, 1.5, -1.2],
      [-1.2, 1.5, -1.2],
  ];
  return (
      <>
          {edgePositions.map((position, index) => (
              <ToppingPiece key={index} position={position} />
          ))}
      </>
  );
}
function ToppingSmallEdges() {
    const edgePositions: [number, number, number][] = [
        [1.2, 1.5, 1.2],
        [-1.2, 1.5, 1.2],
        [1.2, 1.5, -1.2],
        [-1.2, 1.5, -1.2],
    ];
  
    return (
        <>
            {edgePositions.map((position, index) => (
                <SmallTopping key={index} position={position} />
            ))}
        </>
    );
  }

function FullTopping() {
  const fullToppingPositions: [number, number, number][] = [
      [-0.65, 1.5, -1.6],
      [0.65, 1.5, -1.6],
      [-0.65, 1.5, 1.6],
      [0.65, 1.5, 1.6],
      [-1.6, 1.5, -0.7],
      [1.6, 1.5, -0.7],
      [-1.6, 1.5, 0.7],
      [1.6, 1.5, 0.7],
      
  ];

  return (
      <>
          <ToppingCorners />
          <ToppingEdges />
          {fullToppingPositions.map((position, index) => (
              <ToppingPiece key={index} position={position} />
          ))}
          
      </>
  );
}
function FullSmallTopping() {
    const fullToppingPositions: [number, number, number][] = [
        [-0.65, 1.5, -1.6],
        [0.65, 1.5, -1.6],
        [-0.65, 1.5, 1.6],
        [0.65, 1.5, 1.6],
        [-1.6, 1.5, -0.7],
        [1.6, 1.5, -0.7],
        [-1.6, 1.5, 0.7],
        [1.6, 1.5, 0.7],
        
    ];
  
    return (
        <>
            <ToppingSmallCorners />
            <ToppingSmallEdges />
            {fullToppingPositions.map((position, index) => (
                <SmallTopping key={index} position={position} />
            ))}
            
        </>
    );
  }

function FullMixTopping() {
    const fullToppingPositions: [number, number, number][] = [
        [-0.65, 1.5, -1.6],
        [0.65, 1.5, -1.6],
        [-0.65, 1.5, 1.6],
        [0.65, 1.5, 1.6],
        [-1.6, 1.5, -0.7],
        [1.6, 1.5, -0.7],
        [-1.6, 1.5, 0.7],
        [1.6, 1.5, 0.7],
        
    ];
  
    return (
        <>
            <ToppingSmallCorners />
            <ToppingSmallEdges />
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} />
            ))}
            
        </>
    );
  }

  function FullBottom() {
    const fullBottomPositions: [number, number, number][] = [
        [-0.65, -1.3, -1.6],
        [0.65, -1.3, -1.6],
        [-0.65, -1.3, 1.6],
        [0.65, -1.3, 1.6],
        [-1.6, -1.3, -0.7],
        [1.6, -1.3, -0.7],
        [-1.6, -1.3, 0.7],
        [1.6, -1.3, 0.7],
        [1.2, -1.3, 1.2],
        [-1.2, -1.3, 1.2],
        [1.2, -1.3, -1.2],
        [-1.2, -1.3, -1.2],
        [1.7, -1.3, 0],
        [-1.7, -1.3, 0],
        [0, -1.3, 1.7],
        [0, -1.3, -1.7],
        
    ];
  
    return (
        <>
            
            {fullBottomPositions.map((position, index) => (
                <Bottom key={index} position={position} />
            ))}
            
        </>
    );
  }

  ////////////////// Heart Topping ////////////////////



 function HeartTop() {
  

  return (
    <>
    <Heart position={[0, 1.4, 1.5]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]}/>
      
    <Heart position={[0, 1.4, -1.5]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]}/>
      
    <Heart position={[-0.7, 1.4, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]}/>
      
    <Heart position={[0.7, 1.4, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]}/>
      
    <Heart position={[-1.2, 1.4, -1]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]}/>
      
    <Heart position={[-1.4, 1.4, 0.7]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]}/>
      
    <Heart position={[1.2, 1.4, -1]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]}/>
      
    <Heart position={[1.4, 1.4, 0.7]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]}/>
      
    </>
  );
}


export {  HeartTop, FullSmallTopping, FullTopping, FullMixTopping ,FullBottom};

