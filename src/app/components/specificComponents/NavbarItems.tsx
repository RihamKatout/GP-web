import { SectionIdEnum } from "../../types";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoImg } from "../../../assets";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

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

export const UserMenuIcons = [
  {
    icon: <FavoriteIcon />,
    text: "Wishlist",
    path: "/wishlist",
  },
  {
    icon: <ShoppingCartIcon />,
    text: "Cart",
    path: "/cart",
  },
  {
    icon: <AccountCircle />,
    text: "Profile",
    path: "/profile",
  },
  {
    icon: <NotificationsActiveIcon />,
    text: "Notifications",
  },
  {
    icon: <LogoutIcon />,
    text: "Logout",
    path: "/logout",
  },
];

export const AuthenticationButtons = [
  { text: "Login", Path: "/login", borderColor: "rgb(0, 0, 0)" },
  { text: "Register", Path: "/register", borderColor: "rgb(0, 0, 0)" },
];
