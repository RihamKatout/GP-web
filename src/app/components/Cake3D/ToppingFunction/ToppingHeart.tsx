
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
//For Bottom Cream//
function Bottom({ position, rotation = [Math.PI / 2, 0, 0], color = "#ea89bb" }: ToppingPieceProps) {
    return (
        <mesh position={position} rotation={new THREE.Euler(...rotation)}>
            <torusKnotGeometry args={[0.34, 0.34, 140, 10, 1, 5]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
        </mesh>
    );
}

function ToppingCorners({ color }: { color: string }) {
  const cornerPositions: [number, number, number][] = [
      [2.4, 1.9, 0.5],
      [-2.4, 1.9, 0.5],
      [0, 1.9, 0.9],
      [0, 1.9, -2.2],
  ];

  return (
      <>
          {cornerPositions.map((position, index) => (
              <ToppingPiece key={index} position={position} color={color}/>
          ))}
      </>
  );
}

function ToppingCornersSmall({ color }: { color: string }) {
    const cornerPositions: [number, number, number][] = [
        [2.4, 0.6, 0.5],
      [-2.4, 0.6, 0.5],
      [0, 0.6, 0.9],
      [0, 0.6, -2.2],
    ];
  
    return (
        <>
            {cornerPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color}/>
            ))}
        </>
    );
  }


function ToppingCornersLarg({ color }: { color: string }) {
    const cornerPositions: [number, number, number][] = [
        [2.4, 3.1, 0.5],
        [-2.4, 3.1, 0.5],
        [0, 3.1, 0.9],
        [0, 3.1, -2.2],
    ];
  
    return (
        <>
            {cornerPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color}/>
            ))}
        </>
    );
  }


function ToppingSmallCorners({ color }: { color: string }) {
    const cornerPositions: [number, number, number][] = [
        [2.4, 1.9, 0.5],
      [-2.4, 1.9, 0.5],
      [0, 1.9, 0.9],
      [0, 1.9, -2.2],
    ];
  
    return (
        <>
            {cornerPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
        </>
    );
  }

  function ToppingSmallCornersSmall({ color }: { color: string }) {
    const cornerPositions: [number, number, number][] = [
        [2.4, 0.7, 0.5],
      [-2.4, 0.7, 0.5],
      [0, 0.7, 0.9],
      [0, 0.7, -2.2],
    ];
  
    return (
        <>
            {cornerPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
        </>
    );
  }


  
function ToppingSmallCornersLarg({ color }: { color: string }) {
    const cornerPositions: [number, number, number][] = [
        [2.4, 3.1, 0.5],
      [-2.4, 3.1, 0.5],
      [0, 3.1, 0.9],
      [0, 3.1, -2.2],
    ];
  
    return (
        <>
            {cornerPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
        </>
    );
  }

function ToppingEdges({ color }: { color: string }) {
  const edgePositions: [number, number, number][] = [
      [1.24, 1.9, 1.32],
      [-1.24, 1.9, 1.32],
      [1.4, 1.9, -1.42],
      [-1.4, 1.9, -1.42],
  ];
  return (
      <>
          {edgePositions.map((position, index) => (
              <ToppingPiece key={index} position={position} color={color}/>
          ))}
      </>
  );
}

function ToppingEdgesSmall({ color }: { color: string }) {
    const edgePositions: [number, number, number][] = [
        [1.24, 0.6, 1.32],
      [-1.24, 0.6, 1.32],
      [1.4, 0.6, -1.42],
      [-1.4, 0.6, -1.42],
    ];
    return (
        <>
            {edgePositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color}/>
            ))}
        </>
    );
  }


function ToppingEdgesLarg({ color }: { color: string }) {
    const edgePositions: [number, number, number][] = [
        [1.24, 3.1, 1.32],
        [-1.24, 3.1, 1.32],
        [1.4, 3.1, -1.42],
        [-1.4, 3.1, -1.42],
    ];
    return (
        <>
            {edgePositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color}/>
            ))}
        </>
    );
  }


