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

interface DecorationSelectorProps {
  onSelectDecoration: (Decoration: string | null) => void;
  
}

const DecorationSelector: React.FC<DecorationSelectorProps> = ({ onSelectDecoration}) => {
  const [selectedDecoration, setSelectedDecoration] = useState<string | null>(null);
 
  const handleDecorationClick = (Decoration: string) => {
    const newDecoration = selectedDecoration === Decoration ? null : Decoration;
    setSelectedDecoration(newDecoration);
    onSelectDecoration(newDecoration);
  };

  


  return (
    <ColumnContainer>
      <div>
        <h3>Select The Decoration:</h3>
        <CakeButton
          onClick={() => handleDecorationClick('strawberry')}
          active={selectedDecoration === 'strawberry'}
        >
          Strawberry
        </CakeButton>
        <CakeButton
          onClick={() => handleDecorationClick('choco')}
          active={selectedDecoration === 'choco'}
        >
          Choco
        </CakeButton>
        <CakeButton
          onClick={() => handleDecorationClick('candy')}
          active={selectedDecoration === 'candy'}
        >
          Candy
        </CakeButton>
        <CakeButton
          onClick={() => handleDecorationClick('raspberry')}
          active={selectedDecoration === 'raspberry'}
        >
            Raspberry
        </CakeButton>
        <CakeButton
          onClick={() => handleDecorationClick('chocoPar')}
          active={selectedDecoration === 'chocoPar'}
        >
          ChocoPar
        </CakeButton>
        
      </div>
     
    </ColumnContainer>
  );
};

export default DecorationSelector;