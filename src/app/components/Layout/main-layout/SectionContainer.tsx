import React from "react";
import { SectionIdEnum } from "../../../types";
import { Box, Container } from "@mui/material";

export type SectionContainerProps = {
  children: React.ReactNode;
  sectionId: SectionIdEnum;
};
export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  sectionId,
}) => {
  return (
    <div id={sectionId} key={sectionId}>
      <Container>
        <Box component={"section"} minHeight={"100vh"}>
          {children}
        </Box>
      </Container>
    </div>
  );
};

