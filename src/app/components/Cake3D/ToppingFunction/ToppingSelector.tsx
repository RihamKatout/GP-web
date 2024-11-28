import React, { useState } from 'react';
import styled from 'styled-components';
import {ColumnContainer} from '../../../styles/CakeComponentStyles/Cake.styled';
// Define the CakeButton component
const CakeButton = styled.button<{ active: boolean }>`
  background-color: ${props => (props.active ? props.theme.colors.secondary : '#ffffff' )};
  color: #141313;
  width: 8.5em;
  height: 2.9em;
  border: ${({theme}) => theme.colors.secondary} 0.2em solid;
  border-radius: 11px;
  text-align: center;
  transition: all 0.6s ease;
  margin-top: 10px;

  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
    cursor: pointer;
  }
`;

interface ToppingSelectorProps {
  onSelectTopping: (topping: string | null) => void;
  onSelectSide: (side: string | null) => void;
  onSelectBottom: (bottom: string | null) => void;
}

const ToppingSelector: React.FC<ToppingSelectorProps> = ({ onSelectTopping, onSelectSide, onSelectBottom }) => {
  const [selectedTopping, setSelectedTopping] = useState<string | null>(null);
  const [selectedSide, setSelectedSide] = useState<string | null>(null);
  const [selectedBottom, setSelectedBottom] = useState<string | null>(null);

  const handleToppingClick = (topping: string) => {
    const newTopping = selectedTopping === topping ? null : topping;
    setSelectedTopping(newTopping);
    onSelectTopping(newTopping);
  };

  const handleSideClick = (side: string) => {
    const newSide = selectedSide === side ? null : side;
    setSelectedSide(newSide);
    onSelectSide(newSide);
  };

  const handleBottomClick = (bottom: string) => {
    const newBottom = selectedBottom === bottom ? null : bottom;
    setSelectedBottom(newBottom);
    onSelectBottom(newBottom);
  };

  return (
    <ColumnContainer>
      <div>
        <h3>Select The Topping:</h3>
        <CakeButton
          onClick={() => handleToppingClick('mix')}
          active={selectedTopping === 'mix'}
        >
          Small
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('small')}
          active={selectedTopping === 'small'}
        >
          Dripy
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('full')}
          active={selectedTopping === 'full'}
        >
          Big
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('heart')}
          active={selectedTopping === 'heart'}
        >
          Heart
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('star')}
          active={selectedTopping === 'star'}
        >
          Star
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('cramel')}
          active={selectedTopping === 'cramel'}
        >
          Cramel
        </CakeButton>
      </div>
      <div>
        <h3>Select The Side:</h3>
        <CakeButton
          onClick={() => handleSideClick('heartSide')}
          active={selectedSide === 'heartSide'}
        >
          Hearts
        </CakeButton>
        <CakeButton
          onClick={() => handleSideClick('starSide')}
          active={selectedSide === 'starSide'}
        >
          Stars
        </CakeButton>
      </div>
      <div>
        <h3>Select The Bottom:</h3>
        <CakeButton
          onClick={() => handleBottomClick('bottom')}
          active={selectedBottom === 'bottom'}
        >
          Bottom
        </CakeButton>
      </div>
    </ColumnContainer>
  );
};

export default ToppingSelector;