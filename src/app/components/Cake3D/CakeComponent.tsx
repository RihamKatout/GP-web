import  { ReactNode, useContext, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Layer , FullLayer} from './LayerFunction/Layar'; // Ensure the file './Layer.tsx' exists in the same directory
import {LayerHeart, FullLayerHeart} from './LayerFunction/LayerHeart'; 
import {LayerSquare, FullLayerSquare} from './LayerFunction/LayerSquare';
import { HeartTop, FullMixTopping, FullTopping, FullSmallTopping, FullBottom ,HeartTopSmallRound , HeartTopLargRound , FullSmallToppingLarg , FullToppingLarg , FullMixToppingLarg , FullToppingSmall , FullMixToppingSmall , FullSmallToppingSmall , Cramel , CramelSmall , CramelLarge , StarTop  , StarTopSmall , StarTopLarge} from './ToppingFunction/Topping';
import {ToppingSide, ToppingSideSmall, ToppingSideLarg , ToppingStarSide, ToppingStarSideSmall, ToppingStarSideLarge, ToppingStarSideSquare, ToppingStarSideSquareSmall , ToppingStarSideSquareLarge , ToppingSideRound , ToppingSideRoundSmall , ToppingSideRoundLarg}  from './ToppingFunction/ToppingSide';
import {  HeartTopSquare, FullSmallToppingSquare, FullToppingSquare, FullMixToppingSquare ,FullBottomSquare , HeartTopSmallSquare , HeartTopLargSquare , FullToppingLargSquare , FullMixToppingLargSquare , FullSmallToppingLargSquare , FullToppingSmallSquare , FullMixToppingSmallSquare , FullSmallToppingSmallSquare , StarTopSquare, StarTopSmallSquare, StarTopLargeSquare, CramelSquare, CramelSquareSmall , CramelSquareLarge} from './ToppingFunction/ToppingSquare';
import {  HeartTopHeart, FullSmallToppingHeart, FullToppingHeart, FullMixToppingHeart ,FullBottomHeart , HeartTopSmallHeart , HeartTopLargHeart , FullToppingLargHeart , FullMixToppingLargHeart , FullSmallToppingLargHeart , FullToppingSmallHeart , FullMixToppingSmallHeart , FullSmallToppingSmallHeart, StarTopHeart, StarTopSmallHeart, StarTopLargHeart, CramelToppingHeart, CramelToppingSmallHeart, CramelToppingLargHeart } from './ToppingFunction/ToppingHeart';

import FontInput from './FontFunction/FontInput';
import {ToppingSelector , ToppingHeartSelector ,ToppingSquareSelector} from './ToppingFunction/ToppingSelector';
import LayerSelector from './LayerFunction/LayerSelector';
import { CakePageContainer, Column, MiddleColumn ,ColumnContainer, CakeButton} from '../../styles/CakeComponentStyles/Cake.styled';
import {ColorPicker , FillPicker } from './FontFunction/ColorPicker';

//Decoration
import DecorationSelector from './Decoration/DecorationSelector';
import {ChocoDecoration , ChocoParDecoration, ChocoParRegularDecoration, ChocoParLargeDecoration , RoseDecoration , RaspberryDecoration, RaspberryRegularDecoration, RaspberryLargeDecoration, RoseRegularDecoration, RoseLargeDecoration, ChocoRegularDecoration, ChocoLargeDecoration} from './Decoration/DecorationSide';
import { StrawberryDecoration  ,  StrawberryDripDecoration , StrawberryHeartDecoration , StrawberryRegularDecoration , StrawberryRegularDripDecoration , StrawberryRegularHeartDecoration , StrawberryLargeDecoration , StrawberryLargeDripDecoration , StrawberryLargeHeartDecoration ,   CherryDecoration, CherryDripDecoration, CherryHeartDecoration ,CherryRegularDecoration , CherryLargeDripDecoration , CherryRegularDripDecoration , CherryRegularHeartDecoration ,CherryLargeDecoration ,CherryLargeHeartDecoration } from './Decoration/Decoration';
import { StrawberryDecorationSquare, StrawberryDripDecorationSquare, StrawberryHeartDecorationSquare, StrawberryLargeDecorationSquare, StrawberryLargeDripDecorationSquare, StrawberryLargeHeartDecorationSquare, StrawberryRegularDecorationSquare, StrawberryRegularDripDecorationSquare, StrawberryRegularHeartDecorationSquare } from './Decoration/DecorationSquare';
import { ChocoParDecorationHeart, ChocoParLargeDecorationHeart, ChocoParRegularDecorationHeart, RaspberryDecorationHeart, RaspberryLargeDecorationHeart, RaspberryRegularDecorationHeart } from './Decoration/DecorationHeart';
import CardWriting from './CardWriting';
import { FontDripLarge, FontDripRegular, FontDripSmall, FontHeartDripLarge, FontHeartDripRegular, FontHeartDripSmall, FontHeartLarge, FontHeartRegular, FontHeartSmall, FontLarge, FontRegular, FontSmall, FontSquareDripLarge, FontSquareDripRegular, FontSquareDripSmall, FontSquareLarge, FontSquareRegular, FontSquareSmall } from './FontFunction/FontCake';
import { ConfigProvider, Divider, Steps } from 'antd';
import { ColorLabel } from '../../styles/CakeComponentStyles/ColorPicker.styled';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {MiniCharacter, SpeechBubble} from './Character';
import html2canvas from 'html2canvas';

