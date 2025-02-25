import React from 'react';
import CakeFont from '../Font'; // Ensure the correct path to CakeFont component

interface FontSmallProps {
  userText: string;
  fontType: string;
  selectedColor: string;
}
////////////////// For Round Shap
const FontSmall: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
  return (
    <CakeFont
      text={userText}
      position={[0.3, 0.56, 0.7]}
      rotation={[Math.PI / 2, Math.PI, 0]}
      fontPath={fontType}
      maxCharsPerLine={12}
      color={selectedColor}
    />
  );
};
const FontDripSmall: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
    return (
      <CakeFont
        text={userText}
        position={[0.3, 0.62, 0.7]}
        rotation={[Math.PI / 2, Math.PI, 0]}
        fontPath={fontType}
        maxCharsPerLine={12}
        color={selectedColor}
      />
    );
  };
  
////////////For Regular

const FontRegular: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
    return (
      <CakeFont
        text={userText}
        position={[0.3, 1.56, 0.7]}
        rotation={[Math.PI / 2, Math.PI, 0]}
        fontPath={fontType}
        maxCharsPerLine={12}
        color={selectedColor}
      />
    );
  };
  const FontDripRegular: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
      return (
        <CakeFont
          text={userText}
          position={[0.3, 1.62, 0.7]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          fontPath={fontType}
          maxCharsPerLine={9}
          color={selectedColor}
        />
      );
    };
    
////////////For Large

const FontLarge: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
    return (
      <CakeFont
        text={userText}
        position={[0.3, 2.56, 0.7]}
        rotation={[Math.PI / 2, Math.PI, 0]}
        fontPath={fontType}
        maxCharsPerLine={9}
        color={selectedColor}
      />
    );
  };
  const FontDripLarge: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
      return (
        <CakeFont
          text={userText}
          position={[0.3, 2.62, 0.7]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          fontPath={fontType}
          maxCharsPerLine={7}
          color={selectedColor}
        />
      );
    };

    
////////////////// For Square Shap
const FontSquareSmall: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
    return (
      <CakeFont
        text={userText}
        position={[0.45, 0.56, 0.2]}
        rotation={[Math.PI / 2, Math.PI, 0.8]}
        fontPath={fontType}
        maxCharsPerLine={10}
        color={selectedColor}
      />
    );
  };
  const FontSquareDripSmall: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
      return (
        <CakeFont
          text={userText}
          position={[0.45, 0.62, 0.2]}
          rotation={[Math.PI / 2, Math.PI, 0.8]}
          fontPath={fontType}
          maxCharsPerLine={10}
          color={selectedColor}
        />
      );
    };
    
  ////////////For Regular
  
  const FontSquareRegular: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
      return (
        <CakeFont
          text={userText}
          position={[0.45, 1.56, 0.2]}
          rotation={[Math.PI / 2, Math.PI, 0.8]}
          fontPath={fontType}
          maxCharsPerLine={10}
          color={selectedColor}
        />
      );
    };
    const FontSquareDripRegular: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
        return (
          <CakeFont
            text={userText}
            position={[0.45, 1.62, 0.2]}
            rotation={[Math.PI / 2, Math.PI, 0.8]}
            fontPath={fontType}
            maxCharsPerLine={10}
            color={selectedColor}
          />
        );
      };
      
  ////////////For Large
  
  const FontSquareLarge: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
      return (
        <CakeFont
          text={userText}
          position={[0.45, 2.56, 0.2]}
          rotation={[Math.PI / 2, Math.PI, 0.8]}
          fontPath={fontType}
          maxCharsPerLine={10}
          color={selectedColor}
        />
      );
    };
    const FontSquareDripLarge: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
        return (
          <CakeFont
            text={userText}
            position={[0.45, 2.65, 0.2]}
            rotation={[Math.PI / 2, Math.PI, 0.8]}
            fontPath={fontType}
            maxCharsPerLine={10}
            color={selectedColor}
          />
        );
      };

    
////////////////// For Heart Shap
const FontHeartSmall: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
    return (
      <CakeFont
        text={userText}
        position={[0.3, 0.2, -0.1]}
        rotation={[Math.PI / 2, Math.PI, 0]}
        fontPath={fontType}
        maxCharsPerLine={15}
        color={selectedColor}
      />
    );
  };
  const FontHeartDripSmall: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
      return (
        <CakeFont
          text={userText}
          position={[0.3, 0.32, -0.1]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          fontPath={fontType}
          maxCharsPerLine={15}
          color={selectedColor}
        />
      );
    };
    
  ////////////For Regular
  
  const FontHeartRegular: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
      return (
        <CakeFont
          text={userText}
          position={[0.3, 1.06, -0.1]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          fontPath={fontType}
          maxCharsPerLine={15}
          color={selectedColor}
        />
      );
    };
    const FontHeartDripRegular: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
        return (
          <CakeFont
            text={userText}
            position={[0.3, 1.12, -0.1]}
            rotation={[Math.PI / 2, Math.PI, 0]}
            fontPath={fontType}
            maxCharsPerLine={15}
            color={selectedColor}
          />
        );
      };
      
  ////////////For Large
  
  const FontHeartLarge: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
      return (
        <CakeFont
          text={userText}
          position={[0.3, 0.2, -0.1]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          fontPath={fontType}
          maxCharsPerLine={15}
          color={selectedColor}
        />
      );
    };
    const FontHeartDripLarge: React.FC<FontSmallProps> = ({ userText, fontType, selectedColor }) => {
        return (
          <CakeFont
            text={userText}
            position={[0.3, 2.15, -0.1]}
            rotation={[Math.PI / 2, Math.PI, 0]}
            fontPath={fontType}
            maxCharsPerLine={15}
            color={selectedColor}
          />
        );
      };
           

export { FontSmall , FontDripSmall , FontRegular , FontDripRegular , FontLarge , FontDripLarge , FontSquareSmall , FontSquareDripSmall , FontSquareRegular , FontSquareDripRegular , FontSquareLarge , FontSquareDripLarge , FontHeartSmall , FontHeartDripSmall , FontHeartRegular , FontHeartDripRegular , FontHeartLarge , FontHeartDripLarge };