import Choco from "../../3D-component/Choco";
import ChocoPar from "../../3D-component/ChocoPar";
import Rose from "../../3D-component/Flawer/Rose";
import Rose2 from "../../3D-component/Flawer/Rose2";
import Rose3 from "../../3D-component/Flawer/Rose3";
import Raspberry from "../../3D-component/Raspberry";

////Choco Decoration
function ChocoDecoration() {
    return (
      <>
      <Choco position={[0.9 ,0.6 , 0.5]} color='#3f1616' scale={[0.013, 0.013, 0.013]} rotation={[-0.5,0, 0]}/>
      <Choco position={[0.5 ,0.5 , 0.8]} color='#3f1616' scale={[0.013, 0.013, 0.013]} rotation={[-0.5,0, 0]}/>
  
      </>
      
      
    );
  }

  function ChocoRegularDecoration() {
    return (
      <>
      <Choco position={[0.9 ,1.6 , 0.5]} color='#3f1616' scale={[0.013, 0.013, 0.013]} rotation={[-0.5,0, 0]}/>
      <Choco position={[0.5 ,1.5 , 0.8]} color='#3f1616' scale={[0.013, 0.013, 0.013]} rotation={[-0.5,0, 0]}/>
  
      </>
      
      
    );
  }
 
  function ChocoLargeDecoration() {
    return (
      <>
      <Choco position={[0.9 ,2.6 , 0.5]} color='#3f1616' scale={[0.013, 0.013, 0.013]} rotation={[-0.5,0, 0]}/>
      <Choco position={[0.5 ,2.5 , 0.8]} color='#3f1616' scale={[0.013, 0.013, 0.013]} rotation={[-0.5,0, 0]}/>
  
      </>
      
      
    );
  }


///ChoconPar Decoration
  function ChocoParDecoration() {
    return (
        <>
         <ChocoPar position={[0 , 0.2 , 0]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[Math.PI /4, Math.PI /1, 0]} />
         <ChocoPar position={[-0.2 , 0.2 , 0.2]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[-Math.PI /5, Math.PI /2.5, 0]} />

        </>
        
    );

}

function ChocoParRegularDecoration() {
    return (
        <>
         <ChocoPar position={[0 , 1.1 , 0]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[Math.PI /4, Math.PI /1, 0]} />
         <ChocoPar position={[-0.2 , 1.2 , 0.2]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[-Math.PI /5, Math.PI /2.5, 0]} />

        </>
        
    );

}

function ChocoParLargeDecoration() {
    return (
        <>
         <ChocoPar position={[0 , 2.1 , 0]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[Math.PI /4, Math.PI /1, 0]} />
         <ChocoPar position={[-0.2 , 2.2 , 0.2]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[-Math.PI /5, Math.PI /2.5, 0]} />

        </>
        
    );

}


//////Rose Decoration

function RoseDecoration() {
    return(
        <>
          <Rose position={[-0.6 , 0.45 , -0.1]} color='#c765ee' scale={[0.025, 0.025, 0.025]}  rotation={[-0.8, 0, -Math.PI /3]} />
            <Rose2 position={[0.3 , 0.58 , -0.5]} color='#fd543a' scale={[0.015, 0.015, 0.015]}  rotation={[-Math.PI /2, 0, 0]} />
            <Rose3 position={[0.5 , 0.68 , 0.5]} color='#a7301e' scale={[0.009, 0.009, 0.009]}  rotation={[-Math.PI /2, 0, 0]} />


        </>
    );
}
function RoseRegularDecoration() {
    return(
        <>
          <Rose position={[-0.6 , 1.45 , -0.1]} color='#c765ee' scale={[0.025, 0.025, 0.025]}  rotation={[-0.8, 0, -Math.PI /3]} />
            <Rose2 position={[0.3 , 1.61 , -0.5]} color='#fd543a' scale={[0.015, 0.015, 0.015]}  rotation={[-Math.PI /2, 0, 0]} />
            <Rose3 position={[0.5 , 1.69 , 0.5]} color='#a7301e' scale={[0.009, 0.009, 0.009]}  rotation={[-Math.PI /2, 0, 0]} />


        </>
    );
}

function RoseLargeDecoration() {
    return(
        <>
          <Rose position={[-0.6 , 2.45 , -0.1]} color='#c765ee' scale={[0.025, 0.025, 0.025]}  rotation={[-0.8, 0, -Math.PI /3]} />
            <Rose2 position={[0.3 , 2.61 , -0.5]} color='#fd543a' scale={[0.015, 0.015, 0.015]}  rotation={[-Math.PI /2, 0, 0]} />
            <Rose3 position={[0.5 , 2.69 , 0.5]} color='#a7301e' scale={[0.009, 0.009, 0.009]}  rotation={[-Math.PI /2, 0, 0]} />


        </>
    );
}


/// Raspberry Decoration 
function RaspberryDecoration(){
    return(
       <>
        <Raspberry position={[-1, 0.68, 0]} scale={[0.2, 0.2, 0.2]} color='#0C0038' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1, 0.93, 0.5]} scale={[0.2, 0.2, 0.2]} color='#D4294A' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.3, 0.12, 0.3]} scale={[0.2, 0.2, 0.2]} color='#D4294A' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}

function RaspberryRegularDecoration(){
    return(
       <>
        <Raspberry position={[-1,1.7, 0]} scale={[0.2, 0.2, 0.2]} color='#0C0038' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1, 1.98, 0.5]} scale={[0.2, 0.2, 0.2]} color='#D4294A' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.3, 1.12, 0.3]} scale={[0.2, 0.2, 0.2]} color='#D4294A' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}

function RaspberryLargeDecoration(){
    return(
       <>
        <Raspberry position={[-1,2.7, 0]} scale={[0.2, 0.2, 0.2]} color='#0C0038' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1, 2.98, 0.5]} scale={[0.2, 0.2, 0.2]} color='#D4294A' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.3, 2.12, 0.3]} scale={[0.2, 0.2, 0.2]} color='#D4294A' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}




  export {ChocoDecoration , ChocoParDecoration, ChocoParRegularDecoration, ChocoParLargeDecoration , RoseDecoration , RaspberryDecoration, RaspberryRegularDecoration, RaspberryLargeDecoration , RoseRegularDecoration , RoseLargeDecoration , ChocoRegularDecoration, ChocoLargeDecoration};