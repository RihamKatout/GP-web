import React from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';
import { ColumnContainer } from '../../../styles/CakeComponentStyles/Cake.styled';
import roundIcon from '../../../../assets/cake/ButtonIcon/2layer.png';
import heartIcon from '../../../../assets/cake/ButtonIcon/heart.png';
import squareIcon from '../../../../assets/cake/ButtonIcon/square.png';
import { ColorLabel } from '../../../styles/CakeComponentStyles/ColorPicker.styled';

interface ToppingSelectorProps {
  onSelectLayer: (toppingType: 2 | 3 | 4) => void;
  onSelectShape: (shapeType: 'round' | 'heart' | 'square') => void;
}

// Styled Components
const ResponsiveColumnContainer = styled(ColumnContainer)`
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
  }
`;

const ButtonScrollContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  //margin: 5px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-height: 100px; /* Allow buttons to scroll vertically */
    overflow-y: auto;
    width: 100%;
    padding: 10px;
    padding-bottom: 30px;
  }
`;

const ShapeButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-height: 100px; /* Allow shape buttons to scroll vertically */
    overflow-y: auto;
    width: 100%;
    padding: 10px;
    padding-bottom: 30px;
  }
`;
const CakeButton = styled.button`
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primary_dark};
  width: 7.3rem;
  height: 4.6rem;
  border: 1px solid rgba(217, 217, 217, 0.5);
  border-radius: 15px;
  text-align: center;
  transition: all 0.6s ease;
  font-weight: bold;
  font-size: 1rem;
  font-family: 'Overlock', sans-serif;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
    0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
    0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

  &:hover {
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.028) inset;
  }

  @media (max-width: 600px) {
    width: 40%; /* Full width for smaller screens */
    height: 4.3rem; /* Adjust height */
    font-size: 0.9rem; /* Adjust font size */
  }
`;


// JSX
const ToppingSelector: React.FC<ToppingSelectorProps> = ({ onSelectLayer, onSelectShape }) => {
  return (
    <ResponsiveColumnContainer>
      <Divider style={{ borderColor: '#1a1a19b3' }}>
        <ColorLabel style={{ marginTop:"10px"}}>Select The Layer:</ColorLabel>
      </Divider>
      <ButtonScrollContainer>
        <CakeButton onClick={() => onSelectLayer(2)}>2 Layer</CakeButton>
        <CakeButton onClick={() => onSelectLayer(3)}>3 Layer</CakeButton>
        <CakeButton onClick={() => onSelectLayer(4)}>4 Layer</CakeButton>
      </ButtonScrollContainer>

      <Divider style={{ borderColor: '#1a1a19b3' }}>
        <ColorLabel>Select The Shape:</ColorLabel>
      </Divider>
      <ShapeButtonContainer>
        <CakeButton onClick={() => onSelectShape('round')}>
          <img
            src={roundIcon}
            alt="Round"
            style={{ width: '60px', height: '60px', marginBottom: '8px' }}
          />
          <div style={{ textAlign: 'center' }}>Round</div>
        </CakeButton>
        <CakeButton onClick={() => onSelectShape('heart')}>
          <img
            src={heartIcon}
            alt="Heart"
            style={{ width: '60px', height: '60px', marginBottom: '8px' }}
          />
          <div style={{ textAlign: 'center' }}>Heart</div>
        </CakeButton>
        <CakeButton onClick={() => onSelectShape('square')}>
          <img
            src={squareIcon}
            alt="Square"
            style={{ width: '60px', height: '60px', marginBottom: '8px' }}
          />
          <div style={{ textAlign: 'center' }}>Square</div>
        </CakeButton>
      </ShapeButtonContainer>
    </ResponsiveColumnContainer>
  );
};

export default ToppingSelector;
