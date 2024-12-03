import React from 'react';

import Hearty from '../../3D-component/Hearty';
import Star from '../../3D-component/Star';

interface ToppingSideProps {
  color?: string;
}

////// Round Topping heart

const ToppingSideRound: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
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

const ToppingSideRoundSmall: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
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

const ToppingSideRoundLarg: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  const positions: [number, number, number][] = [
    [0, 0.6, 2.3],
    [0, 0.6, -2.3],
    [-1.7, -0.6, -1.55],
    [-1.7, 1.6, -1.55],

    [1.75, -0.6, 1.5],
    [1.75, 1.6, 1.5],
    [2.3, 0.6, 0],
    [-2.3, 0.6, 0],
    [-1.75, -0.6, 1.5],
    [-1.75, 1.6, 1.5],

    [1.6, -0.6, -1.7],
    [1.6, 1.6, -1.7],

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
//// End of Round Topping heart



//Square Topping heart
const ToppingSide: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  const positions: [number, number, number][] = [
    //corners
    [0.5, 0, 1.8],
    [-0.5, 0, 1.8],
    [0.5, 0, -1.8],
    [-0.5, 0, -1.8],
    //end corners
    [-1.2, -0.8, -1.1],
    [-1.7, 1.1, -0.6],//
    [-0.8, 1.1, -1.5],//
    [1.2, -0.8, 1.1],
    [0.8, 1.1, 1.5],//
    //corners
    [1.8, 0, 0.5],
    [1.7, 1.1, 0.6],//
    [1.8, 0, -0.5],
    [-1.8, 0, 0.5],
    [-1.8, 0, -0.5],
    //end corners
    [-1.1, -0.8, 1.2],
    [-1.7, 1.1, 0.6],//
    [-0.8, 1.1, 1.5],//
    [1.1, -0.8, -1.2],
    [1.7, 1.1, -0.6],//
    [0.8, 1.1, -1.5],//
  ];

  const rotations: [number, number, number][] = [
    [0, Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI/4 , 0],
    [0, Math.PI/4 , 0],
    [0, -Math.PI/4 , 0],
    [0, -Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
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

const ToppingSideSmall: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  const positions: [number, number, number][] = [
    //corners
    [0.5, 0, 1.8],
    [-0.5, 0, 1.8],
    [0.5, 0, -1.8],
    [-0.5, 0, -1.8],
    //end corners
    [-1.2, -0.8, -1.1],
    [1.2, -0.8, 1.1],
    //corners
    [1.8, 0, 0.5],
    [1.8, 0, -0.5],
    [-1.8, 0, 0.5],
    [-1.8, 0, -0.5],
    //end corners
    [-1.1, -0.8, 1.2],
     [1.1, -0.8, -1.2],
  ];

  const rotations: [number, number, number][] = [
    [0, Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI/4 , 0],
    [0, -Math.PI/4 , 0],
    [0, -Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
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
    //corners
    [0.5, 0.4, 1.8],
    [-0.5, 0.4, 1.8],
    [0.5, 0.4, -1.8],
    [-0.5, 0.4, -1.8],
    //end corners
    [-1.2, -0.4, -1.1],
    [-1.7, 1.5, -0.6],//
    [-0.8, 1.5, -1.5],//
    [1.2, -0.4, 1.1],
    [0.8, 1.5, 1.5],//
    //corners
    [1.8, 0.4, 0.5],
    [1.7, 1.5, 0.6],//
    [1.8, 0.4, -0.5],
    [-1.8, 0.4, 0.5],
    [-1.8, 0.4, -0.5],
    //end corners
    [-1.1, -0.4, 1.2],
    [-1.7, 1.5, 0.6],//
    [-0.8, 1.5, 1.5],//
    [1.1, -0.4, -1.2],
    [1.7, 1.5, -0.6],//
    [0.8, 1.5, -1.5],//
  ];

  const rotations: [number, number, number][] = [
    [0, Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, Math.PI/4 , 0],
    [0, Math.PI/4 , 0],
    [0, -Math.PI/4 , 0],
    [0, -Math.PI / 4, 0],
    [0, Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
    [0, -Math.PI / 4, 0],
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
//// End of Square Topping heart



/////  Stars  Round///////

const ToppingStarSide: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  

  return (
    <>
       <Star position={[0, 0.2, 2.3]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[0, 0.2, -2.3]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[Math.PI/2, 0, 0]}/>
       <Star position={[-2.3, 0.2, 0]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[0, 0, Math.PI/2]}/>
       <Star position={[2.3, 0.2, 0]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[0, 0, Math.PI/2]}/>

       <Star position={[1.75,0.9, 1.5]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.5,-0.1, 2.2]} />
      <Star position={[-1.75, 0.9, 1.5]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.75, 0.9, -1.5]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[-1.7,-0.1, 2.2]} />
      <Star position={[-1.75, 0.9, -1.5]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[-1.7,0, 4]} /> 

      <Star position={[1.75, -0.6, 1.5]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.5,-0.1, 2.2]} />
      <Star position={[-1.75, -0.6, 1.5]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.75, -0.6, -1.5]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[-1.7,-0.1, 2.2]} />
      <Star position={[-1.75,- 0.6, -1.5]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[-1.7,0, 4]} />
    

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

//// End of Stars Round///////

/////  Stars  Square///////

const ToppingStarSideSquare: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  
  return (
    <>
       <Star position={[0.5, 0.2, 1.85]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.4,-0.2, 2.4]}/>
       {/* <Star position={[0, 0.2, -2.3]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.4,-0.1, -2.35]}/> */}
       <Star position={[-1.9, 0.2, 0.45]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.75, -0.1, 2.4]}/>
       <Star position={[1.85, 0.2, -0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.5, 0.1, -2.35]}/>

       <Star position={[1.85,0.9, 0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-1.15, -0.6, 1.2]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.55,0.1, -2.3]} />
      <Star position={[0.5, 0.9, -1.85]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,-0.1, 2.2]} />
      {/* <Star position={[-1.75, 0.9, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} />  */}

      <Star position={[1.45, -0.6, 0.9]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-0.5, 0.9, 1.85]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.13, -0.6, -1.2]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.55,0, 2.3]} />
      {/* <Star position={[-1.75,- 0.6, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} /> */}
    
      <Star position={[-1.45, -0.6, -0.9]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-1.85,0.9, -0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-0.5, 0.2, -1.85]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.4,-0.2, 2.4]}/>

    </>
  );
};

