import React from "react";
import { SectionIdEnum } from "../../../types";
import { Box, Container, Toolbar } from "@mui/material";

export type SectionContainerProps = {
  children: React.ReactNode;
  sectionId: SectionIdEnum;
};
export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  sectionId,
}) => {
  return (
    <div
      id={sectionId}
      key={sectionId}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Container
        style={{
          padding: "0",
          width: "100%",
          maxWidth: "100vw", 
        }}
      >
        <Toolbar />
        <Box component={"section"} minHeight={"100vh"}>
          {children}
        </Box>
      </Container>
    </div>
  );
};
