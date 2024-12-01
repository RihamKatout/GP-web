
import React from 'react';
//import ReactDOM  from 'react-dom/client';
//import NxWelcome from './nx-welcome';
import { Container, MainBody, Button } from './styles/Global.styled';

import { ThemeProvider } from 'styled-components';
import {Theme} from './utils/Theme'
//import component
import Showcase from './components/Showcase';
import Navbar from './components/Navbar';
import CakeScene from './components/Cake3D/CakeComponent';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Shops from './components/Shops/Shops';
import {Cart} from './components/Cart/Cart';
import ShopNavbar from './components/ShopNavbar';
import { ShopContextProvider } from './components/Context/ShopContext';
//import Strawberry from './components/Cake3D/Strawberry';

import Apptry from '../Apptry'
//import CreamTopping from './Topping';

export function App() {

  
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/cake'); // Navigate to the CakeScene route
  };

  return (
    <ThemeProvider theme={Theme}>
      
      <Navbar />
      

      <ShopContextProvider>
      
      <Routes>
      

        {/* Route for the main page with Showcase and Navbar */}
        <Route 
        
          path="/" 
          element={
            <MainBody>
              
              <Container>
                <Showcase />
              </Container>
              
              
              <Apptry></Apptry>
              <Button onClick={handleButtonClick}>Click</Button>
            </MainBody>
          }
        />

        <Route path="/shops" element={
          <MainBody>
             <ShopNavbar />
             <Shops />
          </MainBody>
          
          
          } />
        <Route path="/cart" element={
          <MainBody>
             <ShopNavbar />
             <Cart/>
          </MainBody>
          
          } />

        {/* Route for the CakeScene page only */}
        <Route path="/cake"
         element={
          <MainBody>
            
            
            
            <CakeScene></CakeScene>
          </MainBody>
         } />
      </Routes>
      </ShopContextProvider>
      
    </ThemeProvider>
  );
}

export default App;
