import Choco from '../../3D-component/Choco';

import Strawberry from '../../3D-component/Strawberry'
import Candy from '../../3D-component/Candy';
import ChocoPar from '../../3D-component/ChocoPar';
import Raspberry from '../../3D-component/Raspberry';


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


///// Strawberry Decoration for diff Topping
function StrawberryDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 1.1 , 0.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 1.1 , 0.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 1.1 , -0.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 1.1 ,- 0.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 1.1 , 1.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 1.1 , -1.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 1.1 , -1.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 1.1 , 1.7]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 1.1 , 1.8]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 1.1 , -1.8]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 1.1 , 0]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 1.1 ,0]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 1.1 , 1.3]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 1.1 , -1.3]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 1.1 , 1.3]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 1.1 ,-1.3]} color='#FF0000' scale={[11, 11, 11]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}
function StrawberryDripDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 0.9 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 0.9 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 0.9 , -0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 0.9 ,- 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 0.9 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 0.9 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 0.9 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 0.9 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 0.9 , 1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 0.9 , -1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 0.9 , 0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 0.9 ,0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 0.9 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 0.9 , -1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 0.9 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 0.9 ,-1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}

function StrawberryHeartDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 0.75 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 0.75 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 0.75 , -0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 0.75 ,- 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 0.75 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 0.75 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 0.75 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 0.75 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 0.75 , 1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 0.75 , -1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 0.75 , 0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 0.75 ,0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 0.75 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 0.75 , -1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 0.75 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 0.75 ,-1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}
///for regular

function StrawberryRegularDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 2.1 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 2.1 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 2.1 , -0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 2.1 ,- 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 2.1 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 2.1 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 2.1 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 2.1 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 2.1 , 1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 2.1 , -1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 2.1 , 0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 2.1 ,0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 2.1 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 2.1 , -1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 2.1 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 2.1 ,-1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}

function StrawberryRegularDripDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 1.9 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 1.9 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 1.9 , -0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 1.9 ,- 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 1.9 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 1.9 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 1.9 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 1.9 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 1.9 , 1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 1.9 , -1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 1.9 , 0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 1.9 ,0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 1.9 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 1.9 , -1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 1.9 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 1.9 ,-1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}


function StrawberryRegularHeartDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 2 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 2 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 2 , -0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 2 ,- 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 2 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 2 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 2 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 2 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 2 , 1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 2 , -1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 2 , 0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 2 ,0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 2 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 2 , -1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 2 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 2 ,-1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}


///For Large 



function StrawberryLargeDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 3.1 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 3.1 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 3.1 , -0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 3.1 ,- 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 3.1 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 3.1 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 3.1 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 3.1 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 3.1 , 1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 3.1 , -1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 3.1 , 0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 3.1 ,0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 3.1 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 3.1 , -1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 3.1 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 3.1 ,-1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}

function StrawberryLargeDripDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 2.9 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 2.9 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 2.9 , -0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 2.9 ,- 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 2.9 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 2.9 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 2.9 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 2.9 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 2.9 , 1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 2.9 , -1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 2.9 , 0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 2.9 ,0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 2.9 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 2.9 , -1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 2.9 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 2.9 ,-1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}


function StrawberryLargeHeartDecoration() {
    return(
        <>
            <Strawberry position={[-1.7 , 2.8 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 2.8 , 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.7 , 2.8 , -0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.7 , 2.8 ,- 0.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[-0.7 , 2.8 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 2.8, -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-0.7 , 2.8 , -1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0.7 , 2.8 , 1.7]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />

            <Strawberry position={[0 , 2.8 , 1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[0 , 2.8 , -1.8]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.8, 2.8 , 0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.8 , 2.8 ,0]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
             
            <Strawberry position={[1.3, 2.8 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[1.3 , 2.8 , -1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3, 2.8 , 1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
            <Strawberry position={[-1.3 , 2.8 ,-1.3]} color='#FF0000' scale={[12, 12, 12]}  rotation={[Math.PI /2, 0, 0]} />
 
        </>
    );
}


///// End of Strawberry Decoration for diff Topping


function CandyDecoration (){
    return(
        <Candy position={[1.3 , 0.45 , 0.85]} color='#FF0000' scale={[0.00008, 0.00008, 0.00008]} rotation={[0, Math.PI /2, 0]}/>
    );
}


/// Raspberry Decoration 
function RaspberryDecoration(){
    return(
       <>
        <Raspberry position={[-1, 0.68, 0]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1, 0.93, 0.5]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.3, 0.12, 0.3]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}

function RaspberryRegularDecoration(){
    return(
       <>
        <Raspberry position={[-1,1.7, 0]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1, 1.98, 0.5]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.3, 1.12, 0.3]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}

function RaspberryLargeDecoration(){
    return(
       <>
        <Raspberry position={[-1,2.7, 0]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1, 2.98, 0.5]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.3, 2.12, 0.3]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}

export {ChocoDecoration , ChocoParDecoration , StrawberryDecoration , CandyDecoration , RaspberryDecoration , StrawberryDripDecoration , StrawberryHeartDecoration , StrawberryRegularDecoration , StrawberryRegularDripDecoration , StrawberryRegularHeartDecoration , StrawberryLargeDecoration , StrawberryLargeDripDecoration , StrawberryLargeHeartDecoration , RaspberryRegularDecoration ,RaspberryLargeDecoration , ChocoParLargeDecoration , ChocoParRegularDecoration};