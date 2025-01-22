import React from 'react';
import Heart from '../Heart';

interface LayerHeartProps {
  numLayers: number;
  layerColor?: string;
  fillLayerColor?: string;
}

const LayerHeart: React.FC<LayerHeartProps> = ({
  numLayers,
  layerColor = '#e8ad82',
  fillLayerColor = '#D2691E',
}) => {
  const Heartlayers = [];

  for (let i = 0; i < numLayers; i++) {
    const yOffset = i * 1; // Adjust the offset based on the height of each layer

    Heartlayers.push(
      <React.Fragment key={i}>
        <Heart
          position={[0, yOffset - 1, 0]}
          scale={[2.3, 2.3, 2.2]}
          rotation={[Math.PI / 2, 0, 0]}
          color={layerColor}
        />
        {i < numLayers - 1 && (
          <Heart
            position={[0, yOffset - 0.5, 0]}
            scale={[2.2, 2.2, 1.5]}
            rotation={[Math.PI / 2, 0, 0]}
            color={fillLayerColor}
          />
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
    </>
  );
};

const FullLayerHeart: React.FC<LayerHeartProps> = ({
  numLayers,
  layerColor = '#e8ad82',
  fillLayerColor = '#D2691E',
}) => {
  const Heartlayers = [];

  for (let i = 0; i < numLayers; i++) {
    const yOffset = i * 0.8; // Adjust the offset based on the height of each layer

    Heartlayers.push(
      <React.Fragment key={i}>
        <Heart
          position={[0, yOffset - 0.6, 0]}
          scale={[2.3, 2.3, 3.35]}
          rotation={[Math.PI / 2, 0, 0]}
          color={layerColor}
        />
        {i < numLayers - 1 && (
          <Heart
            position={[0, yOffset - 0.5, 0]}
            scale={[2.2, 2.2, 1.5]}
            rotation={[Math.PI / 2, 0, 0]}
            color={fillLayerColor}
          />
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
    </>
  );
};

export { LayerHeart, FullLayerHeart };
