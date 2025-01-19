import React, { useState } from 'react';
import styled from 'styled-components';
import { ColumnContainer } from '../../../styles/CakeComponentStyles/Cake.styled';
////////Round Topping////////
import bottom from '../../../../assets/cake/ToppingIcon/RoundTopping/bottom.png';
import SmallIcon from '../../../../assets/cake/ToppingIcon/RoundTopping/small.png';
import mix from '../../../../assets/cake/ToppingIcon/RoundTopping/mix.png';
import big from '../../../../assets/cake/ToppingIcon/RoundTopping/big.png';
import heart from '../../../../assets/cake/ToppingIcon/RoundTopping/heart.png';
import star from '../../../../assets/cake/ToppingIcon/RoundTopping/star.png';
import cramel from '../../../../assets/cake/ToppingIcon/RoundTopping/cramel.png';
import heartSide from '../../../../assets/cake/ToppingIcon/RoundTopping/heartSide.png';
import starSide from '../../../../assets/cake/ToppingIcon/RoundTopping/starSide.png';
////////Heart Topping////////
import Heartmix from '../../../../assets/cake/ToppingIcon/HeartTopping/mix.png';
import Heartsmall from '../../../../assets/cake/ToppingIcon/HeartTopping/small.png';
import Heartbig from '../../../../assets/cake/ToppingIcon/HeartTopping/big.png';
import Heartheart from '../../../../assets/cake/ToppingIcon/HeartTopping/heart.png';
import Heartstar from '../../../../assets/cake/ToppingIcon/HeartTopping/star.png';
import Heartcramel from '../../../../assets/cake/ToppingIcon/HeartTopping/cramel.png';
import Heartbottom from '../../../../assets/cake/ToppingIcon/HeartTopping/bottom.png';
////////Square Topping////////
import Squarebottom from '../../../../assets/cake/ToppingIcon/SquareTopping/bottom.png';
import Squaresmall from '../../../../assets/cake/ToppingIcon/SquareTopping/small.png';
import Squaremix from '../../../../assets/cake/ToppingIcon/SquareTopping/mix.png';
import Squarebig from '../../../../assets/cake/ToppingIcon/SquareTopping/big.png';
import Squareheart from '../../../../assets/cake/ToppingIcon/SquareTopping/heart.png';
import Squarestar from '../../../../assets/cake/ToppingIcon/SquareTopping/star.png';
import Squarecramel from '../../../../assets/cake/ToppingIcon/SquareTopping/cramel.png';
import SquareheartSide from '../../../../assets/cake/ToppingIcon/SquareTopping/heartSide.png';
import SquarestarSide from '../../../../assets/cake/ToppingIcon/SquareTopping/starSide.png';

import { Divider } from 'antd';
import { ColorLabel } from '../../../styles/CakeComponentStyles/ColorPicker.styled';

// Define the CakeButton component
const CakeButton = styled.button<{ active: boolean }>`
   background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primary_dark};
  width: 7.5em;
  height: 4.3em;
  border:  2px solid rgba(217, 217, 217, 0.5);
  border-radius: 15px;
  text-align: center;
  transition: all 0.6s ease;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 10px;
  &:hover {
    //background-color: ${({theme}) => theme.colors.secondary};
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
    height: 60px;
    margin-right: 8px;
  }
`;

interface ToppingSelectorProps {
  onSelectTopping: (topping: string | null) => void;
  onSelectSide: (side: string | null) => void;
  onSelectBottom: (bottom: string | null) => void;
}

const ToppingSelector: React.FC<ToppingSelectorProps> = ({
  onSelectTopping,
  onSelectSide,
  onSelectBottom,
}) => {
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
    <ColumnContainer style={{display: 'flex' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ width: '100%' , margin: '0 auto' , justifyContent: 'center' , alignItems: 'center' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Select The Topping:</ColorLabel>
        </Divider>
       </div>
        <CakeButton
          onClick={() => handleToppingClick('mix')}
          active={selectedTopping === 'mix'}
        >
          <img src={SmallIcon} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Mix</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('small')}
          active={selectedTopping === 'small'}
        >
          <img src={mix}  />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Small</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('full')}
          active={selectedTopping === 'full'}
        >
          <img src={big} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Full</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('heart')}
          active={selectedTopping === 'heart'}
        >
          <img src={heart} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Heart</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('star')}
          active={selectedTopping === 'star'}
        >
          <img src={star} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Star</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('cramel')}
          active={selectedTopping === 'cramel'}
        >
          <img src={cramel} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Cramel</div> */}
        </CakeButton>
      </div>

      <div style={{ width: '100%' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <Divider style={{ borderColor: '#1a1a19b3' }}>
            <ColorLabel>Select The Side:</ColorLabel>
          </Divider>
        </div>
        <CakeButton
          onClick={() => handleSideClick('heartSide')}
          active={selectedSide === 'heartSide'}
        >
          <img src={heartSide} style={{ height: '50px' }} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Heart Side</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleSideClick('starSide')}
          active={selectedSide === 'starSide'}
        >
          <img src={starSide} style={{ height: '50px' }}/>
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Star Side</div> */}
        </CakeButton>
      </div>
      <div style={{ width: '100%' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
          <Divider style={{ borderColor: '#1a1a19b3' }}>
            <ColorLabel>Select The Bottom:</ColorLabel>
          </Divider>
        </div>
        <CakeButton
          onClick={() => handleBottomClick('bottom')}
          active={selectedBottom === 'bottom'}
        >
          <img src={bottom}  style={{ height: '50px' }}/>
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Bottom</div>Bottom */}
        </CakeButton>
      </div>
    </ColumnContainer>
  );
};


