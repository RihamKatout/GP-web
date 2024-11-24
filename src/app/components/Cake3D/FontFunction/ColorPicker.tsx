import React from 'react';
import { ColorPickerContainer, ColorInput , ColorLabel } from '../../../styles/CakeComponentStyles/ColorPicker.styled';

type ColorPickerProps = {
  selectedColor: string;
  onColorChange: (color: string) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange }) => {
  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    onColorChange(event.target.value);
  }

  return (
    <ColorPickerContainer>
      
      {/* <ColorDisplay style={{ backgroundColor: selectedColor }}>
       
      </ColorDisplay> */}
      <ColorLabel>Select a color:</ColorLabel>
      <ColorInput
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </ColorPickerContainer>
  );
};

export default ColorPicker;
