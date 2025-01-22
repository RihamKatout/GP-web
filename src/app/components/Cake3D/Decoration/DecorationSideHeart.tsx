

import ChocoPar from "../../3D-component/ChocoPar";
import Raspberry from "../../3D-component/Raspberry";




///ChocoPar Decoration for Heart 
function ChocoParDecorationHeart() {
    return (
        <>
         <ChocoPar position={[0 , -0.15 , -0.4]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[Math.PI /4, Math.PI /1, 0]} />
         <ChocoPar position={[-0.35 , -0.1 , -0.1]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[-Math.PI /5, Math.PI /2.5, 0]} />

        </>
        
    );

}

function ChocoParRegularDecorationHeart() {
    return (
        <>
         <ChocoPar position={[0 , 0.8 , -0.4]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[Math.PI /4, Math.PI /1, 0]} />
         <ChocoPar position={[-0.35 , 0.9 , -0.2]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[-Math.PI /5, Math.PI /2.5, 0]} />

        </>
        
    );

}

function ChocoParLargeDecorationHeart() {
    return (
        <>
         <ChocoPar position={[0 , 1.8 , -0.4]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[Math.PI /4, Math.PI /1, 0]} />
         <ChocoPar position={[-0.35 , 1.9 , -0.3]} color='#3f1616' scale={[0.3, 0.3, 0.3]} rotation={[-Math.PI /5, Math.PI /2.5, 0]} />

        </>
        
    );

}


/// Raspberry Decoration for Heart
 
function RaspberryDecorationHeart(){
    return(
       <>
        <Raspberry position={[-1.1,0.35, -0.3]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1.1, 0.6, 0.15]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.4, -0.25, 0]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}

function RaspberryRegularDecorationHeart(){
    return(
       <>
        <Raspberry position={[-1.1,1.15, -0.3]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1.1, 1.4, 0.15]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.4, 0.6, 0]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}

function RaspberryLargeDecorationHeart(){
    return(
       <>
        <Raspberry position={[-1.1,2.15, -0.2]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[Math.PI / 4, 0, 0]} />
         <Raspberry position={[-1.1, 2.4, 0.25]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[-Math.PI / 4, 0, 0]} />
         <Raspberry position={[-0.4, 1.6, 0]} scale={[0.2, 0.2, 0.2]} color='red' rotation={[0, 0, Math.PI / 4]} />

       </>
    )
}

export { ChocoParDecorationHeart, ChocoParRegularDecorationHeart, ChocoParLargeDecorationHeart , RaspberryDecorationHeart, RaspberryRegularDecorationHeart, RaspberryLargeDecorationHeart};