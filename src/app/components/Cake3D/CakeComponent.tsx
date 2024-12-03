import  { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Layer , FullLayer} from './LayerFunction/Layar'; // Ensure the file './Layer.tsx' exists in the same directory
import {LayerHeart, FullLayerHeart} from './LayerFunction/LayerHeart'; 
import {LayerSquare, FullLayerSquare} from './LayerFunction/LayerSquare';
import { HeartTop, FullMixTopping, FullTopping, FullSmallTopping, FullBottom ,HeartTopSmallRound , HeartTopLargRound , FullSmallToppingLarg , FullToppingLarg , FullMixToppingLarg , FullToppingSmall , FullMixToppingSmall , FullSmallToppingSmall , Cramel , CramelSmall , CramelLarge , StarTop  , StarTopSmall , StarTopLarge} from './ToppingFunction/Topping';
import {ToppingSide, ToppingSideSmall, ToppingSideLarg , ToppingStarSide, ToppingStarSideSmall, ToppingStarSideLarge, ToppingStarSideSquare, ToppingStarSideSquareSmall , ToppingStarSideSquareLarge , ToppingSideRound , ToppingSideRoundSmall , ToppingSideRoundLarg}  from './ToppingFunction/ToppingSide';
import {  HeartTopSquare, FullSmallToppingSquare, FullToppingSquare, FullMixToppingSquare ,FullBottomSquare , HeartTopSmallSquare , HeartTopLargSquare , FullToppingLargSquare , FullMixToppingLargSquare , FullSmallToppingLargSquare , FullToppingSmallSquare , FullMixToppingSmallSquare , FullSmallToppingSmallSquare , StarTopSquare, StarTopSmallSquare, StarTopLargeSquare, CramelSquare, CramelSquareSmall , CramelSquareLarge} from './ToppingFunction/ToppingSquare';
import {  HeartTopHeart, FullSmallToppingHeart, FullToppingHeart, FullMixToppingHeart ,FullBottomHeart , HeartTopSmallHeart , HeartTopLargHeart , FullToppingLargHeart , FullMixToppingLargHeart , FullSmallToppingLargHeart , FullToppingSmallHeart , FullMixToppingSmallHeart , FullSmallToppingSmallHeart, StarTopHeart, StarTopSmallHeart, StarTopLargHeart, CramelToppingHeart, CramelToppingSmallHeart, CramelToppingLargHeart } from './ToppingFunction/ToppingHeart';

import CakeFont from './Font';
import FontInput from './FontFunction/FontInput';
import ToppingSelector from './ToppingFunction/ToppingSelector';
import LayerSelector from './LayerFunction/LayerSelector';
import { CakePageContainer, Column, MiddleColumn ,ColumnContainer} from '../../styles/CakeComponentStyles/Cake.styled';
import ColorPicker from './FontFunction/ColorPicker';

