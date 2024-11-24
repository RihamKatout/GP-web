import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Layer from './LayerFunction/Layar'; // Ensure the file './Layer.tsx' exists in the same directory
import LayerHeart from './LayerFunction/LayerHeart'; 
import LayerSquare from './LayerFunction/LayerSquare';
import { HeartTop, FullMixTopping, FullTopping, FullSmallTopping, FullBottom } from './ToppingFunction/Topping';
import ToppingSide from './ToppingFunction/ToppingSide';
import CakeFont from './Font';
import FontInput from './FontFunction/FontInput';
import ToppingSelector from './ToppingFunction/ToppingSelector';
import LayerSelector from './LayerFunction/LayerSelector';
import { CakePageContainer, Column, MiddleColumn } from '../../styles/CakeComponentStyles/Cake.styled';

const CakeScene = () => {
  const [userText, setUserText] = useState('');
  const [fontType, setFontType] = useState('droid_sans_bold');
  const [selectedColor, setSelectedColor] = useState('#312e2e');
  const [toppingType, setToppingType] = useState<'small' | 'mix' | 'full' | 'heart'| ''>('');
  const [sideType, setSideType] = useState<'full' | 'heartSide' | ''>('');
  const [bottomType, setBottomType] = useState<'bottom' | ''>('');
  ////Layer Function/////
  const [numLayers, setNumLayers] = useState<number>(2); // Default to 2 layers
  const handleSelectLayer = (layers: 2 | 3 | 4) => {
    setNumLayers(layers);
  };
  const [layerShape, setLayerShape] = useState<'round' | 'heart' | 'square'>('round');


  const [currentStage, setCurrentStage] = useState(1);

  const toggleFont = () => {
    setFontType(fontType === 'droid_sans_bold' ? 'helvetiker' : 'droid_sans_bold');
  };

  const nextStage = () => setCurrentStage((prev) => Math.min(prev + 1, 3)); // Change 3 if more stages are added
  const prevStage = () => setCurrentStage((prev) => Math.max(prev - 1, 1));

  const renderLeftColumn = () => {
    switch (currentStage) {
      case 1:
        return <LayerSelector onSelectLayer={handleSelectLayer} onSelectShape={setLayerShape} />;
      case 2:
        return (
          
          <ToppingSelector
            onSelectTopping={setToppingType}
            onSelectSide={setSideType}
            onSelectBottom={setBottomType}
          />
          
          
          
        );
      case 3:
      //   // return (
          
      //   // );
      // default:
      //   return null;
    }
  };

  const renderRightColumn = () => {
    switch (currentStage) {
      case 1:
        return <p>Instructions or preview for stage 1.</p>;
      case 2:
        return (<FontInput
          textValue={userText}
          onTextChange={setUserText}
          onToggleFont={toggleFont}
          onColorChange={setSelectedColor}
          color={selectedColor}
        />);
      case 3:
        return <p>Adjust font and colors for your text.</p>;
      default:
        return null;
    }
  };

  return (
    <CakePageContainer>
      <Column>{renderLeftColumn()}</Column>
      <MiddleColumn>
        <Canvas camera={{ position: [0, 12, -13], fov: 20 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
          <group>
            {layerShape === 'heart' && <LayerHeart numLayers={numLayers} />}
            {layerShape === 'round' && <Layer numLayers={numLayers} />}
            {layerShape === 'square' && <LayerSquare numLayers={numLayers} />}

            {toppingType === 'small' && <FullSmallTopping />}
            {toppingType === 'mix' && <FullMixTopping />}
            {toppingType === 'full' && <FullTopping />}
            {toppingType === 'heart' && <HeartTop />}
            {sideType === 'heartSide' && <ToppingSide />}
            {bottomType === 'bottom' && <FullBottom />}
            <CakeFont
              text={userText}
              position={[0, 1.4, 0.7]}
              rotation={[Math.PI / 2, Math.PI, 0]}
              fontType={fontType}
              maxCharsPerLine={12}
              color={selectedColor}
            />
          </group>
        </Canvas>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <button onClick={prevStage} disabled={currentStage === 1}>
            Prev
          </button>
          <button onClick={nextStage} disabled={currentStage === 3}>
            Next
          </button>
        </div>
      </MiddleColumn>
      <Column>{renderRightColumn()}</Column>
    </CakePageContainer>
  );
};

export default CakeScene;
