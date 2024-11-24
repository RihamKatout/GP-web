import React from 'react';
import Heart from '../Heart';

const ToppingSide: React.FC = () => {
  return (
    <>
      <Heart position={[0, 0.4, 2.2]} scale={[0.35, 0.4, 0.4]} />
      <Heart position={[0, 0.4, -2.33]} scale={[0.35, 0.4, 0.4]} />
      <Heart position={[-1.7, -0.4, -1.6]} scale={[0.35, 0.4, 0.4]} rotation={[0, Math.PI / 4, 0]} />
      <Heart position={[1.6, -0.4, 1.5]} scale={[0.35, 0.4, 0.4]} rotation={[0, Math.PI / 4, 0]} />
      <Heart position={[2.2, 0.4, 0]} scale={[0.35, 0.4, 0.4]} rotation={[0, Math.PI / 2, 0]} />
      <Heart position={[-2.33, 0.4, 0]} scale={[0.35, 0.4, 0.4]} rotation={[0, Math.PI / 2, 0]} />
      <Heart position={[-1.6, -0.4, 1.5]} scale={[0.35, 0.4, 0.4]} rotation={[0, -Math.PI / 4, 0]} />
      <Heart position={[1.6, -0.4, -1.7]} scale={[0.35, 0.4, 0.4]} rotation={[0, -Math.PI / 4, 0]} />
    </>
  );
};

export default ToppingSide;
