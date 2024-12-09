import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  Logo,
  LinksContainer,
  MenuLink,
  ProfileDropdown,
  ProfileMenu,
} from "../../styles/Navbar.styled";
import { useAuth } from "../../context/AuthContext";

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const { logoutContext } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo to="/">Designify</Logo>

      <LinksContainer>
        <MenuLink to="/">Offers</MenuLink>
        <MenuLink to="/">Categories</MenuLink>
        <MenuLink to="/">Shop now</MenuLink>
        <MenuLink to="/">Help center</MenuLink>
      </LinksContainer>

      <LinksContainer>
        {isLoggedIn ? (
          <ProfileMenu onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img
              src="/profile-icon.png"
              alt="Profile"
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
            {dropdownOpen && (
              <ProfileDropdown>
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link onClick={logoutContext} to={"/"}>
                  Logout
                </Link>
              </ProfileDropdown>
            )}
          </ProfileMenu>
        ) : (
          <>
            <MenuLink to="/login">Login</MenuLink>
            <MenuLink to="/register">Register</MenuLink>
          </>
        )}
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
