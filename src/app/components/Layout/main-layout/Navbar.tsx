import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { logoImg } from "../../../../assets";
import { SectionIdEnum } from "../../../types";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../../context/AuthContext";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";

const Logo = (
  <Box component="div" flexGrow={1}>
    {/* TODO: navigate to offers section from here */}
    <AnchorLink>
      <Box
        component="div"
        display="flex"
        alignItems="center"
        gap={1}
        width="min-content"
      >
        <img width="60px" height="40px" src={logoImg} alt="logo" />
        <Typography variant="h5" sx={{ width: "min-content" }}>
          Designify
        </Typography>
      </Box>
    </AnchorLink>
  </Box>
);

const NavigationItems = [
  { text: "Offers", to: SectionIdEnum.offers },
  { text: "Categories", to: SectionIdEnum.categories },
  { text: "Shop", to: SectionIdEnum.shop },
  { text: "Help Center", to: SectionIdEnum.help },
];

const UserMenuIcons = [
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
    icon: <LogoutIcon />,
    text: "Logout",
    path: "/logout",
  },
];

const AuthenticationButtons = [
  { text: "Login", Path: "/login" },
  { text: "Register", Path: "/register" },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { isLoggedIn } = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const mappedNavigationItems = NavigationItems.map(({ text, to }) => (
    <Button
      key={to}
      color="inherit"
      size="large"
      onClick={() => {
        if (location.pathname !== "/") {
          navigate("/");
        } else {
          const section = document.getElementById(to);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }}
    >
      {text}
    </Button>
  ));

  const mappedUserIcons = UserMenuIcons.map(({ icon, path }) => (
    <AnchorLink key={path}>
      <IconButton
        color="inherit"
        edge="end"
        aria-label="user menu"
        onClick={() => navigate(path)}
      >
        {icon}
      </IconButton>
    </AnchorLink>
  ));

  const mappedAuthenticationButtons = AuthenticationButtons.map(
    ({ text, Path }) => (
      <Button
        key={Path}
        color="inherit"
        size="large"
        onClick={() => navigate(Path)}
      >
        {text}
      </Button>
    )
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>{Logo}</div>

        {/* Navigation items */}
        {!isMobile && (
          <Box component="div" sx={{ display: "flex", gap: 2 }}>
            {mappedNavigationItems}
          </Box>
        )}

        {/* User menu icons or register/login buttons */}
        {!isMobile && (
          <Box component="div" sx={{ display: "flex" }}>
            {isLoggedIn ? mappedUserIcons : mappedAuthenticationButtons}
          </Box>
        )}

        {isMobile && (
          <div>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleMenuOpen}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              {mappedNavigationItems.map((item, index) => (
                <MenuItem key={index} onClick={() => handleMenuClose()}>
                  {item}
                </MenuItem>
              ))}
              {isLoggedIn
                ? UserMenuIcons.map(({ icon, text, path }) => (
                    <MenuItem
                      onClick={() => navigate(path)}
                      style={{ padding: "0 26px" }}
                    >
                      {icon}
                      {text}
                    </MenuItem>
                  ))
                : AuthenticationButtons.map(({ text, Path }) => (
                    <MenuItem
                      key={Path}
                      onClick={() => {
                        handleMenuClose();
                        navigate(Path);
                      }}
                      style={{ padding: "0 28px" }}
                    >
                      {text}
                    </MenuItem>
                  ))}
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
