
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
      [1.7, 1.6, 0],
      [-1.7, 1.6, 0],
      [0, 1.6, 1.7],
      [0, 1.6, -1.7],
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
        [1.7, 0.6, 0],
        [-1.7, 0.6, 0],
        [0, 0.6, 1.7],
        [0, 0.6, -1.7],
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
        [1.7, 2.6, 0],
        [-1.7, 2.6, 0],
        [0, 2.6, 1.7],
        [0, 2.6, -1.7],
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
        [1.7, 1.6, 0],
        [-1.7, 1.6, 0],
        [0, 1.6, 1.7],
        [0, 1.6, -1.7],
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
        [1.7, 0.6, 0],
        [-1.7, 0.6, 0],
        [0, 0.6, 1.7],
        [0, 0.6, -1.7],
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
        [1.7, 2.6, 0],
        [-1.7, 2.6, 0],
        [0, 2.6, 1.7],
        [0, 2.6, -1.7],
    ];
  
    return (
        <>
            {cornerPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
        </>
    );
  }





  


  
function FullToppingSquare({ color }: { color: string }) {
  const fullToppingPositions: [number, number, number][] = [
      [-0.5, 1.6, -1.2],
      [0.5, 1.6, -1.2],
      [-0.5, 1.6, 1.2],
      [0.5, 1.6, 1.2],
      [-1.1, 1.6, -0.6],
      [1.1, 1.6, -0.6],
      [-1.1, 1.6, 0.6],
      [1.1, 1.6, 0.6],
      
  ];

  return (
      <>
          <ToppingCorners color={color}/>
          {/* <ToppingEdges color={color}/> */}
          {fullToppingPositions.map((position, index) => (
              <ToppingPiece key={index} position={position} color={color} />
          ))}
          
      </>
  );
}


function FullToppingSmallSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 0.6, -1.2],
        [0.5, 0.6, -1.2],
        [-0.5, 0.6, 1.2],
        [0.5, 0.6, 1.2],
        [-1.1, 0.6, -0.6],
        [1.1, 0.6, -0.6],
        [-1.1, 0.6, 0.6],
        [1.1, 0.6, 0.6],
        
    ];
  
    return (
        <>
            <ToppingCornersSmall color={color}/>
            {/* <ToppingEdgesSmall color={color}/> */}
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }

function FullToppingLargSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 2.6, -1.2],
        [0.5, 2.6, -1.2],
        [-0.5, 2.6, 1.2],
        [0.5, 2.6, 1.2],
        [-1.1, 2.6, -0.6],
        [1.1, 2.6, -0.6],
        [-1.1, 2.6, 0.6],
        [1.1, 2.6, 0.6],
        
    ];
  
    return (
        <>
            <ToppingCornersLarg color={color}/>
            {/* <ToppingEdgesLarg color={color}/> */}
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }

function FullSmallToppingSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 1.6, -1.2],
        [0.5, 1.6, -1.2],
        [-0.5, 1.6, 1.2],
        [0.5, 1.6, 1.2],
        [-1.1, 1.6, -0.6],
        [1.1, 1.6, -0.6],
        [-1.1, 1.6, 0.6],
        [1.1, 1.6, 0.6],
        
    ];
  
    return (
        <>
            <ToppingSmallCorners color={color}/>
            {/* <ToppingSmallEdges color={color} /> */}
            {fullToppingPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }


  function FullSmallToppingSmallSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 0.6, -1.2],
        [0.5, 0.6, -1.2],
        [-0.5, 0.6, 1.2],
        [0.5, 0.6, 1.2],
        [-1.1, 0.6, -0.6],
        [1.1, 0.6, -0.6],
        [-1.1, 0.6, 0.6],
        [1.1, 0.6, 0.6],
        
    ];
  
    return (
        <>
            <ToppingSmallCornersSmall color={color}/>
            {/* <ToppingSmallEdgesSmall color={color} /> */}
            {fullToppingPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }


  function FullSmallToppingLargSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 2.6, -1.2],
        [0.5, 2.6, -1.2],
        [-0.5, 2.6, 1.2],
        [0.5, 2.6, 1.2],
        [-1.1, 2.6, -0.6],
        [1.1, 2.6, -0.6],
        [-1.1, 2.6, 0.6],
        [1.1, 2.6, 0.6],
        
    ];
  
    return (
        <>
            <ToppingSmallCornersLarg color={color}/>
            {/* <ToppingSmallEdgesLarg color={color} /> */}
            {fullToppingPositions.map((position, index) => (
                <SmallTopping key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }



function FullMixToppingSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 1.6, -1.2],
        [0.5, 1.6, -1.2],
        [-0.5, 1.6, 1.2],
        [0.5, 1.6, 1.2],
        [-1.1, 1.6, -0.6],
        [1.1, 1.6, -0.6],
        [-1.1, 1.6, 0.6],
        [1.1, 1.6, 0.6],
        
    ];
  
    return (
        <>
            <ToppingSmallCorners color={color}/>
            {/* <ToppingSmallEdges color = {color}/> */}
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );

  }


  function FullMixToppingSmallSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 0.6, -1.2],
        [0.5, 0.6, -1.2],
        [-0.5, 0.6, 1.2],
        [0.5, 0.6, 1.2],
        [-1.1, 0.6, -0.6],
        [1.1, 0.6, -0.6],
        [-1.1, 0.6, 0.6],
        [1.1, 0.6, 0.6],
        
    ];
  
    return (
        <>
            <ToppingSmallCornersSmall color={color}/>
            {/* <ToppingSmallEdgesSmall color = {color}/> */}
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }


  function FullMixToppingLargSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 2.6, -1.2],
        [0.5, 2.6, -1.2],
        [-0.5, 2.6, 1.2],
        [0.5, 2.6, 1.2],
        [-1.1, 2.6, -0.6],
        [1.1, 2.6, -0.6],
        [-1.1, 2.6, 0.6],
        [1.1, 2.6, 0.6],
        
    ];
  
    return (
        <>
            <ToppingSmallCornersLarg color={color}/>
            {/* <ToppingSmallEdgesLarg color = {color}/> */}
            {fullToppingPositions.map((position, index) => (
                <ToppingPiece key={index} position={position} color={color} />
            ))}
            
        </>
    );
  }


  function FullBottomSquare({ color }: { color: string }) {
    const fullBottomPositions: [number, number, number][] = [
        [-0.5, -1.3, -1.2],
        [0.5, -1.3, -1.2],
        [-0.5, -1.3, 1.2],
        [0.5, -1.3, 1.2],
        [-1.2, -1.3, -0.6],
        [1.2, -1.3, -0.6],
        [-1.2, -1.3, 0.6],
        [1.2, -1.3, 0.6],

        // [1.2, -1.3, 1.2],
        // [-1.2, -1.3, 1.2],
        // [1.2, -1.3, -1.2],
        // [-1.2, -1.3, -1.2],
        [1.7, -1.3, 0],
        [-1.7, -1.3, 0],
        [0, -1.3, 1.7],
        [0, -1.3, -1.7],
        
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



 function HeartTopSquare({ color }: { color: string }) {
  

  return (
    <>
    <Heart position={[0, 1.55, 1.6]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[0, 1.55, -1.6]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[-1.6, 1.55, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[1.6, 1.55, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[-0.8, 1.55, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[-0.8, 1.55, 0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[0.8, 1.55, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[0.8, 1.55, 0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>

    <Heart position={[0, 1.55, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>

      
    </>
  );
}
function HeartTopSmallSquare({ color }: { color: string }) {
    return(
        <>
    <Heart position={[0, 0.6, 1.6]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[0, 0.6, -1.6]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[-1.6, 0.6, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[1.6, 0.6, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[-0.8, 0.6, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[-0.8, 0.6, 0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[0.8, 0.6, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
      
    <Heart position={[0.8, 0.6, 0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>

    <Heart position={[0, 0.6, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>

      
    </>
    )
}

function HeartTopLargSquare({ color }: { color: string }) {
  

    return (
        <>
        <Heart position={[0, 2.55, 1.6]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
          
        <Heart position={[0, 2.55, -1.6]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
          
        <Heart position={[-1.6, 2.55, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
          
        <Heart position={[1.6, 2.55, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
          
        <Heart position={[-0.8, 2.55, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
          
        <Heart position={[-0.8, 2.55, 0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
          
        <Heart position={[0.8, 2.55, -0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
          
        <Heart position={[0.8, 2.55, 0.8]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
    
        <Heart position={[0, 2.55, 0]} scale={[0.32, 0.4, 0.4]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color={color}/>
    
          
        </>
    );
  }


export {  HeartTopSquare, FullSmallToppingSquare, FullToppingSquare, FullMixToppingSquare ,FullBottomSquare , HeartTopSmallSquare , HeartTopLargSquare , FullToppingLargSquare , FullMixToppingLargSquare , FullSmallToppingLargSquare , FullToppingSmallSquare , FullMixToppingSmallSquare , FullSmallToppingSmallSquare };

