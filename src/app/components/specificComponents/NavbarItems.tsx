import { SectionIdEnum } from "../../types";

import { logoImg } from "../../../assets";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//import Favorite from '../../assets/icons/Favorite';
export const NavigationItems = [
  { text: "Home", to: SectionIdEnum.home },
  { text: "Offers", to: SectionIdEnum.offers },
  { text: "Categories", to: SectionIdEnum.categories },
  { text: "Shop", to: SectionIdEnum.shop },
  { text: "Help Center", to: SectionIdEnum.help },
];

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      gap={1}
      width="fit-content"
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
    >
      <img width="60px" height="40px" src={logoImg} alt="logo" />
      <Typography
        variant="h5"
        sx={{ width: "min-content", fontFamily: "DynaPuff", color: "black" }}
      >
        Designify
      </Typography>
    </Box>
  );
};

import favoriteImg from "../../../assets/Icons/heart.png"; // Adjust path as needed
import cartImg from "../../../assets/Icons/cart.png";
import personImg from "../../../assets/Icons/person.png";
import bellImg from "../../../assets/Icons/bell.png";
import doorImg from "../../../assets/Icons/door.png";


export const UserMenuIcons = [
  {
    icon: (<div
      style={{
        width: 35, // Fixed container size
        height: 35,
        overflow: "hidden", // Cuts off the extra image
        position: "relative",
      }}
    >
      <img
        src={favoriteImg}
        alt="Favorite"
        style={{
          width: "110px", // Scale image larger
          height: "68px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the image
          objectFit: "cover",
        }}
      />
    </div>
),
    text: "Wishlist",
    path: "/wishlist",
  },
  {
    icon:(<div
      style={{
        width: 35, // Fixed container size
        height: 35,
        overflow: "hidden", // Cuts off the extra image
        position: "relative",
      }}
    >
      <img
        src={cartImg}
        alt="Cart"
        style={{
          width: "110px", // Scale image larger
          height: "70px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the image
          objectFit: "cover",
        }}
      />
    </div>
),
    text: "Cart",
    path: "/cart",
  },
  {
    icon: (<div
      style={{
        width: 35, // Fixed container size
        height: 45,
        overflow: "hidden", // Cuts off the extra image
        position: "relative",
      }}
    >
      <img
        src={personImg}
        alt="Profile"
        style={{
          width: "100px", // Scale image larger
          height: "40px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the image
          objectFit: "cover",
        }}
      />
    </div>),
    text: "Profile",
    path: "/profile",
  },
  {
    icon: (<div
      style={{
        width: 35, // Fixed container size
        height: 35,
        overflow: "hidden", // Cuts off the extra image
        position: "relative",
      }}
    >
      <img
        src={bellImg}
        alt="Notifications"
        style={{
          width: "110px", // Scale image larger
          height: "70px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the image
          objectFit: "cover",
        }}
      />
    </div>),
    text: "Notifications",
  },
  {
    icon: (<div
      style={{
        width: 25, // Fixed container size
        height: 45,
        overflow: "hidden", // Cuts off the extra image
        position: "relative",
      }}
    >
      <img
        src={doorImg}
        alt="Logout"
        style={{
          width: "50px", // Scale image larger
          height: "55px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the image
          objectFit: "cover",
        }}
      />
    </div>),
    text: "Logout",
    path: "/logout",
  },
];

export const AuthenticationButtons = [
  { text: "Login", Path: "/login", borderColor: "rgb(0, 0, 0)" },
  { text: "Register", Path: "/register", borderColor: "rgb(0, 0, 0)" },
];
