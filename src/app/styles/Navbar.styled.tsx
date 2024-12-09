import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.navBackground};
  color: ${({ theme }) => theme.colors.black};
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: #0e0d0d;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background-color: ${({ theme }) => theme.colors.dropdownBackground};
  border: 1px solid ${({ theme }) => theme.colors.dropdownBorder};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dropdownText};

    &:hover {
      color: ${({ theme }) => theme.colors.dropdownHover};
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: #111010;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  &:active {
    transform: traslateY(3rem);
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

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
`;
