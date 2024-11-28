


import CreamTopping from '../../../3D-component/CreamTopping';
import Cream from '../../../3D-component/Cream';


import DripCream from '../../../3D-component/DripCream';
import Hearty from '../../../3D-component/Hearty';
import  Line from '../../../3D-component/Line';
import Star from '../../../3D-component/Star';
import BottomCream from '../../../3D-component/BottomCream';




function Cramel ({color = '#7B3F00'}: {color: string}) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.7, 1.5, -1.7],
        [0.7, 1.5, -1.7],
        [-0.7, 1.5, 1.7],
        [0.7, 1.5, 1.7],
        [-1.7, 1.5, -0.7],
        [1.7, 1.5, -0.7],
        [-1.7, 1.5, 0.7],
        [1.7, 1.5, 0.7],
        [1.8, 1.5, 0],
        [-1.8, 1.5, 0],
        [0, 1.5, 1.8],
        [0, 1.5, -1.8],
        [1.3, 1.5, 1.3],
        [-1.3, 1.5, 1.3],
        [1.3, 1.5, -1.3],
        [-1.3, 1.5, -1.3],
          
      ];
    return (
        <>
        <Line  position={[0, -2 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -2 , 0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -2 , 0.6]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -2 , 0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -2 , 1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />

          <Line  position={[0, -2 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -2 , -0.6]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -2 , -0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -2 , -1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />
           
          <Line  position={[0, -2 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.3, -2 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.6, -2 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[0.9, -2 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.2, -2 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

          <Line  position={[-0.3, -2 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.6, -2 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.9, -2 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.2, -2 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />

          
          {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
          ))}

        </>
    );
}
  
function CramelSmall ({color = '#7B3F00'}: {color: string}) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.7, 0.5, -1.7],
        [0.7, 0.5, -1.7],
        [-0.7, 0.5, 1.7],
        [0.7, 0.5, 1.7],
        [-1.7, 0.5, -0.7],
        [1.7, 0.5, -0.7],
        [-1.7, 0.5, 0.7],
        [1.7, 0.5, 0.7],
        [1.8, 0.5, 0],
        [-1.8, 0.5, 0],
        [0, 0.5, 1.8],
        [0, 0.5, -1.8],
        [1.3, 0.5, 1.3],
        [-1.3, 0.5, 1.3],
        [1.3, 0.5, -1.3],
        [-1.3, 0.5, -1.3],
          
      ];
    return (
        <>
        <Line  position={[0, -3 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -3 , 0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -3 , 0.6]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -3 , 0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -3 , 1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />

          <Line  position={[0, -3 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -3 , -0.6]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -3 , -0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -3 , -1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />
           
          <Line  position={[0, -3 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.3, -3 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.6, -3 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[0.9, -3 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.2, -3 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

          <Line  position={[-0.3, -3 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.6, -3 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.9, -3 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.2, -3 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />

          
          {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
          ))}

        </>
    );
}


function CramelLarge ({color = '#7B3F00'}: {color: string}) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.7, 2.5, -1.7],
        [0.7, 2.5, -1.7],
        [-0.7, 2.5, 1.7],
        [0.7, 2.5, 1.7],
        [-1.7, 2.5, -0.7],
        [1.7, 2.5, -0.7],
        [-1.7, 2.5, 0.7],
        [1.7, 2.5, 0.7],
        [1.8, 2.5, 0],
        [-1.8, 2.5, 0],
        [0, 2.5, 1.8],
        [0, 2.5, -1.8],
        [1.3, 2.5, 1.3],
        [-1.3, 2.5, 1.3],
        [1.3, 2.5, -1.3],
        [-1.3, 2.5, -1.3],
          
      ];
    return (
        <>
        <Line  position={[0, -1 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -1 , 0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -1 , 0.6]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -1 , 0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -1 , 1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />

          <Line  position={[0, -1 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -1 , -0.6]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -1 , -0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          <Line  position={[0, -1 , -1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />
           
          <Line  position={[0, -1 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.3, -1 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.6, -1 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[0.9, -1 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.2, -1 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

          <Line  position={[-0.3, -1 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.6, -1 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.9, -1 , 0]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.2, -1 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />

          
          {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
          ))}

        </>
    );
}


function FullTopping({ color }: { color: string }) {
  const fullToppingPositions: [number, number, number][] = [
    [-0.7, 1.6, -1.7],
    [0.7, 1.6, -1.7],
    [-0.7, 1.6, 1.7],
    [0.7, 1.6, 1.7],
    [-1.7, 1.6, -0.7],
    [1.7, 1.6, -0.7],
    [-1.7, 1.6, 0.7],
    [1.7, 1.6, 0.7],
    [1.8, 1.6, 0],
    [-1.8, 1.6, 0],
    [0, 1.6, 1.8],
    [0, 1.6, -1.8],
    [1.3, 1.6, 1.3],
    [-1.3, 1.6, 1.3],
    [1.3, 1.6, -1.3],
    [-1.3, 1.6, -1.3],
      
  ];
  

  return (
      <>
          {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
          ))}
          
      </>
  );
}


function FullToppingSmall({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.7, 0.6, -1.7],
    [0.7, 0.6, -1.7],
    [-0.7, 0.6, 1.7],
    [0.7, 0.6, 1.7],
    [-1.7, 0.6, -0.7],
    [1.7, 0.6, -0.7],
    [-1.7, 0.6, 0.7],
    [1.7, 0.6, 0.7],
    [1.8, 0.6, 0],
    [-1.8, 0.6, 0],
    [0, 0.6, 1.8],
    [0, 0.6, -1.8],
    [1.3, 0.6, 1.3],
    [-1.3, 0.6, 1.3],
    [1.3, 0.6, -1.3],
    [-1.3, 0.6, -1.3],
        
    ];
  
    return (
        <>
            
            

             {fullToppingPositions.map((position, index) => (
                <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
            ))} 
            
        </>
    );
  }

function FullToppingLarg({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.7, 2.6, -1.7],
        [0.7, 2.6, -1.7],
        [-0.7, 2.6, 1.7],
        [0.7, 2.6, 1.7],
        [-1.7, 2.6, -0.7],
        [1.7, 2.6, -0.7],
        [-1.7, 2.6, 0.7],
        [1.7, 2.6, 0.7],
        [1.8, 2.6, 0],
        [-1.8, 2.6, 0],
        [0, 2.6, 1.8],
        [0, 2.6, -1.8],
        [1.3, 2.6, 1.3],
        [-1.3, 2.6, 1.3],
        [1.3, 2.6, -1.3],
        [-1.3, 2.6, -1.3],
        
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
               <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
            ))}
            
        </>
    );
  }

function FullSmallTopping({ color }: { color: string }) {
    
  
    return (
        <>
        <Line  position={[0, -2 , 0]} color='red' scale={[5, 3, 3]} /> 
        <DripCream position={[0, -0.1 , 0]} color={color} scale={[2.5, 1.99, 2.37]} rotation={[0, Math.PI / 3, 0]}/> 
        </>
         
    );
  }


  function FullSmallToppingSmall({ color }: { color: string }) {
    
  
    return (
        <DripCream position={[0, -1.2 , 0]} color={color} scale={[2.5, 1.99, 2.37]} rotation={[0, Math.PI / 3, 0]}/>
    );
  }


  function FullSmallToppingLarg({ color }: { color: string }) {
    
  
    return (
        <DripCream position={[0, 0.8 , 0]} color={color} scale={[2.5, 1.99, 2.37]} rotation={[0, Math.PI / 3, 0]} />
    );
  }



function FullMixTopping({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
      [-0.7, 1.6, -1.7],
      [0.7, 1.6, -1.7],
      [-0.7, 1.6, 1.7],
      [0.7, 1.6, 1.7],
      [-1.7, 1.6, -0.7],
      [1.7, 1.6, -0.7],
      [-1.7, 1.6, 0.7],
      [1.7, 1.6, 0.7],
      [1.8, 1.6, 0],
      [-1.8, 1.6, 0],
      [0, 1.6, 1.8],
      [0, 1.6, -1.8],
      [1.3, 1.6, 1.3],
      [-1.3, 1.6, 1.3],
      [1.3, 1.6, -1.3],
      [-1.3, 1.6, -1.3],
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
                <CreamTopping key={index} position={position} color={color} scale={[0.4, 0.4, 0.4]} />
            ))}
            
        </>
    );

  }


  function FullMixToppingSmall({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
      [-0.7, 0.6, -1.7],
      [0.7, 0.6, -1.7],
      [-0.7, 0.6, 1.7],
      [0.7, 0.6, 1.7],
      [-1.7, 0.6, -0.7],
      [1.7, 0.6, -0.7],
      [-1.7, 0.6, 0.7],
      [1.7, 0.6, 0.7],
      [1.8, 0.6, 0],
      [-1.8, 0.6, 0],
      [0, 0.6, 1.8],
      [0, 0.6, -1.8],
      [1.3, 0.6, 1.3],
      [-1.3, 0.6, 1.3],
      [1.3, 0.6, -1.3],
      [-1.3, 0.6, -1.3],
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
                <CreamTopping key={index} position={position} color={color} scale={[0.4, 0.4, 0.4]} />
            ))}
            
        </>
    );
  }


  function FullMixToppingLarg({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
      [-0.7, 2.6, -1.7],
      [0.7, 2.6, -1.7],
      [-0.7, 2.6, 1.7],
      [0.7, 2.6, 1.7],
      [-1.7, 2.6, -0.7],
      [1.7, 2.6, -0.7],
      [-1.7, 2.6, 0.7],
      [1.7, 2.6, 0.7],
      [1.8, 2.6, 0],
      [-1.8, 2.6, 0],
      [0, 2.6, 1.8],
      [0, 2.6, -1.8],
      [1.3, 2.6, 1.3],
      [-1.3, 2.6, 1.3],
      [1.3, 2.6, -1.3],
      [-1.3, 2.6, -1.3],
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
                <CreamTopping key={index} position={position} color={color} scale={[0.4, 0.4, 0.4]} />
            ))}
            
        </>
    );
  }


  function FullBottom({ color }: { color: string }) {
    
  
    return (
        <>
            
            <BottomCream position={[0, -2.3, 0]} scale={[2.36, 2.36, 2.36]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
            
        </>
    );
  }

  ////////////////// Heart Topping (Small , Large , regular)////////////////////



 function HeartTop({ color }: { color: string }) {
  

  return (
    <>
    <Hearty position={[0, 1.5, 1.5]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[0, 1.5, -1.5]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-0.7, 1.5, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[0.7, 1.5, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-1.2, 1.5, -1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[-1.4, 1.5, 0.7]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[1.2, 1.5, -1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    <Hearty position={[1.4, 1.5, 0.7]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    </>
  );
}
function HeartTopSmallRound({ color }: { color: string }) {
    return(
        <>
        <Hearty position={[0, 0.5, 1.5]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
      <Hearty position={[0, 0.5, -1.5]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[-0.7, 0.5, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[0.7, 0.5, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[-1.2, 0.5, -1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[-1.4, 0.5, 0.7]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[1.2, 0.5, -1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[1.4, 0.5, 0.7]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
        </> 
    )
}

function HeartTopLargRound({ color }: { color: string }) {
  

    return (
      <>
      <Hearty position={[0, 2.5, 1.5]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
      <Hearty position={[0, 2.5, -1.5]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[-0.7, 2.5, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[0.7, 2.5, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[-1.2, 2.5, -1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[-1.4, 2.5, 0.7]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[1.2, 2.5, -1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      <Hearty position={[1.4, 2.5, 0.7]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        
      </>
    );
  }

  function StarTop({ color }: { color: string }) {
    return (
        <>
    <Star position={[0, 1.5, 1.5]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0, 1.5, -1.5]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-0.7, 1.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0.7, 1.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-1.2, 1.5, -1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-1.4, 1.5, 0.7]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[1.2, 1.5, -1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[1.4, 1.5, 0.7]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    </>
    );
  }

  function StarTopSmall({ color }: { color: string }) {
    return (
        <>
    <Star position={[0, 0.5, 1.5]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0, 0.5, -1.5]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-0.7, 0.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0.7, 0.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-1.2, 0.5, -1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-1.4, 0.5, 0.7]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[1.2, 0.5, -1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[1.4, 0.5, 0.7]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    </>
    );
  }

  function StarTopLarge({ color }: { color: string }) {
    return (
        <>
    <Star position={[0, 2.5, 1.5]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0, 2.5, -1.5]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-0.7, 2.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[0.7, 2.5, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-1.2, 2.5, -1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[-1.4, 2.5, 0.7]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[1.2, 2.5, -1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    <Star position={[1.4, 2.5, 0.7]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      
    </>
    );
  }


export {  HeartTop, FullSmallTopping, FullTopping, FullMixTopping ,FullBottom , HeartTopSmallRound , HeartTopLargRound , FullToppingLarg , FullMixToppingLarg , FullSmallToppingLarg , FullToppingSmall , FullMixToppingSmall , FullSmallToppingSmall , Cramel , CramelSmall , CramelLarge , StarTop  , StarTopSmall , StarTopLarge};

