import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box component="section" height="100vh">
      <Navbar />
      <Box component="section">
        {children}
      </Box>
    </Box>
  );
};