const ToppingHeartSelector: React.FC<ToppingSelectorProps> = ({
  onSelectTopping,
  onSelectSide,
  onSelectBottom,
}) => {
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
    <ColumnContainer style={{display: 'flex' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ width: '100%' , margin: '0 auto' , justifyContent: 'center' , alignItems: 'center' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Select The Topping:</ColorLabel>
        </Divider>
       </div>
        <CakeButton
          onClick={() => handleToppingClick('mix')}
          active={selectedTopping === 'mix'}
        >
          <img src={Heartmix}  />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Mix</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('small')}
          active={selectedTopping === 'small'}
        >
          <img src={Heartsmall}  />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Small</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('full')}
          active={selectedTopping === 'full'}
        >
          <img src={Heartbig} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Full</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('heart')}
          active={selectedTopping === 'heart'}
        >
          <img src={Heartheart} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Heart</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('star')}
          active={selectedTopping === 'star'}
        >
          <img src={Heartstar} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Star</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('cramel')}
          active={selectedTopping === 'cramel'}
        >
          <img src={Heartcramel} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Cramel</div> */}
        </CakeButton>
      </div>

      <div style={{ width: '100%' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <Divider style={{ borderColor: '#1a1a19b3' }}>
            <ColorLabel>Select The Side:</ColorLabel>
          </Divider>
        </div>
        <CakeButton
          onClick={() => handleSideClick('heartSide')}
          active={selectedSide === 'heartSide'}
        >
          <img src={heartSide} style={{ height: '50px' }} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Heart Side</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleSideClick('starSide')}
          active={selectedSide === 'starSide'}
        >
          <img src={starSide} style={{ height: '50px' }}/>
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Star Side</div> */}
        </CakeButton>
      </div>
      <div style={{ width: '100%' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
          <Divider style={{ borderColor: '#1a1a19b3' }}>
            <ColorLabel>Select The Bottom:</ColorLabel>
          </Divider>
        </div>
        <CakeButton
          onClick={() => handleBottomClick('bottom')}
          active={selectedBottom === 'bottom'}
        >
          <img src={Heartbottom}  style={{ height: '60px' , width: '90px' }}/>
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Bottom</div>Bottom */}
        </CakeButton>
      </div>
    </ColumnContainer>
  );
};

const ToppingSquareSelector: React.FC<ToppingSelectorProps> = ({
  onSelectTopping,
  onSelectSide,
  onSelectBottom,
}) => {
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
    <ColumnContainer style={{display: 'flex' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ width: '100%' , margin: '0 auto' , justifyContent: 'center' , alignItems: 'center' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Select The Topping:</ColorLabel>
        </Divider>
       </div>
        <CakeButton
          onClick={() => handleToppingClick('mix')}
          active={selectedTopping === 'mix'}
        >
          <img src={Squaremix}  />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Mix</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('small')}
          active={selectedTopping === 'small'}
        >
          <img src={Squaresmall}  />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Small</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('full')}
          active={selectedTopping === 'full'}
        >
          <img src={Squarebig} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Full</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('heart')}
          active={selectedTopping === 'heart'}
        >
          <img src={Squareheart} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Heart</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('star')}
          active={selectedTopping === 'star'}
        >
          <img src={Squarestar} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Star</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleToppingClick('cramel')}
          active={selectedTopping === 'cramel'}
        >
          <img src={Squarecramel} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Cramel</div> */}
        </CakeButton>
      </div>

      <div style={{ width: '100%' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <Divider style={{ borderColor: '#1a1a19b3' }}>
            <ColorLabel>Select The Side:</ColorLabel>
          </Divider>
        </div>
        <CakeButton
          onClick={() => handleSideClick('heartSide')}
          active={selectedSide === 'heartSide'}
        >
          <img src={SquareheartSide} style={{ height: '50px' }} />
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Heart Side</div> */}
        </CakeButton>
        <CakeButton
          onClick={() => handleSideClick('starSide')}
          active={selectedSide === 'starSide'}
        >
          <img src={SquarestarSide} style={{ height: '50px' }}/>
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Star Side</div> */}
        </CakeButton>
      </div>
      <div style={{ width: '100%' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
          <Divider style={{ borderColor: '#1a1a19b3' }}>
            <ColorLabel>Select The Bottom:</ColorLabel>
          </Divider>
        </div>
        <CakeButton
          onClick={() => handleBottomClick('bottom')}
          active={selectedBottom === 'bottom'}
        >
          <img src={Squarebottom}  style={{ height: '50px' }}/>
          {/* <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Bottom</div>Bottom */}
        </CakeButton>
      </div>
    </ColumnContainer>
  );
};


export {ToppingSelector , ToppingHeartSelector , ToppingSquareSelector};
