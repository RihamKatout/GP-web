import React from 'react';
import {  ColorInput , ColorLabel } from '../../../styles/CakeComponentStyles/ColorPicker.styled';
import { ColumnContainer } from '../../../styles/CakeComponentStyles/Cake.styled';
import chocolate from "../../../../assets/cake/FillingIcon/chocolate.png"
import cramel from "../../../../assets/cake/FillingIcon/cramel.png"
import blueberry from "../../../../assets/cake/FillingIcon/blueberry.png"
import strawberry from "../../../../assets/cake/FillingIcon/strawberry.png"
import { Divider } from 'antd';
import styled from 'styled-components';


type ColorPickerProps = {
  selectedColor: string;
  onColorChange: (color: string) => void;
};

const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `
  
  const ColorRadioContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange }) => {
  const predefinedColors = [
    { name: 'Red', color: '#f5a7a7' },
    { name: 'Green', color: '#6b3c2e' },
    { name: 'Blue', color: '#e1b168' },
  ];

  function handleColorChange(color: string) {
    onColorChange(color);
  }

  function handleCustomColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    onColorChange(event.target.value);
  }

  return (
    <>
      
      <ColorPickerContainer>
        <ColorRadioContainer>
          {predefinedColors.map((colorOption) => (
            <label
              key={colorOption.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <ColorInput
                type="radio"
                name="creamColor"
                value={colorOption.color}
                checked={selectedColor === colorOption.color}
                onChange={() => handleColorChange(colorOption.color)}
                style={{ display: 'none' }}
              />
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: colorOption.color,
                  display : 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '11px',
                  marginBottom: '25px',
                  marginTop: '10px',
                  border: selectedColor === colorOption.color ? '2px solid #000' : '1px solid #ccc',
                }}
              />
              <span style={{ marginTop: '5px', fontSize: '12px' }}>{colorOption.name}</span>
            </label>
          ))}
          {/* Custom Color Picker */}
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="radio"
              name="creamColor"
              value="custom"
              checked={!predefinedColors.some((color) => color.color === selectedColor)}
              onChange={() => handleColorChange(selectedColor)}
              style={{ display: 'none' }}
            />
            <ColorInput
              type="color"
              value={selectedColor}
              onChange={handleCustomColorChange}
              style={{
                width: '40px',
                height: '40px',
                //backgroundColor: colorOption.color,
                display : 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '11px',
                marginBottom: '25px',
                marginTop: '10px',
                border:  '2px solid #ccc',
              }}
            />
            <span style={{ marginTop: '5px', fontSize: '15px' }}>Custom</span>
          </label>
        </ColorRadioContainer>
      </ColorPickerContainer>
    </>
  );
};


const FillPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange }) => {
  const fillingOptions = [
    { name: 'chocolate', color: '#AB6C53', icon: chocolate },
    { name: 'caramel', color: '#de7f3b', icon: cramel },
    { name: 'blueberry', color: '#603d70', icon: blueberry },
    { name: 'strawberry', color: '#E03C3E', icon: strawberry },
  ];

  return (
    <ColumnContainer>
    
      <ColorPickerContainer>
        
          {fillingOptions.map((filling) => (
            <label
              key={filling.name}
              style={{
                display: 'inline-block',
                marginRight: '15px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <input
                type="radio"
                name="fillingColor"
                value={filling.color}
                checked={selectedColor === filling.color}
                onChange={() => onColorChange(filling.color)}
                style={{ display: 'none' }}
              />
              <img
                src={filling.icon}
                //alt={filling.name}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  border: selectedColor === filling.color ? '2px solid #000' : '2px solid transparent',
                  borderRadius: '5px',
                }}
              />
              <div style={{ marginTop: '5px' }}>
                {filling.name.charAt(0).toUpperCase() + filling.name.slice(1)}
              </div>
            </label>
          ))}
       
      </ColorPickerContainer>
    </ColumnContainer>
  );

};



const CreamPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange }) => {
  const predefinedColors = [
    { name: 'Red', color: '#f5a7a7' },
    { name: 'Green', color: '#6b3c2e' },
    { name: 'Blue', color: '#e1b168' },
  ];

  function handleColorChange(color: string) {
    onColorChange(color);
  }

  function handleCustomColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    onColorChange(event.target.value);
  }

  return (
    <>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Cream Color:</ColorLabel>
        </Divider>
      </div>
      <ColorPickerContainer>
        <ColorRadioContainer>
          {predefinedColors.map((colorOption) => (
            <label
              key={colorOption.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <ColorInput
                type="radio"
                name="creamColor"
                value={colorOption.color}
                checked={selectedColor === colorOption.color}
                onChange={() => handleColorChange(colorOption.color)}
                style={{ display: 'none' }}
              />
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: colorOption.color,
                  display : 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '11px',
                  marginBottom: '25px',
                  marginTop: '10px',
                  border: selectedColor === colorOption.color ? '2px solid #000' : '1px solid #ccc',
                }}
              />
              <span style={{ marginTop: '5px', fontSize: '12px' }}>{colorOption.name}</span>
            </label>
          ))}
          {/* Custom Color Picker */}
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="radio"
              name="creamColor"
              value="custom"
              checked={!predefinedColors.some((color) => color.color === selectedColor)}
              onChange={() => handleColorChange(selectedColor)}
              style={{ display: 'none' }}
            />
            <ColorInput
              type="color"
              value={selectedColor}
              onChange={handleCustomColorChange}
              style={{
                width: '40px',
                height: '40px',
                //backgroundColor: colorOption.color,
                display : 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '11px',
                marginBottom: '25px',
                marginTop: '10px',
                border:  '2px solid #ccc',
              }}
            />
            <span style={{ marginTop: '5px', fontSize: '15px' }}>Custom</span>
          </label>
        </ColorRadioContainer>
      </ColorPickerContainer>
    </>
  );
};

export {ColorPicker , FillPicker , CreamPicker};
