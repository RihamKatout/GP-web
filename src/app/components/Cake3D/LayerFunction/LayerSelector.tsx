import React from 'react';
import { ColumnContainer, CakeButton } from '../../../styles/CakeComponentStyles/Cake.styled';
import roundIcon from '../../../../assets/cake/ButtonIcon/2layer.png';
import heartIcon from '../../../../assets/cake/ButtonIcon/heart.png';
import squareIcon from '../../../../assets/cake/ButtonIcon/square.png';
import { Divider } from 'antd';
import { ColorLabel } from '../../../styles/CakeComponentStyles/ColorPicker.styled';

interface ToppingSelectorProps {
  onSelectLayer: (toppingType: 2 | 3 | 4) => void;
  onSelectShape: (shapeType: 'round' | 'heart' | 'square') => void;
}

const ToppingSelector: React.FC<ToppingSelectorProps> = ({ onSelectLayer, onSelectShape }) => {
  return (
    <ColumnContainer>
     
       <div style={{ width: '100%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Select The Layer:</ColorLabel>
        </Divider>
        </div>
      <div style={{ width: '100%' }}>
        <CakeButton onClick={() => onSelectLayer(2)} style={{marginRight: '10px' , marginLeft: '10px', marginBottom: '10px'}}>
          
          2 Layer
        </CakeButton>
        <CakeButton onClick={() => onSelectLayer(3)} style={{ marginRight: '10px' , marginLeft: '10px' }}>
          
          3 Layer
        </CakeButton>
        <CakeButton onClick={() => onSelectLayer(4)} style={{ marginRight: '10px' , marginLeft: '10px'}}>
          
          4 Layer
        </CakeButton>
      </div>
      <div>
        <div style={{ width: '100%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Select The Shap:</ColorLabel>
        </Divider>
        </div>
        
        <CakeButton onClick={() => onSelectShape('round')} style={{ marginRight: '10px', marginLeft: '10px'}}>
          <img
            src={roundIcon}
            alt="Round"
            style={{ width: '60px', height: '60px', marginRight: '8px', marginBottom: '8px' }}
          />
          <div style={{marginTop: '5px' , textAlign: 'center' }}>Round</div>
        </CakeButton>
        
        <CakeButton onClick={() => onSelectShape('heart')} style={{ marginRight: '10px', marginLeft: '10px'}}>
          <img
            src={heartIcon}
            alt="Heart"
            style={{ width: '60px', height: '60px', marginRight: '8px', marginBottom: '8px'  }}
          />
          <div style={{marginTop: '5px' , textAlign: 'center' }}>Heart</div>
        </CakeButton>
        <CakeButton onClick={() => onSelectShape('square')} style={{ marginRight: '10px', marginLeft: '10px'}}>
          <img
            src={squareIcon}
            alt="Square"
            style={{ width: '60px', height: '60px', marginRight: '8px' , marginBottom: '8px' }}
          />
          <div style={{marginTop: '5px' , textAlign: 'center' }}>Square</div>
          
        </CakeButton>
        </div>
    </ColumnContainer>
  );
};

export default ToppingSelector;
