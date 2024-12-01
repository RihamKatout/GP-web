


import HeartCream from '../../../3D-component/HeartCream';
import HeartCream2 from '../../../3D-component/HeartCream2';
import Cream from '../../../3D-component/Cream';
import CreamTopping from '../../../3D-component/CreamTopping';
import Hearty from '../../../3D-component/Hearty';
import Star from '../../../3D-component/Star';
import Line from '../../../3D-component/Line';

//// Cramel Topping (Small , Large , Regular) ///////////////

function CramelToppingHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 1.1, -1.88],
        [0.88, 1.1, -1.88],
        [-0.5, 1.1, 1.2],
        [0.5, 1.1, 1.2],
        [-1.88, 1.1, -0.88],
        [1.88, 1.1, -0.88],
        [-2, 1.1, 1.1],//
        [1.9, 1.1, 1.1],
        [2.3, 1.1, -0.2],
        [-2.3, 1.1, -0.2],
  
        [2.4, 1.1, 0.5],
        [-2.4, 1.1, 0.5],
        [0, 1.1, 0.9],
        [0, 1.1, -2.2],
  
        [1.24, 1.1, 1.38],
        [-1.24, 1.1, 1.38],
        [1.4, 1.1, -1.42],
        [-1.4, 1.1, -1.42],
        
    ];
  
    return (
        <>
           <Line  position={[0, -2.5 , 0]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -2.5 , 0.3]} color='#7B3F00' scale={[4.5, 2.8, 1.8]} />
          <Line  position={[0, -2.5 , 0.6]} color='#7B3F00' scale={[4.5, 2.8, 1.8]} />
          <Line  position={[0, -2.5 , 0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          
          <Line  position={[0, -2.5 , -0.3]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -2.5 , -0.6]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -2.5 , -0.9]} color='#7B3F00' scale={[4.2, 2.8, 1.8]} />
          <Line  position={[0, -2.5 , -1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />
          <Line  position={[0, -2.5 , -1.5]} color='#7B3F00' scale={[3, 2.8, 1.8]} /> 
          <Line  position={[0, -2.5 , -1.8]} color='#7B3F00' scale={[1.8, 2.8, 1.8]} /> 
           
          <Line  position={[0, -2.5 , -0.5]} color='#7B3F00' scale={[3.8, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.3, -2.5 , -0.5]} color='#7B3F00' scale={[3.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.6, -2.5 , -0.5]} color='#7B3F00' scale={[3.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[0.9, -2.5 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.2, -2.5 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.5, -2.5 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.8, -2.5 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

          <Line  position={[-0.3, -2.5 , -0.5]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.6, -2.5 , -0.5]} color='#7B3F00' scale={[3.3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.9, -2.5 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.2, -2.5 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.5, -2.5 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-1.8, -2.5 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

            
            {fullToppingPositions.map((position, index) => (
                <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
            ))}
            
        </>
    );
  }
  
  
  function CramelToppingSmallHeart({ color }: { color: string }) {
      const fullToppingPositions: [number, number, number][] = [
          [-0.88, 0.3, -1.88],
        [0.88, 0.3, -1.88],
        [-0.5, 0.3, 1.2],
        [0.5, 0.3, 1.2],
        [-1.88, 0.3, -0.88],
        [1.88, 0.3, -0.88],
        [-2, 0.3, 1.1],//
        [1.9, 0.3, 1.1],
        [2.3, 0.3, -0.2],
        [-2.3, 0.3, -0.2],
  
        [2.4, 0.3, 0.5],
        [-2.4, 0.3, 0.5],
        [0, 0.3, 0.9],
        [0, 0.3, -2.2],
  
        [1.24, 0.3, 1.38],
        [-1.24, 0.3, 1.38],
        [1.4, 0.3, -1.42],
        [-1.4, 0.3, -1.42],
          
          
      ];
    
      return (
          <>
              <Line  position={[0, -3.3 , 0]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -3.3 , 0.3]} color='#7B3F00' scale={[4.5, 2.8, 1.8]} />
          <Line  position={[0, -3.3 , 0.6]} color='#7B3F00' scale={[4.5, 2.8, 1.8]} />
          <Line  position={[0, -3.3 , 0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          
          <Line  position={[0, -3.3 , -0.3]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -3.3 , -0.6]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -3.3 , -0.9]} color='#7B3F00' scale={[4.2, 2.8, 1.8]} />
          <Line  position={[0, -3.3 , -1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />
          <Line  position={[0, -3.3 , -1.5]} color='#7B3F00' scale={[3, 2.8, 1.8]} /> 
          <Line  position={[0, -3.3 , -1.8]} color='#7B3F00' scale={[1.8, 2.8, 1.8]} /> 
           
          <Line  position={[0, -3.3 , -0.5]} color='#7B3F00' scale={[3.8, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.3, -3.3 , -0.5]} color='#7B3F00' scale={[3.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.6, -3.3 , -0.5]} color='#7B3F00' scale={[3.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[0.9, -3.3 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.2, -3.3 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.5, -3.3 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.8, -3.3 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

          <Line  position={[-0.3, -3.3 , -0.5]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.6, -3.3 , -0.5]} color='#7B3F00' scale={[3.3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.9, -3.3 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.2, -3.3 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.5, -3.3 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-1.8, -3.3 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

              {fullToppingPositions.map((position, index) => (
                <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
              ))}
              
          </>
      );
    }
  
  function CramelToppingLargHeart({ color }: { color: string }) {
      const fullToppingPositions: [number, number, number][] = [
          [-0.88,2.1, -1.88],
        [0.88,2.1, -1.88],
        [-0.5,2.1, 1.2],
        [0.5,2.1, 1.2],
        [-1.88,2.1, -0.88],
        [1.88,2.1, -0.88],
        [-2,2.1, 1.1],//
        [1.9,2.1, 1.1],
        [2.3,2.1, -0.2],
        [-2.3,2.1, -0.2],
  
        [2.4,2.1, 0.5],
        [-2.4,2.1, 0.5],
        [0,2.1, 0.9],
        [0,2.1, -2.2],
  
        [1.24,2.1, 1.38],
        [-1.24,2.1, 1.38],
        [1.4,2.1, -1.42],
        [-1.4,2.1, -1.42],
          
      ];
    
      return (
          <>
              <Line  position={[0, -1.5 , 0]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -1.5 , 0.3]} color='#7B3F00' scale={[4.5, 2.8, 1.8]} />
          <Line  position={[0, -1.5 , 0.6]} color='#7B3F00' scale={[4.5, 2.8, 1.8]} />
          <Line  position={[0, -1.5 , 0.9]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} />
          
          <Line  position={[0, -1.5 , -0.3]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -1.5 , -0.6]} color='#7B3F00' scale={[4.4, 2.8, 1.8]} />
          <Line  position={[0, -1.5 , -0.9]} color='#7B3F00' scale={[4.2, 2.8, 1.8]} />
          <Line  position={[0, -1.5 , -1.2]} color='#7B3F00' scale={[3, 2.8, 1.8]} />
          <Line  position={[0, -1.5 , -1.5]} color='#7B3F00' scale={[3, 2.8, 1.8]} /> 
          <Line  position={[0, -1.5 , -1.8]} color='#7B3F00' scale={[1.8, 2.8, 1.8]} /> 
           
          <Line  position={[0, -1.5 , -0.5]} color='#7B3F00' scale={[3.8, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.3, -1.5 , -0.5]} color='#7B3F00' scale={[3.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[0.6, -1.5 , -0.5]} color='#7B3F00' scale={[3.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[0.9, -1.5 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.2, -1.5 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.5, -1.5 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[1.8, -1.5 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

          <Line  position={[-0.3, -1.5 , -0.5]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.6, -1.5 , -0.5]} color='#7B3F00' scale={[3.3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-0.9, -1.5 , -0.3]} color='#7B3F00' scale={[3.2, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.2, -1.5 , 0]} color='#7B3F00' scale={[3, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]} />
          <Line  position={[-1.5, -1.5 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>
          <Line  position={[-1.8, -1.5 , 0]} color='#7B3F00' scale={[2.5, 2.8, 1.8]} rotation={[0, Math.PI / 2, 0]}/>

              {fullToppingPositions.map((position, index) => (
                <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
              ))}
              
          </>
      );
    }
  

//// End of Cramel Topping (Small , Large , Regular) ///////////////


//// Big Cream Top
function FullToppingHeart({ color }: { color: string }) {
  const fullToppingPositions: [number, number, number][] = [
      [-0.88, 1.1, -1.88],
      [0.88, 1.1, -1.88],
      [-0.5, 1.1, 1.2],
      [0.5, 1.1, 1.2],
      [-1.88, 1.1, -0.88],
      [1.88, 1.1, -0.88],
      [-2, 1.1, 1.1],//
      [1.9, 1.1, 1.1],
      [2.3, 1.1, -0.2],
      [-2.3, 1.1, -0.2],

      [2.4, 1.1, 0.5],
      [-2.4, 1.1, 0.5],
      [0, 1.1, 0.9],
      [0, 1.1, -2.2],

      [1.24, 1.1, 1.38],
      [-1.24, 1.1, 1.38],
      [1.4, 1.1, -1.42],
      [-1.4, 1.1, -1.42],
      
  ];

  return (
      <>
          
          {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
          ))}
          
      </>
  );
}


function FullToppingSmallHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 0.3, -1.88],
      [0.88, 0.3, -1.88],
      [-0.5, 0.3, 1.2],
      [0.5, 0.3, 1.2],
      [-1.88, 0.3, -0.88],
      [1.88, 0.3, -0.88],
      [-2, 0.3, 1.1],//
      [1.9, 0.3, 1.1],
      [2.3, 0.3, -0.2],
      [-2.3, 0.3, -0.2],

      [2.4, 0.3, 0.5],
      [-2.4, 0.3, 0.5],
      [0, 0.3, 0.9],
      [0, 0.3, -2.2],

      [1.24, 0.3, 1.38],
      [-1.24, 0.3, 1.38],
      [1.4, 0.3, -1.42],
      [-1.4, 0.3, -1.42],
        
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
            ))}
            
        </>
    );
  }

function FullToppingLargHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88,2.1, -1.88],
      [0.88,2.1, -1.88],
      [-0.5,2.1, 1.2],
      [0.5,2.1, 1.2],
      [-1.88,2.1, -0.88],
      [1.88,2.1, -0.88],
      [-2,2.1, 1.1],//
      [1.9,2.1, 1.1],
      [2.3,2.1, -0.2],
      [-2.3,2.1, -0.2],

      [2.4,2.1, 0.5],
      [-2.4,2.1, 0.5],
      [0,2.1, 0.9],
      [0,2.1, -2.2],

      [1.24,2.1, 1.38],
      [-1.24,2.1, 1.38],
      [1.4,2.1, -1.42],
      [-1.4,2.1, -1.42],
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
              <Cream key={index} position={position} color={color} scale={[0.43, 0.43, 0.43]} />
            ))}
            
        </>
    );
  }

