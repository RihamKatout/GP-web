import { Card, CardMedia, styled } from "@mui/material";

// Store Category card styles
// This card  contains only title and image
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

export const StyledCategoryCardMedia = styled(CardMedia)(({ theme }) => ({
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
// end of store category card ----------------------------------------------

// Product category card style
export const ProductCardStyle = styled("div")(({ theme }: { theme: any }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "1rem",
  width: "300px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
  },

  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "1rem",
  },

  h2: {
    fontSize: "1.25rem",
    color: "#333",
    margin: "0.5rem 0",
  },

  p: {
    fontSize: "1rem",
    color: "#555",
    margin: "0.25rem 0",
  },

  "p:last-child": {
    fontWeight: "bold",
    color: theme.isAvailable ? "green" : "red", // Access theme directly
  },
}));
// end of product styles ---------------------------------------------------
