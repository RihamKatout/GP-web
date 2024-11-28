import React from 'react';

import Hearty from '../../../3D-component/Hearty';
import Star from '../../../3D-component/Star';

interface ToppingSideProps {
  color?: string;
}

const ToppingSide: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  const positions: [number, number, number][] = [
    [0, 0.4, 2.3],
    [0, 0.4, -2.3],
    [-1.7, -0.4, -1.6],
    [1.8, -0.4, 1.5],
    [2.3, 0.4, 0],
    [-2.3, 0.4, 0],
    [-1.8, -0.4, 1.5],
    [1.6, -0.4, -1.7],
  ];

  const rotations: [number, number, number][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 2, 0],
    [0, Math.PI / 2, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
  ];

  return (
    <>


      {positions.map((position, index) => (
        <Hearty
          key={index}
          position={position}
          scale={[0.005, 0.005, 0.002]}
          rotation={rotations[index]}
          color={color}
        />
      ))}
    </>
  );
};

const ToppingSideSmall: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  const positions: [number, number, number][] = [
    [0, 0, 2.3],
    [0, 0, -2.3],
    [-1.7, -0.6, -1.55],
    [1.75, -0.6, 1.5],
    [2.3, 0, 0],
    [-2.3, 0, 0],
    [-1.75, -0.6, 1.5],
    [1.6, -0.6, -1.7],
  ];

  const rotations: [number, number, number][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 2, 0],
    [0, Math.PI / 2, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
  ];

  return (
    <>
      {positions.map((position, index) => (
        <Hearty
          key={index}
          position={position}
          scale={[0.005, 0.005, 0.002]}
          rotation={rotations[index]}
          color={color}
        />
      ))}
    </>
  );
};

const ToppingSideLarg: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  const positions: [number, number, number][] = [
    [0, 0.4, 2.3],
    [0, 0.4, -2.3],
    [-1.7, -0.4, -1.55],
    [-1.7, 1.5, -1.55],
    [1.75, -0.4, 1.5],
    [1.75, 1.5, 1.5],
    [2.3, 0.4, 0],
    [-2.3, 0.4, 0],
    [-1.75, -0.4, 1.5],
    [-1.75, 1.5, 1.5],
    [1.6, -0.4, -1.7],
    [1.6, 1.5, -1.7],
  ];

  const rotations: [number, number, number][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 2, 0],
    [0, Math.PI / 2, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
  ];

  return (
    <>
      {positions.map((position, index) => (
        <Hearty
          key={index}
          position={position}
          scale={[0.005, 0.005, 0.002]}
          rotation={rotations[index]}
          color={color}
        />
      ))}
    </>
  );
};




/////  Stars ///////

const ToppingStarSide: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  

  return (
    <>
       <Star position={[0, 0.2, 2.3]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[0, 0.2, -2.3]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[-2.3, 0.2, 0]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[0, 0, Math.PI/2]}/>
       <Star position={[2.3, 0.2, 0]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[0, 0, Math.PI/2]}/>

       <Star position={[1.75,0.9, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.5,-0.1, 2.2]} />
      <Star position={[-1.75, 0.9, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.75, 0.9, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,-0.1, 2.2]} />
      <Star position={[-1.75, 0.9, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} /> 

      <Star position={[1.75, -0.6, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.5,-0.1, 2.2]} />
      <Star position={[-1.75, -0.6, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.75, -0.6, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,-0.1, 2.2]} />
      <Star position={[-1.75,- 0.6, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} />
    
    
    </>
  );
};

const ToppingStarSideSmall: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  

  return (
    <>
       <Star position={[0, -0.1, 2.3]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[0, -0.1, -2.3]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[-2.3, -0.1, 0]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[0, 0, Math.PI/2]}/>
       <Star position={[2.3, -0.1, 0]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[0, 0, Math.PI/2]}/>

       
      <Star position={[1.75, -0.7, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.5,-0.1, 2.2]} />
      <Star position={[-1.75, -0.7, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.75, -0.7, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,-0.1, 2.2]} />
      <Star position={[-1.75,- 0.7, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} />
    
    
    </>
  );
};

const ToppingStarSideLarge: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  

  return (
    <>
       <Star position={[0, 0.2, 2.3]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[0, 0.2, -2.3]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[-2.3, 0.2, 0]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[0, 0, Math.PI/2]}/>
       <Star position={[2.3, 0.2, 0]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[0, 0, Math.PI/2]}/>

       <Star position={[0, 1.7, 2.3]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[0, 1.7, -2.3]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[-2.3, 1.7, 0]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[0, 0, Math.PI/2]}/>
       <Star position={[2.3, 1.7, 0]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[0, 0, Math.PI/2]}/>


       <Star position={[1.75,0.9, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.5,-0.1, 2.2]} />
      <Star position={[-1.75, 0.9, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.75, 0.9, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,-0.1, 2.2]} />
      <Star position={[-1.75, 0.9, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} /> 

      <Star position={[1.75, -0.6, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.5,-0.1, 2.2]} />
      <Star position={[-1.75, -0.6, 1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.75, -0.6, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,-0.1, 2.2]} />
      <Star position={[-1.75,- 0.6, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} />
    
    
    </>
  );
};

export { ToppingSide, ToppingSideSmall, ToppingSideLarg , ToppingStarSide , ToppingStarSideSmall , ToppingStarSideLarge};