/// End of Big Cream Top 

//heart cream shape 
function FullSmallToppingHeart({ color }: { color: string }) {
    
    return (
        <>
            <HeartCream2 position={[2.1, -0.1, -0.05]} scale={[0.32, 0.4, 0.38]} rotation={[0, -Math.PI / 2, -Math.PI / 2]} color={color}/>
            <HeartCream position={[0.15, 0.25, -0.45]} scale={[0.32, 0.4, 0.38]} rotation={[0, -Math.PI / 2, -Math.PI / 2]} color={color}/>

        </>
    );
  }


  function FullSmallToppingSmallHeart({ color }: { color: string }) {
   
    return (
        <> 
        <HeartCream2 position={[2.1, -1, -0.05]} scale={[0.32, 0.4, 0.38]} rotation={[0, -Math.PI / 2, -Math.PI / 2]} color={color}/>
        <HeartCream position={[0.15, -0.6, -0.45]} scale={[0.32, 0.4, 0.38]} rotation={[0, -Math.PI / 2, -Math.PI / 2]} color={color}/>

        </>
    );
  }


  function FullSmallToppingLargHeart({ color }: { color: string }) {
  
    return (
        <> 
        <HeartCream2 position={[2.1, 0.8, -0.05]} scale={[0.32, 0.4, 0.38]} rotation={[0, -Math.PI / 2, -Math.PI / 2]} color={color}/>
        <HeartCream position={[0.15, 1.2, -0.45]} scale={[0.32, 0.4, 0.38]} rotation={[0, -Math.PI / 2, -Math.PI / 2]} color={color}/>

        </>
    );
  }

