import { Card, CardMedia, styled } from "@mui/material";

// Category card styles
// This card  contains only title and image
export const StyledCategoryCard = styled(Card)<{
  type?: string;
  imageurl?: string;
}>(({ theme, type, imageurl }) => ({
  width: type === "STORE" ? "140px" : "60px",
  height: type === "STORE" ? "130px" : "60px",
  textAlign: "center",
  borderRadius: type === "STORE" ? "25px" : "50%",
  background:
    type === "STORE"
      ? "linear-gradient(45deg,rgb(255, 193, 197),rgb(195, 215, 255))"
      : imageurl
      ? `url(${imageurl}) center/cover no-repeat`
      : `url(https://drive.google.com/thumbnail?id=12DXmxY3D4Oar8f1XJphR0dzEpSoo-T1_) center/cover no-repeat`,
  transition: "all 0.1s ease",
  opacity: 0,
  transform: "translateY(20px) perspective(1000px)",
  transformStyle: "preserve-3d",
  boxShadow: type === "STORE"?
    "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),	0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,	0 0.25rem 0.5rem 0 rgba(145, 171, 210, 0.55) inset"
    : "2px 2px 25px rgba(0, 0, 0, 0.17)", 
  "&.visible": {
    opacity: 1,
    transform: "translateY(0) perspective(1000px)",
  },
  "&:hover": {
    transform: "scale(1.1) perspective(1000px) rotateY(10deg)",
    boxShadow: "8px 14px 30px rgba(0, 0, 0, 0.2)",
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
  fontFamily: "Delius",
  fontSize: "1.1rem",
  margin: "-0.6rem 0",
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
