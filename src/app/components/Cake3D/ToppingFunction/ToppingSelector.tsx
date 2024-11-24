import React from 'react';
import {  ColumnContainer, CakeButton } from '../../../styles/CakeComponentStyles/Cake.styled';

interface ToppingSelectorProps {
  onSelectTopping: (toppingType: 'mix' | 'small' | 'full' | 'heart' ) => void;
  onSelectSide: (sideType: 'full' | 'heartSide') => void;
  onSelectBottom: (bottomType:  'bottom') => void;
}

const ToppingSelector: React.FC<ToppingSelectorProps> = ({ onSelectTopping , onSelectSide ,onSelectBottom}) => {
  return (
    
    <ColumnContainer>

    <div>
      <h3>Select The Topping:</h3>
      <CakeButton onClick={() => onSelectTopping('mix')}>Mix</CakeButton>
      <CakeButton onClick={() => onSelectTopping('small')}>Small</CakeButton>
      <CakeButton onClick={() => onSelectTopping('full')}>Full</CakeButton>
      <CakeButton onClick={() => onSelectTopping('heart')}>Heart</CakeButton>

    </div>
    <div>
      <h3>Select The Side:</h3>
      <CakeButton onClick={() => onSelectSide('heartSide')}>Hearts</CakeButton>
      
    </div>
    <div>
      <h3>Select The Bottom:</h3>
      <CakeButton onClick={() => onSelectBottom('bottom')}>Bottom</CakeButton>
      
    </div>

    </ColumnContainer>
 
    
  );
};

export default ToppingSelector;