//end of heart cream shape

/// Small Cream Top

function FullMixToppingHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 1, -1.88],
        [0.88, 1, -1.88],
        [-0.5, 1, 1.2],
        [0.5, 1, 1.2],
        [-1.88, 1, -0.88],
        [1.88, 1, -0.88],
        [-2, 1, 1.1],//
        [1.9, 1, 1.1],
        [2.3, 1, -0.2],
        [-2.3, 1, -0.2],
  
        [2.4, 1, 0.5],
        [-2.4, 1, 0.5],
        [0, 1, 0.9],
        [0, 1, -2.2],
  
        [1.24, 1, 1.38],
        [-1.24, 1, 1.38],
        [1.4, 1, -1.42],
        [-1.4, 1, -1.42],
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
                <CreamTopping key={index} position={position} color={color} scale={[0.4, 0.4, 0.4]} />
            ))}
            
        </>
    );

  }


  function FullMixToppingSmallHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88, 0.2, -1.88],
      [0.88, 0.2, -1.88],
      [-0.5, 0.2, 1.2],
      [0.5, 0.2, 1.2],
      [-1.88, 0.2, -0.88],
      [1.88, 0.2, -0.88],
      [-2, 0.2, 1.1],//
      [1.9, 0.2, 1.1],
      [2.3, 0.2, -0.2],
      [-2.3, 0.2, -0.2],

      [2.4, 0.2, 0.5],
      [-2.4, 0.2, 0.5],
      [0, 0.2, 0.9],
      [0, 0.2, -2.2],

      [1.24, 0.2, 1.38],
      [-1.24, 0.2, 1.38],
      [1.4, 0.2, -1.42],
      [-1.4, 0.2, -1.42],
        
    ];
  
    return (
        <>
           
            {fullToppingPositions.map((position, index) => (
                <CreamTopping key={index} position={position} color={color} scale={[0.4, 0.4, 0.4]} />
            ))}
            
        </>
    );
  }


  function FullMixToppingLargHeart({ color }: { color: string }) {
    const fullToppingPositions: [number, number, number][] = [
        [-0.88,2, -1.88],
        [0.88,2, -1.88],
        [-0.5,2, 1.2],
        [0.5,2, 1.2],
        [-1.88,2, -0.88],
        [1.88,2, -0.88],
        [-2,2, 1.1],//
        [1.9,2, 1.1],
        [2.3,2, -0.2],
        [-2.3,2, -0.2],
  
        [2.4,2, 0.5],
        [-2.4,2, 0.5],
        [0,2, 0.9],
        [0,2, -2.2],
  
        [1.24,2, 1.38],
        [-1.24,2, 1.38],
        [1.4,2, -1.42],
        [-1.4,2, -1.42],
        
    ];
  
    return (
        <>
            
            {fullToppingPositions.map((position, index) => (
                <CreamTopping key={index} position={position} color={color} scale={[0.4, 0.4, 0.4]} />
            ))}
            
        </>
    );
  }
