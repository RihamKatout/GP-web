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
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../../context";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigationContainer } from "../../../styles";
import {
  AuthenticationButtons,
  Logo,
  NavigationItems,
  UserMenuIcons,
} from "../../specificComponents";
import styled from "styled-components";

// TODO: handle notifications
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
          setTimeout(() => {
            const section = document.getElementById(to);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }, 200);
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

  const mappedUserIcons = UserMenuIcons.map(({ icon, path }, index) => (
    <IconButton
      edge="end"
      aria-label="user menu"
      sx={{ color: "black" }}
      key={index}
      onClick={() => {
        if (path === "/logout") {
          handleLogout();
        } else {
          if (path) navigate(path);
        }
      }}
    >
      {icon}
    </IconButton>
  ));

  const mappedAuthenticationButtons = AuthenticationButtons.map(
    ({ text, Path }) => (
      <AuthButtons
        type={Path === "/login" ? "primary" : "black"}
        key={Path}
        onClick={() =>
          navigate(Path, {
            state: { from: window.location.pathname },
          })
        }
      >
        <p>{text}</p>
      </AuthButtons>
    )
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: " 0px 2px 4px rgba(0, 15, 53, 0.2)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />

        {/* Navigation items */}
        {!isMobile && (
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
                      onClick={() => {
                        if (path) navigate(path);
                      }}
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

const AuthButtons = styled.div<{ type: "primary" | "black" }>`
  width: 90px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  height: fit-content;
  padding: 0.2rem 1rem;
  color: ${({ theme, type }) =>
    type === "black" ? theme.colors.white : theme.colors.black};
  background-color: ${({ theme, type }) =>
    type === "primary" ? "transparent" : theme.colors.secondary};
  border: ${({ theme, type }) =>
    type === "primary"
      ? `3px solid ${theme.colors.secondary}`
      : `3px solid ${theme.colors.secondary}`};
  p {
    margin: 0;
  }
`;