import { ShopContext } from "../../context/SweetContext";
// Use alongside your character
//import { useThree } from '@react-three/fiber';


const RotatingCake = ({ children }: { children: ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Adjust rotation speed
    }
  });

  return <group ref={groupRef}>{children}</group>;
};
const GradientContainer = styled.div`
  width: 100%;
  height: 80vh; /* Default height for large screens */
  margin: 0 auto;
  background: radial-gradient(circle, #C47B83 0%, rgba(255, 255, 255, 1) 63%);

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    height: 70vh; /* Slightly smaller height for medium screens */
  }

  @media (max-width: 900px) {
    height: 60vh; /* Smaller height for tablets */
  }

  @media (max-width: 600px) {
    height: 50vh; /* Even smaller height for mobile screens */
  }
`;

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
const [fillLayerColor, setFillLayerColor] = useState('#de7f3b');// color for filling ( must be 3)

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
//////////Review Pop-up Function////////
const [showReviewPopup, setShowReviewPopup] = useState(false);

const handleOpenPopup = () => {
  setShowReviewPopup(true);
};

const handleConfirmPopup = () => {
  setShowReviewPopup(false);
  console.log("Cake added to cart!"); // Additional logic can go here
};
const [cardMessage, setCardMessage] = useState<string>(""); // Save the message
const [messages, setMessages] = useState<{ [key: string]: string }>({});

  const handleSaveMessage = (id: string, message: string) => {
    setMessages((prev) => ({ ...prev, [id]: message }));
    setCardMessage(message);
  };

