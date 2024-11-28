

import SquareCream from '../../../3D-component/SquareCream';
import Cream from '../../../3D-component/Cream';
import SquareBottom from '../../../3D-component/SquareBottom';
import CreamTopping from '../../../3D-component/CreamTopping';
import Hearty from '../../../3D-component/Hearty';
import Star from '../../../3D-component/Star';
import Line from '../../../3D-component/Line';



 
function CramelSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 1.5, -1.2],
        [0.5, 1.5, -1.2],
        [-0.5, 1.5, 1.2],
        [0.5, 1.5, 1.2],
        [-1.1, 1.5, -0.6],
        [1.1, 1.5, -0.6],
        [-1.1, 1.5, 0.6],
        [1.1, 1.5, 0.6],
  
        [1.7, 1.5, 0],
        [-1.7, 1.5, 0],
        [0, 1.5, 1.7],
        [0, 1.5, -1.7],
        
    ];
  
    return (
        <>
            <Line  position={[0, -2 , 0]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, Math.PI / 4, 0]} />
          <Line  position={[0.2, -2 , 0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[0.4, -2 , 0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[0.6, -2 , 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          
          <Line  position={[-0.2, -2 , -0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[-0.4, -2 , -0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[-0.6, -2 , -0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          
          <Line  position={[0, -2 , 0]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[0.2, -2 , -0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[0.4, -2 , -0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]} />
          <Line  position={[0.6, -2 ,- 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          
          <Line  position={[-0.2, -2 , 0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[-0.4, -2 , 0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[-0.6, -2 , 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]} />
         
          
            {fullToppingPositions.map((position, index) => (
                <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
            ))}
            
        </>
    );
  }
  
  
  function CramelSquareSmall({ color }: { color: string }) {
      const fullToppingPositions: [number, number, number][] = [
          [-0.5, 0.5, -1.2],
          [0.5, 0.5, -1.2],
          [-0.5, 0.5, 1.2],
          [0.5, 0.5, 1.2],
          [-1.1, 0.5, -0.6],
          [1.1, 0.5, -0.6],
          [-1.1, 0.5, 0.6],
          [1.1, 0.5, 0.6],
    
          [1.7, 0.5, 0],
          [-1.7, 0.5, 0],
          [0, 0.5, 1.7],
          [0, 0.5, -1.7],
          
      ];
    
      return (
          <> <Line  position={[0, -3 , 0]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, Math.PI / 4, 0]} />
          <Line  position={[0.2, -3 , 0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[0.4, -3 , 0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[0.6, -3 , 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          
          <Line  position={[-0.2, -3 , -0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[-0.4, -3 , -0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[-0.6, -3 , -0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          
          <Line  position={[0, -3 , 0]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[0.2, -3 , -0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[0.4, -3 , -0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]} />
          <Line  position={[0.6, -3 ,- 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          
          <Line  position={[-0.2, -3 , 0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[-0.4, -3 , 0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[-0.6, -3 , 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]} />
         
          
            {fullToppingPositions.map((position, index) => (
                <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
            ))}
              
          </>
      );
    }
  
  function CramelSquareLarge({ color }: { color: string }) {
      const fullToppingPositions: [number, number, number][] = [
          [-0.5, 2.5, -1.2],
          [0.5, 2.5, -1.2],
          [-0.5, 2.5, 1.2],
          [0.5, 2.5, 1.2],
          [-1.1, 2.5, -0.6],
          [1.1, 2.5, -0.6],
          [-1.1, 2.5, 0.6],
          [1.1, 2.5, 0.6],
    
          [1.7, 2.6, 0],
          [-1.7, 2.5, 0],
          [0, 2.5, 1.7],
          [0, 2.5, -1.7],
          
      ];
    
      return (
          <>
               <Line  position={[0, -1 , 0]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, Math.PI / 4, 0]} />
              <Line  position={[0.2, -1 , 0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[0.4, -1 , 0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[0.6, -1 , 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          
          <Line  position={[-0.2, -1 , -0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[-0.4, -1 , -0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          <Line  position={[-0.6, -1 , -0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]}  rotation={[0, Math.PI / 4, 0]}/>
          
          <Line  position={[0, -1 , 0]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[0.2, -1 , -0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[0.4, -1 , -0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]} />
          <Line  position={[0.6, -1 ,- 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          
          <Line  position={[-0.2, -1 , 0.2]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[-0.4, -1 , 0.4]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]}/>
          <Line  position={[-0.6, -1 , 0.6]} color='#7B3F00' scale={[2.8, 2.8, 1.8]} rotation={[0, -Math.PI / 4, 0]} />
         
          

            {fullToppingPositions.map((position, index) => (
                <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
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

      [1.7, 1.6, 0],
      [-1.7, 1.6, 0],
      [0, 1.6, 1.7],
      [0, 1.6, -1.7],
      
  ];

  return (
      <>
          
          {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
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
  
        [1.7, 0.6, 0],
        [-1.7, 0.6, 0],
        [0, 0.6, 1.7],
        [0, 0.6, -1.7],
        
    ];
  
    return (
        <>
          

            
          {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
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
  
        [1.7, 2.6, 0],
        [-1.7, 2.6, 0],
        [0, 2.6, 1.7],
        [0, 2.6, -1.7],
        
    ];
  
    return (
        <>
            
          {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
          ))}
            
        </>
    );
  }

function FullSmallToppingSquare({ color }: { color: string }) {
   
  
    return (
        <>
            <SquareCream position={[0, -2.1, 0]} scale={[3.35, 3.35,  3.32]} color={color} rotation={[0, Math.PI / 4, 0]}/>
        </>
    );
  }


  function FullSmallToppingSmallSquare({ color }: { color: string }) {
   
  
    return (
        <>
         

         <SquareCream position={[0, -2.2, 0]} scale={[3.35, 2.5, 3.32]} color={color} rotation={[0, Math.PI / 4, 0]}/>

            
        </>
    );
  }


  function FullSmallToppingLargSquare({ color }: { color: string }) {
    
  
    return (
        <>
         <SquareCream position={[0, -1.1, 0]} scale={[3.35, 3.35, 3.32]} color={color} rotation={[0, Math.PI / 4, 0]}/>

            
        </>
    );
  }



function FullMixToppingSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 1.45, -1.2],
        [0.5, 1.45, -1.2],
        [-0.5, 1.45, 1.2],
        [0.5, 1.45, 1.2],
        [-1.1, 1.45, -0.6],
        [1.1, 1.45, -0.6],
        [-1.1, 1.45, 0.6],
        [1.1, 1.45, 0.6],
  
        [1.7, 1.45, 0],
        [-1.7, 1.45, 0],
        [0, 1.45, 1.7],
        [0, 1.45, -1.7],
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
                 <CreamTopping key={index} position={position} color={color} scale={[0.35, 0.35, 0.35]} />
            ))}
            
        </>
    );

  }


  function FullMixToppingSmallSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 0.45, -1.2],
        [0.5, 0.45, -1.2],
        [-0.5, 0.45, 1.2],
        [0.5, 0.45, 1.2],
        [-1.1, 0.45, -0.6],
        [1.1, 0.45, -0.6],
        [-1.1, 0.45, 0.6],
        [1.1, 0.45, 0.6],
  
        [1.7, 0.45, 0],
        [-1.7, 0.45, 0],
        [0, 0.45, 1.7],
        [0, 0.45, -1.7],
        
    ];
  
    return (
        <>
            {fullToppingPositions.map((position, index) => (
                 <CreamTopping key={index} position={position} color={color} scale={[0.35, 0.35, 0.35]} />
            ))}
            
            
        </>
    );
  }


  function FullMixToppingLargSquare({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.5, 2.45, -1.2],
        [0.5, 2.45, -1.2],
        [-0.5, 2.45, 1.2],
        [0.5, 2.45, 1.2],
        [-1.1, 2.45, -0.6],
        [1.1, 2.45, -0.6],
        [-1.1, 2.45, 0.6],
        [1.1, 2.45, 0.6],
  
        [1.7, 2.45, 0],
        [-1.7, 2.45, 0],
        [0, 2.45, 1.7],
        [0, 2.45, -1.7],
        
    ];
  
    return (
        <>
            {fullToppingPositions.map((position, index) => (
                 <CreamTopping key={index} position={position} color={color} scale={[0.35, 0.35, 0.35]} />
            ))}
            
            
        </>
    );
  }


  function FullBottomSquare({ color }: { color: string }) {
    
  
    return (
        <>
            <SquareBottom position={[1.2, -1.5, 1.2]} scale={[0.025, 0.02, 0.025]} color={color} rotation={[0,Math.PI/4, Math.PI/2]}/>
          <SquareBottom position={[-1.2, -1.5, -1.2]} scale={[0.02, 0.02, 0.025]} color={color} rotation={[0,Math.PI/4, Math.PI/2]}/>
          <SquareBottom position={[1.2, -1.5, -1.2]} scale={[0.02, 0.02, 0.025]} color={color} rotation={[0,-Math.PI/4, Math.PI/2]}/>
          <SquareBottom position={[-1.2, -1.5, 1.2]} scale={[0.02, 0.02, 0.025]} color={color} rotation={[0,-Math.PI/4, -Math.PI/2]}/>


            
        </>
    );
  }

  ////////////////// Heart Topping (Small , Large , regular)////////////////////



 function HeartTopSquare({ color }: { color: string }) {
  

  return (
    <>
    <Hearty position={[0, 1.55, 1.6]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[0, 1.55, -1.6]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-1.6, 1.55, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[1.6, 1.55, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-0.8, 1.55, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-0.8, 1.55, 0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[0.8, 1.55, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[0.8, 1.55, 0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>

    <Hearty position={[0, 1.55, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>

      
    </>
  );
}
function HeartTopSmallSquare({ color }: { color: string }) {
    return(
        <>
    <Hearty position={[0, 0.6, 1.6]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[0, 0.6, -1.6]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-1.6, 0.6, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[1.6, 0.6, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-0.8, 0.6, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-0.8, 0.6, 0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[0.8, 0.6, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[0.8, 0.6, 0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>

    <Hearty position={[0, 0.6, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>

      
    </>
    )
}

function HeartTopLargSquare({ color }: { color: string }) {
  

    return (
        <>
        <Hearty position={[0, 2.55, 1.6]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Hearty position={[0, 2.55, -1.6]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Hearty position={[-1.6, 2.55, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Hearty position={[1.6, 2.55, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Hearty position={[-0.8, 2.55, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Hearty position={[-0.8, 2.55, 0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Hearty position={[0.8, 2.55, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        <Hearty position={[0.8, 2.55, 0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    
        <Hearty position={[0, 2.55, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    
          
        </>
    );
  }
///////// Star Topping //////

function StarTopSquare({ color }: { color: string }) {
    return (
        <>
    <Star position={[0, 1.5, 1.6]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0, 1.5, -1.6]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-1.6, 1.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[1.6, 1.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-0.8, 1.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-0.8, 1.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0.8, 1.5, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0.8, 1.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
    <Star position={[-0.8, 1.5, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>


    <Star position={[0, 1.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>

      
    </>
    );
  }

  function StarTopSmallSquare({ color }: { color: string }) {
    return (
        <>
    <Star position={[0, 0.5, 1.6]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
      <Star position={[0, 0.5, -1.6]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[-1.6, 0.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[1.6, 0.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[-0.8, 0.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[-0.8, 0.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[0.8, 0.5, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[0.8, 0.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[-0.8, 0.5, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
  
  
      <Star position={[0, 0.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
  
        
    </>
    );
  }

  function StarTopLargeSquare({ color }: { color: string }) {
    return (
        <>
    <Star position={[0, 2.5, 1.6]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
      <Star position={[0, 2.5, -1.6]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[-1.6, 2.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[1.6, 2.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[-0.8, 2.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[-0.8, 2.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[0.8, 2.5, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      <Star position={[0.8, 2.5, 0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[-0.8, 2.5, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
  
  
      <Star position={[0, 2.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
  
        
    </>
    );
  }


export {  HeartTopSquare, FullSmallToppingSquare, FullToppingSquare, FullMixToppingSquare ,FullBottomSquare , HeartTopSmallSquare , HeartTopLargSquare , FullToppingLargSquare , FullMixToppingLargSquare , FullSmallToppingLargSquare , FullToppingSmallSquare , FullMixToppingSmallSquare , FullSmallToppingSmallSquare , StarTopSquare, StarTopSmallSquare, StarTopLargeSquare , CramelSquare, CramelSquareSmall, CramelSquareLarge};

