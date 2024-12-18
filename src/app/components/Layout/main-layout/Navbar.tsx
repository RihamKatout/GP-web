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
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../../context/AuthContext";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

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
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const mappedNavigationItems = NavigationItems.map(({ text, to }) => (
    <AnchorLink key={to} href={`#${to}`}>
      <Button color="inherit" size="large">
        {text}
      </Button>
    </AnchorLink>
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
              {NavigationItems.map(({ text, to }) => (
                <AnchorLink key={to} href={`#${to}`} onClick={handleMenuClose}>
                  <MenuItem>{text}</MenuItem>
                </AnchorLink>
              ))}
              {isLoggedIn
                ? UserMenuIcons.map(({ icon, text, path }) => (
                    <MenuItem onClick={() => navigate(path)}>
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