function ToppingSmallEdges({ color }: { color: string }) {
    const edgePositions: [number, number, number][] = [
        [1.24, 1.9, 1.32],
      [-1.24, 1.9, 1.32],
      [1.4, 1.9, -1.42],
      [-1.4, 1.9, -1.42],
    ];
  
    return (
        <>
            {edgePositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
        </>
    );
  }


  function ToppingSmallEdgesSmall({ color }: { color: string }) {
    const edgePositions: [number, number, number][] = [
        [1.24, 0.7, 1.32],
      [-1.24, 0.7, 1.32],
      [1.4, 0.7, -1.42],
      [-1.4, 0.7, -1.42],
    ];
  
    return (
        <>
            {edgePositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
        </>
    );
  }


  function ToppingSmallEdgesLarg({ color }: { color: string }) {
    const edgePositions: [number, number, number][] = [
        [1.24, 3.1, 1.32],
        [-1.24, 3.1, 1.32],
        [1.4, 3.1, -1.42],
        [-1.4, 3.1, -1.42],
    ];
  
    return (
        <>
            {edgePositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
        </>
    );
  }

function FullToppingHeart({ color }: { color: string }) {
  const fullToppingPositions: [number, number, number][] = [
      [-0.88, 1.9, -1.88],
      [0.88, 1.9, -1.88],
      [-0.5, 1.9, 1.2],
      [0.5, 1.9, 1.2],
      [-1.88, 1.9, -0.88],
      [1.88, 1.9, -0.88],
      [-1.9, 1.9, 1.1],
      [1.9, 1.9, 1.1],
      [2.3, 1.9, -0.2],
      [-2.3, 1.9, -0.2],
      
  ];

  return (
      <>
          <ToppingCorners color={color}/>
          <ToppingEdges color={color}/>
          {fullToppingPositions.map((position, index) => (
              <ToppingPiece key={index} position={position} color={color} />
          ))}
          
      </>
  );
}


function FullToppingSmallHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 0.6, -1.88],
        [0.88, 0.6, -1.88],
        [-0.5, 0.6, 1.2],
        [0.5, 0.6, 1.2],
        [-1.88, 0.6, -0.88],
        [1.88, 0.6, -0.88],
        [-1.9, 0.6, 1.1],
        [1.9, 0.6, 1.1],
        [2.3, 0.6, -0.2],
        [-2.3, 0.6, -0.2],
        
        
    ];
  
    return (
        <>
            <ToppingCornersSmall color={color}/>
            <ToppingEdgesSmall color={color}/>
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }

function FullToppingLargHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 3.1, -1.88],
        [0.88, 3.1, -1.88],
        [-0.5, 3.1, 1.2],
        [0.5, 3.1, 1.2],
        [-1.88, 3.1, -0.88],
        [1.88, 3.1, -0.88],
        [-1.9, 3.1, 1.1],
        [1.9, 3.1, 1.1],
        [2.3, 3.1, -0.2],
        [-2.3, 3.1, -0.2],
        
    ];
  
    return (
        <>
            <ToppingCornersLarg color={color}/>
            <ToppingEdgesLarg color={color}/>
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }

function FullSmallToppingHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 1.9, -1.88],
      [0.88, 1.9, -1.88],
      [-0.5, 1.9, 1.2],
      [0.5, 1.9, 1.2],
      [-1.88, 1.9, -0.88],
      [1.88, 1.9, -0.88],
      [-1.9, 1.9, 1.1],
      [1.9, 1.9, 1.1],
      [2.3, 1.9, -0.2],
      [-2.3, 1.9, -0.2],
        
    ];
  
    return (
        <>
            <ToppingSmallCorners color={color}/>
            <ToppingSmallEdges color={color} />
            {fullToppingPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }


  function FullSmallToppingSmallHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.87, 0.7, -1.8],
      [0.88, 0.7, -1.88],
      [-0.5, 0.7, 1.2],
      [0.5, 0.7, 1.2],
      [-1.88, 0.7, -0.88],
      [1.88, 0.7, -0.88],
      [-1.9, 0.7, 1.1],
      [1.9, 0.7, 1.1],
      [2.3, 0.7, -0.2],
      [-2.3, 0.7, -0.2],
        
    ];
  
    return (
        <>
            <ToppingSmallCornersSmall color={color}/>
            <ToppingSmallEdgesSmall color={color} />
            {fullToppingPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }


  function FullSmallToppingLargHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.87, 3.1, -1.8],
      [0.88, 3.1, -1.88],
      [-0.5, 3.1, 1.2],
      [0.5, 3.1, 1.2],
      [-1.88, 3.1, -0.88],
      [1.88, 3.1, -0.88],
      [-1.9, 3.1, 1.1],
      [1.9, 3.1, 1.1],
      [2.3, 3.1, -0.2],
      [-2.3, 3.1, -0.2],
    ];
  
    return (
        <>
            <ToppingSmallCornersLarg color={color}/>
            <ToppingSmallEdgesLarg color={color} />
            {fullToppingPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }



function FullMixToppingHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
         [-0.8, 1.9, -1.9],
        [0.88, 1.9, -1.88],
        [-0.5, 1.9, 1.2],
        [0.5, 1.9, 1.2],
        [-1.88, 1.9, -0.88],
        [1.88, 1.9, -0.88],
        [-1.9, 1.9, 1.1],
        [1.9, 1.9, 1.1],
        [2.3, 1.9, -0.2],
        [-2.3, 1.9, -0.2],
        
    ];
  
    return (
        <>
            <ToppingSmallCorners color={color}/>
            <ToppingSmallEdges color = {color}/>
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );

  }


  function FullMixToppingSmallHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 0.7, -1.88],
        [0.88, 0.7, -1.88],
        [-0.5, 0.7, 1.2],
        [0.5, 0.7, 1.2],
        [-1.88, 0.7, -0.88],
        [1.88, 0.7, -0.88],
        [-1.9, 0.7, 1.1],
        [1.9, 0.7, 1.1],
        [2.3, 0.7, -0.2],
        [-2.3, 0.7, -0.2],
        
    ];
  
    return (
        <>
            <ToppingSmallCornersSmall color={color}/>
            <ToppingSmallEdgesSmall color = {color}/>
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }


  function FullMixToppingLargHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 3.1, -1.88],
        [0.88, 3.1, -1.88],
        [-0.5, 3.1, 1.2],
        [0.5, 3.1, 1.2],
        [-1.88, 3.1, -0.88],
        [1.88, 3.1, -0.88],
        [-1.9, 3.1, 1.1],
        [1.9, 3.1, 1.1],
        [2.3, 3.1, -0.2],
        [-2.3, 3.1, -0.2],
        
    ];
  
    return (
        <>
            <ToppingSmallCornersLarg color={color}/>
            <ToppingSmallEdgesLarg color = {color}/>
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }


  function FullBottomHeart({ color }: { color: string }) {
    const fullBottomPositions: [number, number, number][] = [
        [-0.8, -1.3, -1.9],
        [0.88, -1.3, -1.88],
        [-0.5, -1.3, 1.2],
        [0.5, -1.3, 1.2],
        [-1.88, -1.3, -0.88],
        [1.88, -1.3, -0.88],
        [-1.9, -1.3, 1.1],
        [1.9, -1.3, 1.1],
        [2.3, -1.3, -0.2],
        [-2.3, -1.3, -0.2],

        [2.4, -1.3, 0.5],
        [-2.4, -1.3, 0.5],
        [0, -1.3, 0.9],
        [0, -1.3, -2.2],
        
        [1.24, -1.3, 1.32],
        [-1.24, -1.3, 1.32],
        [1.4, -1.3, -1.42],
        [-1.4, -1.3, -1.42],
    ];
  
    return (
        <>
            
            {fullBottomPositions.map((position, index) => (
                <Bottom key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }

  ////////////////// Heart Topping (Small , Large , regular)////////////////////



 function HeartTopHeart({ color }: { color: string }) {
  

  return (
    <>
    <Heart position={[0, 1.85, 1]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Heart position={[0, 1.85, -1.9]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Heart position={[-0.7, 1.85, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Heart position={[-2.2, 1.85, -0.2]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>

      
    <Heart position={[0.7, 1.85, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Heart position={[2.2, 1.85, -0.2]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>

      
    <Heart position={[-1.4, 1.85, -1.3]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Heart position={[0, 1.85, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>

      
    <Heart position={[-1.6, 1.85, 1]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Heart position={[1.4, 1.85, -1.35]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Heart position={[1.8, 1.85, 0.85]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    </>
  );
}
function HeartTopSmallHeart({ color }: { color: string }) {
    return(
        <>
        <Heart position={[0, 0.65, 1]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Heart position={[0, 0.65, -1.9]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Heart position={[-0.7, 0.65, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Heart position={[-2.2, 0.65, -0.2]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    
          
        <Heart position={[0.7, 0.65, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Heart position={[2.2, 0.65, -0.2]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    
          
        <Heart position={[-1.4, 0.65, -1.3]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Heart position={[0, 0.65, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    
          
        <Heart position={[-1.6, 0.65, 1]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Heart position={[1.4, 0.65, -1.35]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Heart position={[1.8, 0.65, 0.85]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        </>
    )
}

function HeartTopLargHeart({ color }: { color: string }) {
  

    return (
        <>
        <Heart position={[0, 3.05, 1]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Heart position={[0, 3.05, -1.9]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Heart position={[-0.7, 3.05, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Heart position={[-2.2, 3.05, -0.2]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    
          
        <Heart position={[0.7, 3.05, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Heart position={[2.2, 3.05, -0.2]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    
          
        <Heart position={[-1.4, 3.05, -1.3]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Heart position={[0, 3.05, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    
          
        <Heart position={[-1.6, 3.05, 1]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Heart position={[1.4, 3.05, -1.35]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Heart position={[1.8, 3.05, 0.85]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        </>
    );
  }


export {  HeartTopHeart, FullSmallToppingHeart, FullToppingHeart, FullMixToppingHeart ,FullBottomHeart , HeartTopSmallHeart , HeartTopLargHeart , FullToppingLargHeart , FullMixToppingLargHeart , FullSmallToppingLargHeart , FullToppingSmallHeart , FullMixToppingSmallHeart , FullSmallToppingSmallHeart };

