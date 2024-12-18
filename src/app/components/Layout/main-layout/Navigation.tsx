import { SectionIdEnum } from "../../../types";
import { Box, Button, Hidden, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState } from "react";

const NavigationItems = [
  {
    text: "Offers",
    to: SectionIdEnum.offers,
  },
  {
    text: "Categories",
    to: SectionIdEnum.categories,
  },
  {
    text: "Shop",
    to: SectionIdEnum.shop,
  },
  {
    text: "Help Center",
    to: SectionIdEnum.help,
  },
];

export const Navigation = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const mappedItems = NavigationItems.map(({ text, to }) => (
    <AnchorLink key={to} href={`#${to}`} onClick={handleMenuClose}>
      <MenuItem sx={{color: "black", textDecoration: "none"}}>{text}</MenuItem>
    </AnchorLink>
  ));

  return (
    <>
      <Hidden smDown>
        <Box component="nav" sx={{ display: "flex", gap: 2 }}>
          {NavigationItems.map(({ text, to }) => (
            <AnchorLink key={to} href={`#${to}`}>
              <Button color="inherit" size="large">
                {text}
              </Button>
            </AnchorLink>
          ))}
        </Box>
      </Hidden>

      <Hidden smUp>
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
          {mappedItems}
        </Menu>
      </Hidden>
    </>
  );
};
