import React from 'react';
import Heart from '../Heart';

interface LayarHeartProps {
  numLayers: number;
}

const LayerHeart: React.FC<LayarHeartProps> = ({ numLayers }) => {
  const Heartlayers = [];
  const layerColor =  '#e8ad82';
  const fillLayerColor = '#D2691E';

  for (let i = 0; i < numLayers; i++) {
    const yOffset = i * 1; // Adjust the offset based on the height of each layer

    Heartlayers.push(
      <React.Fragment key={i}>
        <Heart position={[0, yOffset - 1, 0]} scale={[2.3, 2.3, 2.2]} rotation={[Math.PI / 2, 0, 0]} color={layerColor}/>
        {i < numLayers - 1 && (
          <Heart position={[0, yOffset - 0.5, 0]} scale={[2.2, 2.2, 1.5]} rotation={[Math.PI / 2, 0, 0]}  color={fillLayerColor}/>
        )}
      </React.Fragment>
    );
  }

  return (
  <>
     {Heartlayers}
      <mesh position={[0, -1.8, 0]}>
        <cylinderGeometry args={[3, 2.7, 0.2, 35]} />
        <meshStandardMaterial color="#eadcc9" />
      </mesh>
  </>);
};

export default LayerHeart;