import React from 'react'; 
import { CakeInput, CakeButton } from '../../../styles/CakeComponentStyles/Cake.styled';
import ColorPicker from './ColorPicker';


type FontInputProps = {
  onTextChange: (text: string) => void;
  onToggleFont: () => void;
  onColorChange: (color: string) => void;
  textValue: string;
  color: string;
  
};



const FontInput: React.FC<FontInputProps> = ({ onTextChange, onToggleFont, textValue ,onColorChange ,color}) => {
  return (
    <>
      <CakeInput
        type="text"
        value={textValue}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Enter Text"
      />
      <CakeButton onClick={onToggleFont}>Toggle Font</CakeButton>

      {/* Color Selector for text color */}
      
      <ColorPicker selectedColor={color} onColorChange={onColorChange} />
    </>
  );
};

export default FontInput;
