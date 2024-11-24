import React from 'react';
import {  ColumnContainer, CakeButton } from '../../../styles/CakeComponentStyles/Cake.styled';

interface ToppingSelectorProps {
  onSelectLayer: (toppingType: 2 | 3 | 4 ) => void;
  onSelectShape: (shapeType: 'round' | 'heart' | 'square' ) => void;
  
}

const ToppingSelector: React.FC<ToppingSelectorProps> = ({ onSelectLayer , onSelectShape}) => {
  return (
    
    <ColumnContainer>

    <div>
      <h3>Select The Layer:</h3>
      <CakeButton onClick={() => onSelectLayer(2)}>2 Layer</CakeButton>
      <CakeButton onClick={() => onSelectLayer(3)}>3 Layer</CakeButton>
      <CakeButton onClick={() => onSelectLayer(4)}>4 Layer</CakeButton>

      <h3>Select The Shape:</h3>
      <CakeButton onClick={() => onSelectShape('round')}>Round</CakeButton>
      <CakeButton onClick={() => onSelectShape('heart')}>Heart</CakeButton>
      <CakeButton onClick={() => onSelectShape('square')}>Square</CakeButton>

    </div>
    

    </ColumnContainer>
 
    
  );
};

export default ToppingSelector;
