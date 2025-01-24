import React, { useState } from 'react';
import styled from 'styled-components';
import {ColumnContainer} from '../../../styles/CakeComponentStyles/Cake.styled';
// Define the CakeButton component

import { Divider } from 'antd';
import { ColorLabel } from '../../../styles/CakeComponentStyles/ColorPicker.styled';

import strawberry from '../../../../assets/cake/ToppingIcon/Decoration/strawberry.png'
import cherry from '../../../../assets/cake/ToppingIcon/Decoration/cherry.png'
import choco from '../../../../assets/cake/ToppingIcon/Decoration/choco.png'
import chocopar from '../../../../assets/cake/ToppingIcon/Decoration/chocopar.png'
import raspbery from '../../../../assets/cake/ToppingIcon/Decoration/raspberry.png'
import rose from '../../../../assets/cake/ToppingIcon/Decoration/rose.png'

// Define the CakeButton component
const CakeButton = styled.button<{ active: boolean }>`
   background-color: #ffffff;
  color: ${({theme}) => theme.colors.primary_dark};
  width: 7.5em;
  height: 5.5em;
  border:  1px solid rgba(217, 217, 217, 0.5);
  border-radius: 15px;
  text-align: center;
  transition: all 0.6s ease;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 1.1rem;
  font-family: 'Overlock', sans-serif;
  &:hover {
    
    transform: scale(1.05);
    cursor: pointer;
  }background-color: ${({ theme }) => theme.colors.wight}; 
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

  &:hover {
    //background-color: ${({ theme }) => theme.colors.secondary}; 
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.028) inset;
  }

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    margin-top: 5px;
  }
  
  @media (max-width: 600px) {
    width: 40%; /* Full width for smaller screens */
    height: 4.3rem; /* Adjust height */
    font-size: 0.9rem; /* Adjust font size */
    img {
    width: 55px;
    height: 55px;
    margin-right: 8px;
    margin-top: 5px;
  }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  // Small screen styles
  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons vertically */
    height: 100px; /* Set a fixed height */
    padding: 10px;
    padding-bottom: 35px;
    overflow-y: auto; /* Enable scrolling for overflow content */
  }
`;

interface DecorationSelectorProps {
  onSelectDecoration: (Decoration: string | null) => void;
  onSelectMidDecoration: (Decoration: string | null) => void;

  
}

const DecorationSelector: React.FC<DecorationSelectorProps> = ({ onSelectDecoration , onSelectMidDecoration}) => {
  const [selectedDecoration, setSelectedDecoration] = useState<string | null>(null);
 
  const handleDecorationClick = (Decoration: string) => {
    const newDecoration = selectedDecoration === Decoration ? null : Decoration;
    setSelectedDecoration(newDecoration);
    onSelectDecoration(newDecoration);
  };

  const handleMidDecorationClick = (Decoration: string) => {
    const newDecoration = selectedDecoration === Decoration ? null : Decoration;
    setSelectedDecoration(newDecoration);
    onSelectMidDecoration(newDecoration);
  }


  return (
    <ColumnContainer>
      <div style={{ width: '100%' , margin: '0 auto' , justifyContent: 'center' , alignItems: 'center' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
                <Divider style={{ borderColor: '#1a1a19b3' }}>
                  <ColorLabel style={{ marginTop:"10px"}}>Select The Decoration:</ColorLabel>
                </Divider>
               </div>
        <CakeButton
          onClick={() => handleDecorationClick('strawberry')}
          active={selectedDecoration === 'strawberry'}
        >
        <img src={strawberry}  />
        <div style={{marginTop: '8px' , textAlign: 'center' }}>Strawberry</div>
        </CakeButton>
        
        <CakeButton
          onClick={() => handleDecorationClick('cherry')}
          active={selectedDecoration === 'cherry'}
        >
          <img src={cherry}  />
          <div style={{marginTop: '8px' , textAlign: 'center' }}>Cherry</div>
        </CakeButton>
        
        
        
      </div>
      <div>
        <div style={{ width: '100%', margin: '0 auto' }}>
                <Divider style={{ borderColor: '#1a1a19b3' }}>
                  <ColorLabel>Select The Mid Decoration:</ColorLabel>
                </Divider>
         </div>
      <ButtonContainer>   
        <CakeButton
          onClick={() => handleMidDecorationClick('choco')}
          active={selectedDecoration === 'choco'}
         >
          <img src={choco}  />
          <div style={{marginTop: '8px' , textAlign: 'center' }}>Choco</div>
        </CakeButton>
        <CakeButton
          onClick={() => handleMidDecorationClick('raspberry')}
          active={selectedDecoration === 'raspberry'}
        >
          <img src={raspbery}  />
          <div style={{marginTop: '8px' , textAlign: 'center' }}>Raspberry</div>
        </CakeButton>
        <CakeButton
          onClick={() => handleMidDecorationClick('chocoPar')}
          active={selectedDecoration === 'chocoPar'}
        >
          <img src={chocopar}  />
          <div style={{marginTop: '8px' , textAlign: 'center' }}>ChocoPar</div>
        </CakeButton>
        <CakeButton
          onClick={() => handleMidDecorationClick('rose')}
          active={selectedDecoration === 'rose'}
        >
          <img src={rose}  />
          <div style={{marginTop: '8px' , textAlign: 'center' }}>Rose</div>
        </CakeButton>
       </ButtonContainer> 
      </div>
     
    </ColumnContainer>
  );
};

export default DecorationSelector;