///////////////Cake Sizing & Price////////////////
  const [cakeSize, setCakeSize] = useState<string>("Regular"); // Default size
   const [cakePrice, setCakePrice] = useState<number>(20); // Default price

  const handleSizeChange = (size: string, price: number) => {
    setCakeSize(size);
    setCakePrice(price);
  };


  const renderLeftColumn = () => {
    switch (currentStage) {
      case 1:
        return <LayerSelector onSelectLayer={handleSelectLayer} onSelectShape={setLayerShape} />;
      case 2:
        return (
          <>
           {(layerShape === 'round') && <ToppingSelector
            onSelectTopping={handleSelectTopping}
            onSelectSide={handleSelectSide}
            onSelectBottom={handleSelectBottom}
            />}

           {(layerShape === 'heart') && <ToppingHeartSelector
            onSelectTopping={handleSelectTopping}
            onSelectSide={handleSelectSide}
            onSelectBottom={handleSelectBottom}
            />}

           {(layerShape === 'square') && <ToppingSquareSelector
            onSelectTopping={handleSelectTopping}
            onSelectSide={handleSelectSide}
            onSelectBottom={handleSelectBottom}
            />}  
          </>
          
          
          
        );
      case 3:
        return (
          <DecorationSelector onSelectDecoration={handleSelectDecoration}  onSelectMidDecoration={handleSelectMidDecoration}/>
       );
      // default:
      //   return null;
    }
  };
  const finalPrice =cakePrice + (selectedDecoration ? 2 : 0) + (selectedMidDecoration ? 2 : 0);
  const renderRightColumn = () => {
    switch (currentStage) {
      case 1:
        return (
        <ColumnContainer>
        <div style={{ width: '80%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Cream Color:</ColorLabel>
        </Divider>
        </div>
         <ColorPicker
          selectedColor={layerColor}
          onColorChange={setLayerColor}
         />
         <div style={{ width: '80%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Select a Filling:</ColorLabel>
        </Divider>
        </div>
         <FillPicker
          selectedColor={fillLayerColor}
          onColorChange={setFillLayerColor}
         />
         <div style={{ width: '80%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Select The Size:</ColorLabel>
        </Divider>
        </div>
         <CakeSize selectedSize={cakeSize} onSizeChange={handleSizeChange} />
        </ColumnContainer>
        );
      case 2:
        return (
        <ColumnContainer style={{width:'100%'}}>
          <div style={{ width: '100%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Topping Color:</ColorLabel>
        </Divider>
      </div>
        <ColorPicker
        selectedColor={toppingColor}
        onColorChange={(color) => setToppingColor(color)}
      />
        <div style={{ width: '100%', margin: '0 auto' }}>
        <Divider style={{ borderColor: '#1a1a19b3' }}>
          <ColorLabel>Enter a Text:</ColorLabel>
        </Divider>
      </div>
        <FontInput
          textValue={userText}
          onTextChange={setUserText}
          onToggleFont={toggleFont}
          onColorChange={setSelectedColor}
          color={selectedColor}
        />
        
      
        </ColumnContainer>);
      case 3:
        return <ColumnContainer style={{width:'100%'}}>
         
         <CardWriting cardId="card1" onSaveMessage={handleSaveMessage} />
      <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'center', width: '100%' }}>
       <CakeButton
        onClick={captureCakeScene}
        style={{ marginRight: '1rem',border: '2px solid #6a66667a' }}
      >
        Save & Shop
      </CakeButton>
      <CakeButton
        onClick={handleOpenPopup} style={{ border: '2px solid #6a66667a' }}>Review</CakeButton>
        
     </div >
      {showReviewPopup && (
  <ReviewCake
    onClose={() => setShowReviewPopup(false)}
    onConfirm={handleConfirmPopup}
    cardMessage={cardMessage} // Pass the card message
    cakeSize={cakeSize}
    cakePrice={finalPrice}
    cakeDescription={cakeDescription}
  />
  
)}

        </ColumnContainer >;

      default:
        return null;
    }
  };
  console.log("the",cardMessage);
  

  const [cart, setCart] = useState<string[]>([]); // Store captured images
  const containerRef = useRef<HTMLDivElement | null>(null); // Reference for the whole container
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null); // Reference for WebGL renderer
  
  const context = useContext(ShopContext);
  if (!context) {
    console.error("CakeCart must be used within a ShopContextProvider");
    return null; // Return early if context is undefined
  }

  const { addCakeImage } = context;
  const fillingOptions = [
    { name: 'chocolate', color: '#AB6C53' },//#AB6C53
    { name: 'caramel', color: '#de7f3b'  },//#D2691E
    { name: 'blueberry', color: '#603d70' },
    { name: 'strawberry', color: '#E03C3E' },
  ];
  
  const getFillingNameByColor = (color: string) => {
    const filling = fillingOptions.find(option => option.color === color);
    return filling ? filling.name : 'unknown';
  };
  
  // Usage example
  const fillLayerColorName = getFillingNameByColor(fillLayerColor);
  const cakeDescription = `Its a ${numLayers} layer cake, with ${fillLayerColorName} filling, and this Topping message: (${userText})`;
  const captureCakeScene = async () => {
    if (!containerRef.current || !rendererRef.current) {
      console.error("Container or renderer is not initialized.");
      return;
    }
  
    try {
      // Step 1: Capture the WebGL content as an image
      const webglCanvas = rendererRef.current.domElement;
      const webglImage = webglCanvas.toDataURL("image/png");
  
      // Step 2: Add the WebGL image to the DOM temporarily
      const img = new Image();
      img.src = webglImage;
      img.style.position = "absolute";
      img.style.zIndex = "100";
      img.style.pointerEvents = "none"; // Prevent interaction with the image
      containerRef.current.appendChild(img);
  
      // Step 3: Capture the full HTML page with the WebGL overlay
      const htmlCanvas = await html2canvas(containerRef.current, { useCORS: true });
  
      // Step 4: Remove the temporary WebGL image
      containerRef.current.removeChild(img);
  
      // Step 5: Compress the image using canvas.toBlob
      htmlCanvas.toBlob(
        (blob) => {
          if (blob) {
            // Store the Blob in your context or state
            const compressedImageURL = URL.createObjectURL(blob);
            setCart((prevCart) => [...prevCart, compressedImageURL]);
            
            addCakeImage(compressedImageURL, cakeSize, cakePrice, cakeDescription);
            console.log(cakeDescription);
          } else {
            console.error("Error creating Blob from canvas.");
          }
        },
        "image/png",
        0.8 // Compression quality (0.1 = lowest, 1 = highest)
      );
    } catch (error) {
      console.error("Error capturing the cake scene:", error);
    }
  };
  
  


  return (
    
    <CakePageContainer>
      <Column>{renderLeftColumn()}</Column>
      <MiddleColumn>
        <GradientContainer>
        <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#22B14C', // Change primary color to #22B14C
          colorTextHeading: '#22B14C', // Change text color in headings
        },
      }}
    >
        <Steps
          size="small"
          current={currentStage - 1}
          items={[
         {
          title: 'Let\'s Start',
          
         },
        {
          title: 'Keep on Going',
        },
        {
          title: 'Good Job',
        },

       ]}
       
        style={{ width: '100%' ,margin: '0 auto'}}/></ConfigProvider>
       <ResponsiveContainer ref={containerRef} >
        <Canvas  camera={{ position: [0, 16, -22], fov: 18 }} 
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl }) => {
          rendererRef.current = gl;
      
          const canvas = gl.domElement;
          canvas.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            console.warn("WebGL context lost!!!.");
            rendererRef.current = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });
          });
      
          canvas.addEventListener("webglcontextrestored", () => {
            console.log("WebGL context restored.");
          });
        }}
      >
         
         <RotatingCake>
        
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <directionalLight position={[-10, 10, 5]} intensity={0.5} />
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
           
          <group >
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
           
            {/*////////////// Text input /////////////// */}
             {/* Text Round  */}
            {(currentStage === 3|| currentStage===2) && numLayers === 2 && layerShape === 'round' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star') && <FontSmall userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 2 && layerShape === 'round' && (selectedTopping === 'cramel' || selectedTopping === 'small' ) && <FontDripSmall userText={userText} fontType={fontType} selectedColor={selectedColor}/> }

            {(currentStage === 3|| currentStage===2) && numLayers === 3 && (layerShape === 'round') && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star') && <FontRegular userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 3 && layerShape === 'round' && (selectedTopping === 'cramel' || selectedTopping === 'small' ) && <FontDripRegular userText={userText} fontType={fontType} selectedColor={selectedColor}/> }

            {(currentStage === 3|| currentStage===2) && numLayers === 4 && layerShape === 'round' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star') && <FontLarge userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 4 && layerShape === 'round' && (selectedTopping === 'cramel' || selectedTopping === 'small' ) && <FontDripLarge userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {/* Text Square  */}
            {(currentStage === 3|| currentStage===2) && numLayers === 2 && layerShape === 'square' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star') && <FontSquareSmall userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 2 && layerShape === 'square' && (selectedTopping === 'cramel' || selectedTopping === 'small' ) && <FontSquareDripSmall userText={userText} fontType={fontType} selectedColor={selectedColor}/> }

            {(currentStage === 3|| currentStage===2) && numLayers === 3 && (layerShape === 'square' ) && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star') && <FontSquareRegular userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 3 && layerShape === 'square' && (selectedTopping === 'cramel' || selectedTopping === 'small' ) && <FontSquareDripRegular userText={userText} fontType={fontType} selectedColor={selectedColor}/> }

            {(currentStage === 3|| currentStage===2) && numLayers === 4 && layerShape === 'square' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star') && <FontSquareLarge userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 4 && layerShape === 'square' && (selectedTopping === 'cramel' || selectedTopping === 'small' ) && <FontSquareDripLarge userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {/* Text Heart  */}
            {(currentStage === 3|| currentStage===2) && numLayers === 2 && layerShape === 'heart' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star' || selectedTopping === 'small') && <FontHeartSmall userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 2 && layerShape === 'heart' && (selectedTopping === 'cramel'  ) && <FontHeartDripSmall userText={userText} fontType={fontType} selectedColor={selectedColor}/> }

            {(currentStage === 3|| currentStage===2) && numLayers === 3 && (layerShape === 'heart' ) && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star' || selectedTopping === 'small') && <FontHeartRegular userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 3 && layerShape === 'heart' && (selectedTopping === 'cramel' ) && <FontHeartDripRegular userText={userText} fontType={fontType} selectedColor={selectedColor}/> }

            {(currentStage === 3|| currentStage===2) && numLayers === 4 && layerShape === 'heart' && (selectedTopping === 'full' || selectedTopping === 'mix' || selectedTopping === 'heart' || selectedTopping === 'star' || selectedTopping === 'small' ) && <FontHeartLarge userText={userText} fontType={fontType} selectedColor={selectedColor}/> }
            {(currentStage === 3|| currentStage===2) && numLayers === 4 && layerShape === 'heart' && (selectedTopping === 'cramel' ) && <FontHeartDripLarge userText={userText} fontType={fontType} selectedColor={selectedColor}/> }

          </group>
          </RotatingCake>
          <>
          <MiniCharacter position={[4.4, 1.8, 0]} scale={0.55} rotation={[0, Math.PI / 2, 0.2]} />
          {/* <SpeechBubble
             texts={[...(currentStage === 1 ? ['"Hello There!😀"'] : []), ...(currentStage === 1 ? ['"Lets Make a Cake!"'] : []),...(currentStage === 1 ? ['"Show me Your Art"'] : []),
              ...(currentStage === 2 ? ['"Thats cool!"'] : []), ...(currentStage === 2 ? ['"Nice Coloring"'] : []),...(currentStage === 2? ['"Keep Going.."'] : []),...(currentStage === 2 ? ['"You are Talented"'] : []),
             ...(currentStage === 3 ? ['"Do Your Final Touch"'] : []),...(currentStage === 3 ? ['"Almost There!"'] : []),...(currentStage === 3 ? ['"Your cake is ready!"'] : []),]}
             position={[4.4, 3.6, 0]}
             interval={4000} // Change text every 3 seconds
             rotation={[0, 3.2, 0]}
          /> */}
         </>
        </Canvas>
        </ResponsiveContainer>
        <ButtonContainer>
      <ResponsiveCakeButton onClick={prevStage} disabled={currentStage === 1}>
        <img
          src={next}
          alt="Previous"
          style={{ transform: "rotate(180deg)" }}
        />
      </ResponsiveCakeButton>
      {currentStage !== 3 && (
  <ResponsiveCakeButton onClick={nextStage}>
    <img src={next} alt="Next" />
  </ResponsiveCakeButton>
)}
    </ButtonContainer>
        </GradientContainer>
      </MiddleColumn>
      
      <Column>{renderRightColumn()}</Column>
    </CakePageContainer>
  );
};
import next from '../../../assets/cake/ButtonIcon/right-arrow.png'
import styled from 'styled-components';

import { ReviewCake } from './ReviewCake';
import CakeSize from './CakeSize';
import EnhanceCakeImage from './EnhanceCakeImage';
export default CakeScene;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px;
  margin-top: -60px;
  @media (max-width: 600px) {
    /* flex-direction: row;
    align-items: center;
    justify-content: center; */
    width: 70%;
    top:500;
    right:-200;
    gap: 140px;
    position: relative;
    margin-top: -180px !important;
    //z-index:10000;
  }
`;

// Responsive button
const ResponsiveCakeButton = styled(CakeButton)`
  height: 60px;
  margin-top: 120px;
  border: 2px solid rgba(244, 228, 228, 0.687);

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 600px) {
    height: 50px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
const ResponsiveContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;

  @media (max-width: 768px) {
    height: 70%; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) {
    height: 70%; /* Further adjust for very small screens */
    flex-direction: column; /* Stack content vertically if needed */
    margin-top: -80px;
  }
`;

