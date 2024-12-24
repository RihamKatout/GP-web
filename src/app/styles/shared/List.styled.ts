import { styled, Box } from "@mui/material";

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: theme.spacing(3),
  justifyContent: "center",
  gap: theme.spacing(3),
}));
