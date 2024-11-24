import React from 'react'

import { ShoppingCart } from 'phosphor-react'

import { MenuIcon , ShopNavbarContainer , MenuLink} from '../styles/Navbar.styled'
import { Container, FlexContainer } from '../styles/Global.styled'

const ShopNavbar = () => {
  return (
    <ShopNavbarContainer>
        <Container>
     <FlexContainer justify='space-between' responsiveFlix>
      
        <MenuLink to="/shops"> Shop </MenuLink>
        
        <MenuLink to="/cart">
          <MenuIcon>
          <ShoppingCart size={32} />
            </MenuIcon>
        </MenuLink>
     </FlexContainer>
     </Container>
    </ShopNavbarContainer>
  )
}

export default ShopNavbar
