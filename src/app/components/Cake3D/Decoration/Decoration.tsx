import Choco from '../../../3D-component/Choco';

import Strawberry from '../../../3D-component/Strawberry'
import Candy from '../../../3D-component/Candy';
import ChocoPar from '../../../3D-component/ChocoPar';
import Raspberry from '../../../3D-component/Raspberry';


function ChocoDecoration() {
  return (
    <Choco position={[1.3 , 1.065 , 1.25]} color='#FF0000' scale={[0.0002, 0.0003, 0.0002]} rotation={[0,2, 0]}/>
  );
}

function ChocoParDecoration() {
    return (
        <>
         <ChocoPar position={[0 , 0.2 , 0]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[Math.PI /4, Math.PI /1, 0]} />
         <ChocoPar position={[-0.2 , 0.2 , 0.2]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[-Math.PI /5, Math.PI /2.5, 0]} />

        </>
        
    );

}

function StrawberryDecoration() {
    return(
        <>
            <Strawberry key="strawberry-1" position={[-1.7 , 1.1 , 0.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-2" position={[1.7 , 1.1 , 0.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-3" position={[-1.7 , 1.1 , -0.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-4" position={[1.7 , 1.1 ,- 0.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry key="strawberry-1" position={[-0.7 , 1.1 , 1.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-2" position={[0.7 , 1.1 , -1.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-3" position={[-0.7 , 1.1 , -1.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-4" position={[0.7 , 1.1 , 1.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry key="strawberry-1" position={[0 , 1.1 , 1.8]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-2" position={[0 , 1.1 , -1.8]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-3" position={[1.8, 1.1 , 0]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-4" position={[-1.8 , 1.1 ,0]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry key="strawberry-1" position={[1.3, 1.1 , 1.3]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-2" position={[1.3 , 1.1 , -1.3]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-3" position={[-1.3, 1.1 , 1.3]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry key="strawberry-4" position={[-1.3 , 1.1 ,-1.3]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}

function CandyDecoration (){
    return(
        <Candy position={[1.3 , 0.45 , 0.85]} color='#FF0000' scale={[0.00008, 0.00008, 0.00008]} rotation={[0, Math.PI /2, 0]}/>
    );
}

function RaspberryDecoration(){
    return(
       <>
        <Raspberry position={[-1, 0.85, 0]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1, 1.1, 0.5]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.3, 0.3, 0.3]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}


export {ChocoDecoration , ChocoParDecoration , StrawberryDecoration , CandyDecoration , RaspberryDecoration};