//// End of Small Cream Top


//// Bottom Heart Shape
  function FullBottomHeart({ color }: { color: string }) {
    
  
    return (
        <>
            
            <HeartCream2 position={[2.38, -2.75, -0.08]} scale={[0.32, 0.46, 0.42]} rotation={[0, -Math.PI / 2, -Math.PI / 2]} color={color}/>
            <HeartCream position={[0.14, -2.37, -0.42]} scale={[0.32, 0.46, 0.42]} rotation={[0, -Math.PI / 2, -Math.PI / 2]} color={color}/>

            
        </>
    );
  }

  ////////////////// Heart Topping (Small , Large , regular)////////////////////



 function HeartTopHeart({ color }: { color: string }) {
  

  return (
    <>
    <Hearty position={[0, 1, 1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>    
    <Hearty position={[0, 1, -1.9]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[-0.7, 1, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[-2.2, 1, -0.2]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[0.7, 1, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[2.2, 1, -0.2]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[-1.4, 1, -1.3]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[0, 1, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[-1.6, 1, 1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[1.4, 1, -1.35]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
    <Hearty position={[1.8, 1, 0.85]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
      
    </>
  );
}
function HeartTopSmallHeart({ color }: { color: string }) {
    return(
        <>
        <Hearty position={[0, 0.2, 1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[0, 0.2, -1.9]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[-0.7, 0.2, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[-2.2, 0.2, -0.2]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[0.7, 0.2, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[2.2, 0.2, -0.2]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[-1.4, 0.2, -1.3]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[0, 0.2, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[-1.6, 0.2, 1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[1.4, 0.2, -1.35]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[1.8, 0.2, 0.85]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        </>
    )
}

function HeartTopLargHeart({ color }: { color: string }) {
  

    return (
        <>
        <Hearty position={[0, 2, 1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[0, 2, -1.9]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[-0.7, 2, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[-2.2, 2, -0.2]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[0.7, 2, 0]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[2.2, 2, -0.2]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[-1.4, 2, -1.3]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[0, 2, -0.8]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[-1.6, 2, 1]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[1.4, 2, -1.35]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
        <Hearty position={[1.8, 2, 0.85]} scale={[0.005, 0.005, 0.002]} rotation={[Math.PI / 2, 0, 0]} color={color}/>
          
        </>
    );
  }


  ////// Stars Topping (Small , Large , regular)////////////////////

  function StarTopHeart({ color }: { color: string }) {
  

    return (
      <>
      <Star position={[0, 1, 1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>    
      <Star position={[0, 1, -1.9]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[-0.7, 1, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[-2.2, 1, -0.2]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[0.7, 1, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[2.2, 1, -0.2]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[-1.4, 1, -1.3]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[0, 1, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[-1.6, 1, 1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[1.4, 1, -1.35]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
      <Star position={[1.8, 1, 0.85]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
        
      </>
    );
  }
  function StarTopSmallHeart({ color }: { color: string }) {
      return(
          <>
          <Star position={[0, 0.2, 1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[0, 0.2, -1.9]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[-0.7, 0.2, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[-2.2, 0.2, -0.2]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[0.7, 0.2, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[2.2, 0.2, -0.2]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[-1.4, 0.2, -1.3]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[0, 0.2, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[-1.6, 0.2, 1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[1.4, 0.2, -1.35]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[1.8, 0.2, 0.85]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
            
          </>
      )
  }
  
  function StarTopLargHeart({ color }: { color: string }) {
    
  
      return (
          <>
          <Star position={[0, 2, 1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[0, 2, -1.9]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[-0.7, 2, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[-2.2, 2, -0.2]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[0.7, 2, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[2.2, 2, -0.2]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[-1.4, 2, -1.3]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[0, 2, -0.8]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[-1.6, 2, 1]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[1.4, 2, -1.35]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
          <Star position={[1.8, 2, 0.85]} scale={[0.007, 0.007, 0.007]} rotation={[0, 0, 0]} color={color}/>
            
          </>
      );
    }
  


export {  HeartTopHeart, FullSmallToppingHeart, FullToppingHeart, FullMixToppingHeart ,FullBottomHeart , HeartTopSmallHeart , HeartTopLargHeart , FullToppingLargHeart , FullMixToppingLargHeart , FullSmallToppingLargHeart , FullToppingSmallHeart , FullMixToppingSmallHeart , FullSmallToppingSmallHeart , StarTopHeart , StarTopSmallHeart , StarTopLargHeart , CramelToppingHeart , CramelToppingSmallHeart , CramelToppingLargHeart };

