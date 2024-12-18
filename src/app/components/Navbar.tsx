import React, {  useState } from 'react';

import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
// import {Theme} from '../utils/Theme';
import {
    FlexContainer,
    PaddingContainer,
    Container,
} from '../styles/Global.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
    NavbarContainer,
    Logo,
    MenuIcon,
    MenuLink
} from '../styles/Navbar.styled';
import NavMenu from './Layout/NavMenu';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    // const [sticky,setSticky] = useState(false);

    // useEffect(() => {
    //   //onScroll function
    //   const onScroll = () =>{
    //     window.pageYOffset >50 ? setSticky(true): setSticky(false)
    //   } 
    //   window.addEventListener('scroll',onScroll);
    //   return () => window.removeEventListener('scroll',onScroll);
    // } , []);
    const navigate = useNavigate(); // Hook for navigation

    const handleHomeClick = () => {
        navigate('/'); // Navigate to home page
    };
    const handleShopeClick = () => {
        navigate('/shops'); // Navigate to home page
    };

    return (
        <NavbarContainer >
            <PaddingContainer top='1.2rem' bottom='1.2rem' responsiveLeft='1rem' responsiveRight='1rem'>
                <Container>
                    <FlexContainer justify='space-between' responsiveFlix>
                        {/*--left logo--*/}
                        <Logo>DESIGNIFY</Logo>

                        <MenuLink onClick={handleHomeClick} to="/">
                            Home
                        </MenuLink>
                        <MenuLink onClick={handleHomeClick} to="/about">
                            About
                        </MenuLink>
                        <MenuLink onClick={handleShopeClick} to="/shops">
                            Shops
                        </MenuLink>

                        {/* --right menu icon-- */}
                        <MenuIcon onClick={() => setOpenMenu(true)}>
                            <GiHamburgerMenu />
                        </MenuIcon>
                    </FlexContainer>
                </Container>
                {openMenu && <NavMenu setOpenMenu = {setOpenMenu} />}
            </PaddingContainer>
        </NavbarContainer>
    );
};

export default Navbar;
