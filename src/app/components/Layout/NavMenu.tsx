import React from 'react';
import {
    PaddingContainer,
    FlexContainer,
} from '../../styles/Global.styled';

import { AiOutlineClose } from 'react-icons/ai';
import { MenuIcon, NavMenuContainer , MenuItem} from '../../styles/Navbar.styled';

interface NavMenuProps {
    setOpenMenu: (open: boolean) => void; // Explicitly typing setOpenMenu
}

const NavMenu: React.FC<NavMenuProps> = ({ setOpenMenu }) => {
    return (
        <NavMenuContainer>
            {/*--close button-- */}
            <PaddingContainer left='5%' right='5%' top='2rem'>
                <FlexContainer justify='flex-end' responsiveFlix>
                    <MenuIcon onClick={() => setOpenMenu(false)}>
                        <AiOutlineClose />
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

            {/*--menu item-- */}
            <PaddingContainer top='8%'>
                <FlexContainer direction='column' align='center' responsiveFlix>
                    <MenuItem>Home</MenuItem>
                </FlexContainer>

            </PaddingContainer>
        </NavMenuContainer>
    );
};

export default NavMenu;
