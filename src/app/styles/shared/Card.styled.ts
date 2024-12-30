import { Card, CardMedia, styled } from "@mui/material";

// Category card styles
// This card  contains only title and image
export const StyledCategoryCard = styled(Card)<{
  type?: string;
  imageurl?: string;
}>(({ theme, type, imageurl }) => ({
  width: type === "STORE" ? "140px" : "70px",
  height: type === "STORE" ? "160px" : "70px",
  textAlign: "center",
  borderRadius: type === "STORE" ? "25px" : "50%",
  border: type === "STORE" ? "" : "1px solid rgb(252, 210, 247)",
  background:
    type === "STORE"
      ? "linear-gradient(135deg, rgb(216, 249, 225), rgb(235, 213, 245))"
      : imageurl
      ? `url(${imageurl}) center/cover no-repeat`
      : `url(https://drive.google.com/thumbnail?id=12DXmxY3D4Oar8f1XJphR0dzEpSoo-T1_) center/cover no-repeat`,
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
    width: type === "STORE" ? "120px" : "60px",
    height: type === "STORE" ? "160px" : "60px",
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
  padding: "0.5rem",
  width: "200px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
  },

  img: {
    height: "100px",
    objectFit: "fit",
    borderRadius: "4px",
    marginBottom: "1rem",
  },

  h2: {
    fontSize: "1.1rem",
    color: "#333",
    margin: "0.5rem 0",
  },

  p: {
    fontSize: "0.9rem",
    color: "#555",
    margin: "0.25rem 0",
  },

  "p:last-child": {
    fontWeight: "bold",
    color: theme.isAvailable ? "green" : "red", // Access theme directly
  },
}));
// end of product styles ---------------------------------------------------