//Decoration
import DecorationSelector from './Decoration/DecorationSelector';
import {ChocoDecoration , ChocoParDecoration, ChocoParRegularDecoration, ChocoParLargeDecoration , RoseDecoration , RaspberryDecoration, RaspberryRegularDecoration, RaspberryLargeDecoration, RoseRegularDecoration, RoseLargeDecoration, ChocoRegularDecoration, ChocoLargeDecoration} from './Decoration/DecorationSide';
import { StrawberryDecoration  ,  StrawberryDripDecoration , StrawberryHeartDecoration , StrawberryRegularDecoration , StrawberryRegularDripDecoration , StrawberryRegularHeartDecoration , StrawberryLargeDecoration , StrawberryLargeDripDecoration , StrawberryLargeHeartDecoration ,   CherryDecoration, CherryDripDecoration, CherryHeartDecoration ,CherryRegularDecoration , CherryLargeDripDecoration , CherryRegularDripDecoration , CherryRegularHeartDecoration ,CherryLargeDecoration ,CherryLargeHeartDecoration } from './Decoration/Decoration';
import { StrawberryDecorationSquare, StrawberryDripDecorationSquare, StrawberryHeartDecorationSquare, StrawberryLargeDecorationSquare, StrawberryLargeDripDecorationSquare, StrawberryLargeHeartDecorationSquare, StrawberryRegularDecorationSquare, StrawberryRegularDripDecorationSquare, StrawberryRegularHeartDecorationSquare } from './Decoration/DecorationSquare';
import { ChocoParDecorationHeart, ChocoParLargeDecorationHeart, ChocoParRegularDecorationHeart, RaspberryDecorationHeart, RaspberryLargeDecorationHeart, RaspberryRegularDecorationHeart } from './Decoration/DecorationHeart';
import CardWriting from './CardWriting';
const CakeScene = () => {
  const [userText, setUserText] = useState('');
  const [fontType, setFontType] = useState('/fonts/droid_sans_bold.typeface.json');
  const [selectedColor, setSelectedColor] = useState('#312e2e');
  ///// Topping / Side / Bottom Function /////
  const [selectedTopping, setSelectedTopping] = useState<string | null>(null);
  const [selectedSide, setSelectedSide] = useState<string | null>(null);
  const [selectedBottom, setSelectedBottom] = useState<string | null>(null);

  const handleSelectTopping = (topping: string | null) => {
    setSelectedTopping(topping);
  };

  const handleSelectSide = (side: string | null) => {
    setSelectedSide(side);
  };

  const handleSelectBottom = (bottom: string | null) => {
    setSelectedBottom(bottom);
  };
  //// Decoration Function ////
  const [selectedDecoration, setSelectedDecoration] = useState<string | null>(null);
  const [selectedMidDecoration, setSelectedMidDecoration] = useState<string | null>(null);

  const handleSelectDecoration = (decoration: string | null) => {
    setSelectedDecoration(decoration);
    
  }
  const handleSelectMidDecoration = (decorationMid: string | null) => {
    setSelectedMidDecoration(decorationMid);
  }
  ////Layer Function/////
  const [numLayers, setNumLayers] = useState<number>(2); // Default to 2 layers
  const handleSelectLayer = (layers: 2 | 3 | 4) => {
    setNumLayers(layers);
  };
  const [layerShape, setLayerShape] = useState<'round' | 'heart' | 'square'>('round');

//// Color Function ////
const [layerColor, setLayerColor] = useState('#e8ad82');
const [fillLayerColor, setFillLayerColor] = useState('#D2691E');// color for filling ( must be 3)

const [toppingColor, setToppingColor] = useState('#fb87c3');// all the topping is the same color


//// Stage Function ////
  const [currentStage, setCurrentStage] = useState(1);

  const toggleFont = () => {
    setFontType((prevFont) =>
      prevFont.includes('droid_sans_bold') ? '/fonts/helvetiker_regular.typeface.json' : '/fonts/droid_sans_bold.typeface.json'
    );
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
            onSelectTopping={handleSelectTopping}
            onSelectSide={handleSelectSide}
            onSelectBottom={handleSelectBottom}
          />
          
        );
      case 3:
        return (
          <DecorationSelector onSelectDecoration={handleSelectDecoration}  onSelectMidDecoration={handleSelectMidDecoration}/>
       );
      // default:
      //   return null;
    }
  };

  const renderRightColumn = () => {
    switch (currentStage) {
      case 1:
        return (<>
        <ColorPicker
          selectedColor={layerColor}
          onColorChange={setLayerColor}
        />
        <ColorPicker
          selectedColor={fillLayerColor}
          onColorChange={setFillLayerColor}
        />

        </>);
      case 2:
        return (<ColumnContainer><FontInput
          textValue={userText}
          onTextChange={setUserText}
          onToggleFont={toggleFont}
          onColorChange={setSelectedColor}
          color={selectedColor}
        />
        <ColorPicker
        selectedColor={toppingColor}
        onColorChange={(color) => setToppingColor(color)}
      />
        </ColumnContainer>);
      case 3:
        return <CardWriting />;
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
            {layerShape === 'heart' && <LayerHeart numLayers={numLayers} layerColor={layerColor} fillLayerColor={fillLayerColor} />}
            {layerShape === 'round' && <Layer numLayers={numLayers} layerColor={layerColor} fillLayerColor={fillLayerColor} />}
            {layerShape === 'square' && <LayerSquare numLayers={numLayers} layerColor={layerColor} fillLayerColor={fillLayerColor} />}
             
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && <FullLayer numLayers={numLayers} layerColor={layerColor} fillLayerColor={fillLayerColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && <FullLayerHeart numLayers={numLayers} layerColor={layerColor} fillLayerColor={fillLayerColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && <FullLayerSquare numLayers={numLayers} layerColor={layerColor} fillLayerColor={fillLayerColor} />}
            
            {/* Square Topping */}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'small' && numLayers === 3 &&<FullSmallToppingSquare color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'small' && numLayers === 2 &&<FullSmallToppingSmallSquare color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'small' && numLayers === 4 &&<FullSmallToppingLargSquare color={toppingColor}/>}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'mix' &&  numLayers === 3 &&<FullMixToppingSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'mix' &&  numLayers === 2 &&<FullMixToppingSmallSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'mix' &&  numLayers === 4 &&<FullMixToppingLargSquare color={toppingColor} />}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'full' && numLayers === 3 &&<FullToppingSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'full' && numLayers === 4 &&<FullToppingLargSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'full' && numLayers === 2 &&<FullToppingSmallSquare color={toppingColor} />}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'heart' && numLayers === 3 &&<HeartTopSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'heart' && numLayers === 2 && <HeartTopSmallSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'heart' && numLayers === 4 && <HeartTopLargSquare color={toppingColor} />}
            

            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'star' && numLayers === 3 &&<StarTopSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'star' && numLayers === 2 && <StarTopSmallSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'star' && numLayers === 4 && <StarTopLargeSquare color={toppingColor} />}
            
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'cramel' && numLayers === 3 &&<CramelSquare color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'cramel' && numLayers === 2 && <CramelSquareSmall color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedTopping === 'cramel' && numLayers === 4 && <CramelSquareLarge color={toppingColor} />}


            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedSide === 'heartSide' &&  numLayers === 3 &&<ToppingSide color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedSide === 'heartSide' &&  numLayers === 2 &&<ToppingSideSmall color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedSide === 'heartSide' &&  numLayers === 4 &&<ToppingSideLarg color={toppingColor}/>}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedSide === 'starSide' &&  numLayers === 3 &&<ToppingStarSideSquare color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedSide === 'starSide' &&  numLayers === 2 &&<ToppingStarSideSquareSmall color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedSide === 'starSide' &&  numLayers === 4 &&<ToppingStarSideSquareLarge color={toppingColor}/>}
            


            {(currentStage === 2 || currentStage === 3) && layerShape === 'square' && selectedBottom === 'bottom' && <FullBottomSquare color={toppingColor}/>}

            {/* Round Topping */}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'small' && numLayers === 3 &&<FullSmallTopping color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'small' && numLayers === 2 &&<FullSmallToppingSmall color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'small' && numLayers === 4 &&<FullSmallToppingLarg color={toppingColor}/>}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'mix' &&  numLayers === 3 &&<FullMixTopping color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'mix' &&  numLayers === 2 &&<FullMixToppingSmall color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'mix' &&  numLayers === 4 &&<FullMixToppingLarg color={toppingColor} />}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'full' && numLayers === 3 &&<FullTopping color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'full' && numLayers === 4 &&<FullToppingLarg color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'full' && numLayers === 2 &&<FullToppingSmall color={toppingColor} />}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'heart' && numLayers === 3 &&<HeartTop color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'heart' && numLayers === 2 && <HeartTopSmallRound color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'heart' && numLayers === 4 && <HeartTopLargRound color={toppingColor} />}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'star' && numLayers === 3 &&<StarTop color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'star' && numLayers === 2 && <StarTopSmall color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'star' && numLayers === 4 && <StarTopLarge color={toppingColor} />}
            
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'cramel' && numLayers === 3 &&<Cramel color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'cramel' && numLayers === 2 && <CramelSmall color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedTopping === 'cramel' && numLayers === 4 && <CramelLarge color={toppingColor} />}
 

            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedSide === 'starSide' &&  numLayers === 3 &&<ToppingStarSide color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedSide === 'starSide' &&  numLayers === 2 &&<ToppingStarSideSmall color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedSide === 'starSide' &&  numLayers === 4 &&<ToppingStarSideLarge color={toppingColor}/>}
            
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedSide === 'heartSide' &&  numLayers === 3 &&<ToppingSideRound color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedSide === 'heartSide' &&  numLayers === 2 &&<ToppingSideRoundSmall color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedSide === 'heartSide' &&  numLayers === 4 &&<ToppingSideRoundLarg color={toppingColor}/>}


            {(currentStage === 2 || currentStage === 3) && layerShape === 'round' && selectedBottom === 'bottom' && <FullBottom color={toppingColor}/>}


            {/* Heart Topping */}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'small' && numLayers === 3 &&<FullSmallToppingHeart color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'small' && numLayers === 2 &&<FullSmallToppingSmallHeart color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'small' && numLayers === 4 &&<FullSmallToppingLargHeart color={toppingColor}/>}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'mix' &&  numLayers === 3 &&<FullMixToppingHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'mix' &&  numLayers === 2 &&<FullMixToppingSmallHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'mix' &&  numLayers === 4 &&<FullMixToppingLargHeart color={toppingColor} />}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'full' && numLayers === 3 &&<FullToppingHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'full' && numLayers === 4 &&<FullToppingLargHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'full' && numLayers === 2 &&<FullToppingSmallHeart color={toppingColor} />}

            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'heart' && numLayers === 3 &&<HeartTopHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'heart' && numLayers === 2 && <HeartTopSmallHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'heart' && numLayers === 4 && <HeartTopLargHeart color={toppingColor} />}
            
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'star' && numLayers === 3 &&<StarTopHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'star' && numLayers === 2 && <StarTopSmallHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'star' && numLayers === 4 && <StarTopLargHeart color={toppingColor} />}
            
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'cramel' && numLayers === 3 &&<CramelToppingHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'cramel' && numLayers === 2 && <CramelToppingSmallHeart color={toppingColor} />}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedTopping === 'cramel' && numLayers === 4 && <CramelToppingLargHeart color={toppingColor} />}


            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedSide === 'heartSide' &&  numLayers === 3 &&<ToppingSide color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedSide === 'heartSide' &&  numLayers === 2 &&<ToppingSideSmall color={toppingColor}/>}
            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedSide === 'heartSide' &&  numLayers === 4 &&<ToppingSideLarg color={toppingColor}/>}


            {(currentStage === 2 || currentStage === 3) && layerShape === 'heart' && selectedBottom === 'bottom' && <FullBottomHeart color={toppingColor}/>}

            {/* ////////////////// Decoration /////////////////////////*/}
            
            {/* Choco */}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'choco' && numLayers === 2 && <ChocoDecoration />}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'choco' && numLayers === 3 && <ChocoRegularDecoration />}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'choco' && numLayers === 4 && <ChocoLargeDecoration />}

            {/* Rose  */}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'rose' && numLayers === 2 && <RoseDecoration />}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'rose' && numLayers === 3 && <RoseRegularDecoration />}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'rose' && numLayers === 4 && <RoseLargeDecoration />}

            {/** Choco Par for Round and Square */}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'chocoPar' && numLayers === 2 && <ChocoParDecoration />}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'chocoPar' && numLayers === 3 && <ChocoParRegularDecoration />}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'chocoPar' && numLayers === 4 && <ChocoParLargeDecoration />}
            {/** Choco Par for Heart */}
            {(currentStage === 3)&& layerShape === 'heart' && selectedMidDecoration === 'chocoPar' && numLayers === 2 && <ChocoParDecorationHeart />}
            {(currentStage === 3) && layerShape === 'heart' && selectedMidDecoration === 'chocoPar' && numLayers === 3 && <ChocoParRegularDecorationHeart />}
            {(currentStage === 3) && layerShape === 'heart' && selectedMidDecoration === 'chocoPar' && numLayers === 4 && <ChocoParLargeDecorationHeart />}


            {/* Strawberry Round */}
            {(currentStage === 3) && layerShape === 'round' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && selectedDecoration === 'strawberry' && <StrawberryDecoration />}
            {(currentStage === 3) && layerShape === 'round' &&  selectedTopping === 'small'&& selectedDecoration === 'strawberry' && <StrawberryDripDecoration />}
            {(currentStage === 3) && layerShape === 'round' && (selectedTopping === 'heart' || selectedTopping === 'star' ) && selectedDecoration === 'strawberry' && <StrawberryHeartDecoration />}
            {(currentStage === 3) && layerShape === 'round' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && numLayers === 3 && selectedDecoration === 'strawberry' && <StrawberryRegularDecoration />}
            {(currentStage === 3) && layerShape === 'round' &&  selectedTopping === 'small'&& selectedDecoration === 'strawberry' && numLayers === 3 && <StrawberryRegularDripDecoration />}
            {(currentStage === 3) && layerShape === 'round' &&  (selectedTopping === 'heart' || selectedTopping === 'star' )&& selectedDecoration === 'strawberry' && numLayers === 3 && <StrawberryRegularHeartDecoration />}
            {(currentStage === 3) && layerShape === 'round' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && numLayers === 4 && selectedDecoration === 'strawberry' && <StrawberryLargeDecoration />}
            {(currentStage === 3) && layerShape === 'round' &&  selectedTopping === 'small'&& selectedDecoration === 'strawberry' && numLayers === 4 && <StrawberryLargeDripDecoration />}
            {(currentStage === 3) && layerShape === 'round' &&  (selectedTopping === 'heart' || selectedTopping === 'star' )&& selectedDecoration === 'strawberry' && numLayers === 4 && <StrawberryLargeHeartDecoration />}
            {/* Strawberry Square */}
            {(currentStage === 3) && layerShape === 'square' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && selectedDecoration === 'strawberry' && <StrawberryDecorationSquare />}
            {(currentStage === 3) && layerShape === 'square' &&  selectedTopping === 'small'&& selectedDecoration === 'strawberry' && <StrawberryDripDecorationSquare />}
            {(currentStage === 3) && layerShape === 'square' && (selectedTopping === 'heart' || selectedTopping === 'star' ) && selectedDecoration === 'strawberry' && <StrawberryHeartDecorationSquare />}
            {(currentStage === 3) && layerShape === 'square' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && numLayers === 3 && selectedDecoration === 'strawberry' && <StrawberryRegularDecorationSquare />}
            {(currentStage === 3) && layerShape === 'square' &&  selectedTopping === 'small'&& selectedDecoration === 'strawberry' && numLayers === 3 && <StrawberryRegularDripDecorationSquare />}
            {(currentStage === 3) && layerShape === 'square' &&  (selectedTopping === 'heart' || selectedTopping === 'star' )&& selectedDecoration === 'strawberry' && numLayers === 3 && <StrawberryRegularHeartDecorationSquare />}
            {(currentStage === 3) && layerShape === 'square' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && numLayers === 4 && selectedDecoration === 'strawberry' && <StrawberryLargeDecorationSquare />}
            {(currentStage === 3) && layerShape === 'square' &&  selectedTopping === 'small'&& selectedDecoration === 'strawberry' && numLayers === 4 && <StrawberryLargeDripDecorationSquare />}
            {(currentStage === 3) && layerShape === 'square' &&  (selectedTopping === 'heart' || selectedTopping === 'star' )&& selectedDecoration === 'strawberry' && numLayers === 4 && <StrawberryLargeHeartDecorationSquare />}

            
            {/* Raspberry For Round and Square */}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'raspberry' && numLayers === 2 && <RaspberryDecoration />}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'raspberry' && numLayers === 3 && <RaspberryRegularDecoration />}
            {(currentStage === 3) && (layerShape === 'round' || layerShape === 'square') && selectedMidDecoration === 'raspberry' && numLayers === 4 && <RaspberryLargeDecoration />}
            {/* Raspberry For Heart */}
            {(currentStage === 3) && layerShape === 'heart' && selectedMidDecoration === 'raspberry' && numLayers === 2 && <RaspberryDecorationHeart />}
            {(currentStage === 3) && layerShape === 'heart' && selectedMidDecoration === 'raspberry' && numLayers === 3 && <RaspberryRegularDecorationHeart />}
            {(currentStage === 3) && layerShape === 'heart'&& selectedMidDecoration === 'raspberry' && numLayers === 4 && <RaspberryLargeDecorationHeart />}

            {/* Cherry for Round */}
            
            {(currentStage === 3) && numLayers === 2 && layerShape === 'round' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && selectedDecoration === 'cherry' && <CherryDecoration />}
            {(currentStage === 3) && numLayers === 2 &&  layerShape === 'round' &&  selectedTopping === 'small'&& selectedDecoration === 'cherry' && <CherryDripDecoration />}
            {(currentStage === 3) && numLayers === 2 && layerShape === 'round' && (selectedTopping === 'heart' || selectedTopping === 'star' ) && selectedDecoration === 'cherry' && <CherryHeartDecoration />}
            {(currentStage === 3)&& numLayers === 3 && layerShape === 'round' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && numLayers === 3 && selectedDecoration === 'cherry' && <CherryRegularDecoration />}
            {(currentStage === 3) && numLayers === 3 && layerShape === 'round' &&  selectedTopping === 'small'&& selectedDecoration === 'cherry' && numLayers === 3 && <CherryRegularDripDecoration />}
            {(currentStage === 3) && numLayers === 3 && layerShape === 'round' &&  (selectedTopping === 'heart' || selectedTopping === 'star' )&& selectedDecoration === 'cherry' && numLayers === 3 && <CherryRegularHeartDecoration />}
            {(currentStage === 3) && numLayers === 4 && layerShape === 'round' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'cramel') && numLayers === 4 && selectedDecoration === 'cherry' && <CherryLargeDecoration />}
            {(currentStage === 3) && numLayers === 4 && layerShape === 'round' &&  selectedTopping === 'small'&& selectedDecoration === 'cherry' && numLayers === 4 && <CherryLargeDripDecoration />}
            {(currentStage === 3) && numLayers === 4 && layerShape === 'round' &&  (selectedTopping === 'heart' || selectedTopping === 'star' )&& selectedDecoration === 'cherry' && numLayers === 4 && <CherryLargeHeartDecoration />}
           


            <CakeFont
              text={userText}
              position={[1, 0.55, 0.7]}
              rotation={[Math.PI / 2, Math.PI, 0]}
              fontPath={fontType}
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
