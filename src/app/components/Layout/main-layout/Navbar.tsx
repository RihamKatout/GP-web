import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { logoImg } from "../../../../assets";
import { Navigation } from "./Navigation";

const Logo = (
  <Box component="div" flexGrow={1}>
    {/* TODO: navigate to offers section from here */}
    <AnchorLink>
      <Box component="div" display="flex" alignItems="center" gap={1}>
        <img width="60px" height="40px" src={logoImg} alt="logo" />
        <Typography variant="h5" sx={{ width: "fit-content" }}>
          Designify
        </Typography>
      </Box>
    </AnchorLink>
  </Box>
);

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        {Logo}
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