const ToppingStarSideSquareSmall: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  
  return (
    <>
       
       <Star position={[0.5, 0, 1.85]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.4,-0.2, 2.4]}/>
       <Star position={[-1.9, -0.9, 0.45]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.75, -0.1, 2.4]}/>
       <Star position={[1.85, -0.9, -0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.5, 0.1, -2.35]}/>

       <Star position={[1.85,0, 0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-1.15, 0, 1.2]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.55,0.1, -2.3]} />
      <Star position={[0.5, -0.9, -1.85]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,-0.1, 2.2]} />

      <Star position={[1.45, -0.9, 0.9]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-0.5, -0.9, 1.85]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.13, 0, -1.2]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.55,0, 2.3]} />
    
      <Star position={[-1.45, -0.9, -0.9]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-1.85,0, -0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-0.5, 0, -1.85]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.4,-0.2, 2.4]}/>


    </>
  );
};


const ToppingStarSideSquareLarge: React.FC<ToppingSideProps> = ({ color = '#FF69B4' }) => {
  
  return (
    <>
       <Star position={[0.5, 0.2, 1.85]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.4,-0.2, 2.4]}/>
       {/* <Star position={[0, 0.2, -2.3]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.4,-0.1, -2.35]}/> */}
       <Star position={[-1.9, 0.2, 0.45]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.75, -0.1, 2.4]}/>
       <Star position={[1.85, 0.2, -0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.5, 0.1, -2.35]}/>

       <Star position={[1.85,0.9, 0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-1.15, -0.6, 1.2]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.55,0.1, -2.3]} />
      <Star position={[-1.33, 1.6, 1]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.55,0.1, -2.3]} />     

      <Star position={[0.5, 0.9, -1.85]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,-0.1, 2.2]} />
      {/* <Star position={[-1.75, 0.9, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} />  */}

      <Star position={[1.45, -0.6, 0.9]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[1.33, 1.6, 1]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />

      <Star position={[-0.5, 0.9, 1.85]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.45,0.1, -2.2]} />
      <Star position={[1.13, -0.6, -1.2]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.55,0, 2.3]} />
      <Star position={[1.33, 1.6, -1]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.55,0, 2.3]} />

      {/* <Star position={[-1.75,- 0.6, -1.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[-1.7,0, 4]} /> */}
    
      <Star position={[-1.45, -0.6, -0.9]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-1.33, 1.6, -1]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />

      <Star position={[-1.85,0.9, -0.5]} scale={[0.007, 0.007, 0.007]} color={color}rotation={[1.4,-0.2, 2.4]} />
      <Star position={[-0.5, 0.2, -1.85]} scale={[0.007, 0.007, 0.007]} color={color} rotation={[1.4,-0.2, 2.4]}/>

    </>
  );
};
///// End of Stars  Square///////


export { ToppingSide, ToppingSideSmall, ToppingSideLarg , ToppingStarSide , ToppingStarSideSmall , ToppingStarSideLarge , ToppingStarSideSquare , ToppingStarSideSquareSmall , ToppingStarSideSquareLarge , ToppingSideRound , ToppingSideRoundSmall , ToppingSideRoundLarg};
