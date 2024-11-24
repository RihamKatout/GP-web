import React from 'react'

interface LayerSquareProps {
    numLayers: number;
  }

const LayerSquare :React.FC<LayerSquareProps> = ({ numLayers }) => {
    const layers = [];

    for (let i = 0; i < numLayers; i++) {
      const yOffset = i * 1; // Adjust the offset based on the height of each layer
  
      layers.push(
        <React.Fragment key={i}>
          
          <mesh position={[0, yOffset - 1, 0]}>
            <cylinderGeometry args={[2.3, 2.3, 0.72, 4, 10]} />
            <meshLambertMaterial color="#e8ad82"  />
          </mesh>
          {i < numLayers - 1 && (
            <mesh position={[0, yOffset - 0.5, 0]}>
              <cylinderGeometry args={[2.2, 2.2, 0.23, 4, 10]} />
              <meshStandardMaterial color="#D2691E" roughness={0.5} metalness={0.6} />
            </mesh>
          )}
        </React.Fragment>
      );
    }
  
    return (
      <>
        {layers}
        <mesh position={[0, -1.8, 0]}>
          <cylinderGeometry args={[2.8, 2.5, 0.2, 35]} />
          <meshStandardMaterial color="#eadcc9" />
        </mesh>
      </>
    );
}

export default LayerSquare
