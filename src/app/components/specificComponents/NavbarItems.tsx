import { SectionIdEnum } from "../../types";

import { logoImg } from "../../../assets";
import { useNavigate } from "react-router-dom";

import favoriteImg from "../../../assets/Icons/heart.png";
import cartImg from "../../../assets/Icons/cart.png";
import personImg from "../../../assets/Icons/person.png";
import bellImg from "../../../assets/Icons/bell.png";
import doorImg from "../../../assets/Icons/door.png";
import styled from "styled-components";

export const NavigationItems = [
  { text: "Home", to: SectionIdEnum.home },
  { text: "Offers", to: SectionIdEnum.offers },
  { text: "Categories", to: SectionIdEnum.categories },
  { text: "Stores", to: SectionIdEnum.shop },
  { text: "Help Center", to: SectionIdEnum.help },
];

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      height="38px"
      src={logoImg}
      alt="logo"
      onClick={() => {
        if (location.pathname !== "/") {
          navigate("/");
        }
        const section = document.getElementById(SectionIdEnum.home);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }}
      style={{ cursor: "pointer" }}
    />
  );
};

const StyledIcon = styled.img`
  height: 27px;
  max-width: 27px;
  @media (max-width: 600px) {
    height: 25px;
    width: 25px;
    margin-right: 0.5rem;
  }
`;
export const UserMenuIcons = [
  {
    icon: <StyledIcon src={bellImg} alt="Notifications" />,
    text: "Notifications",
    path: "/offerPage",
  },
  {
    icon: <StyledIcon src={personImg} alt="Profile" />,
    text: "Profile",
    path: "/profile",
  },
  {
    icon: <StyledIcon src={cartImg} alt="Cart" />,
    text: "Cart",
    path: "/cart",
  },
  {
    icon: <StyledIcon src={favoriteImg} alt="Favorite" />,
    text: "Wishlist",
    path: "/wishlist",
  },
  {
    icon: <StyledIcon src={doorImg} alt="Logout" />,
    text: "Logout",
    path: "/logout",
  },
];

export const AuthenticationButtons = [
  { text: "Login", Path: "/login" },
  { text: "Register", Path: "/register" },
];
