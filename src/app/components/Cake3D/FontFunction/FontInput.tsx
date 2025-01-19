import React from 'react'; 
import { CakeInput, CakeButton } from '../../../styles/CakeComponentStyles/Cake.styled';
import {ColorPicker} from './ColorPicker';
import { Divider } from 'antd';
import { ColorLabel } from '../../../styles/CakeComponentStyles/ColorPicker.styled';


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
      <CakeButton style={{ marginTop: '10px' , width: '50%', height: '100%'}} onClick={onToggleFont}>Toggle Font</CakeButton>

      {/* Color Selector for text color */}
      <div style={{ width: '100%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Text Color:</ColorLabel>
        </Divider>
      </div>
      
      <ColorPicker selectedColor={color} onColorChange={onColorChange} />
    </>
  );
};

export default FontInput;
