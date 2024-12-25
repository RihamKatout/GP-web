import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../../context";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigationContainer } from "../../../styles";
import { AuthenticationButtons, Logo, NavigationItems, UserMenuIcons } from "../../specificComponents";


export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { isLoggedIn, logoutContext } = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleLogout = () => {
    logoutContext();
    navigate("/");
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
        edge="end"
        aria-label="user menu"
        sx={{ color: "black" }}
        onClick={() => {
          if (path === "/logout") {
            handleLogout();
          } else {
            navigate(path);
          }
        }}
      >
        {icon}
      </IconButton>
    </AnchorLink>
  ));

  const mappedAuthenticationButtons = AuthenticationButtons.map(
    ({ text, Path, borderColor }) => (
      <Button
        key={Path}
        color="inherit"
        size="large"
        onClick={() => navigate(Path)}
        sx={{
          border: "3px solid",
          borderRadius: "25px",
          borderColor: borderColor,
          color: "black",
          padding: "5px 20px",
        }}
      >
        {text}
      </Button>
    )
  );

  return (
    <AppBar position="fixed" sx={{   backgroundColor:"white"  }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />

        {/* Navigation items */}
        {!isMobile && (
          // <Box component="div" sx={{ display: "flex", gap: 2 }}>
          //   {mappedNavigationItems}
          // </Box>
          <NavigationContainer>{mappedNavigationItems}</NavigationContainer>
        )}

        {/* User menu icons or register/login buttons */}
        {!isMobile && (
          <Box component="div" sx={{ display: "flex", gap: 2 }}>
            {isLoggedIn ? mappedUserIcons : mappedAuthenticationButtons}
          </Box>
        )}

        {isMobile && (
          <div>
            <IconButton
              sx={{ color: "black" }}
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
