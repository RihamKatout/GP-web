import { Card, CardMedia, styled, Box } from "@mui/material";

// Category card styles
export const StyledCategoryCard = styled(Card)(({ theme }) => ({
  width: "140px",
  height: "160px",
  textAlign: "center",
  borderRadius: "25px",
  background: "linear-gradient(135deg, rgb(216, 249, 225), rgb(235, 213, 245))",
  transition: "opacity 0.6s ease, transform 0.6s ease",
  opacity: 0, 
  transform: "translateY(20px)", 
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "120px",
    height: "160px",
  },
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 80,
  height: 70,
  objectFit: "fill",
  margin: "auto",
  marginTop: theme.spacing(2),
}));

export const CategoryCardTitle = styled("h3")(({ theme }) => ({
  fontWeight: "700",
  fontFamily: "Delius Swash Caps",
  fontSize: "1.3rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

export const CategoriesGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: theme.spacing(3),
  justifyContent: "center",
  gap: theme.spacing(3),
}));
