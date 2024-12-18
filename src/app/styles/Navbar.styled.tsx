import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
     background-color: ${({ theme }) => theme.colors.background || "white"};
     color: ${({ theme }) => theme.colors.text || "black"};
     /* transition: background-color 0.2s, color 0.2s; */
     position: sticky;
     top:0;
     z-index: 1000;
    
    /* top: 0;
    left:0; */
    
` 

export  const Logo = styled.p `
    font-size: 1.7rem;
    font-weight: ${({theme}) => theme.fonts.weight.medium};
    color: #0e0d0d;
`

export const MenuIcon = styled.a `
    color: ${({theme}) => theme.colors.secondary};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
`
export const MenuLink = styled(Link)`
text-decoration: none;
font-size: 1.7rem;
font-weight: ${({theme}) => theme.fonts.weight.medium};
color: #111010;
display: flex;
justify-content: space-between;
align-items: center;

transition: all .2s ease;

&:hover {
    color:${({theme}) => theme.colors.secondary};
    transform: traslateY(-3rem);

}
&:active {
    transform: traslateY(3rem);
    color: ${({theme}) => theme.colors.secondary};
}
@media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: none;
    }

`

export const NavMenuContainer=styled.div`
    position: fixed;
    top:0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({theme})=> theme.colors.primary_light};
    z-index:1 ;

`
export const MenuItem = styled.a`
    color: #ffff;
    font-size: 2.5rem;
    margin-top: 3rem;
    cursor: pointer;
    text-decoration:none ;
`
    
export const ShopNavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  top: 90px; /* Position it below the Navbar */
  z-index: 5;
`;

export const ShopLink = styled(Link)`
  margin-right: 50px;
  display: flex;
  align-items: center;
`