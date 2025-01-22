import { styled } from "@mui/material";

export const FiltersContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "1rem",
  padding: "1rem",
  backgroundColor: "#f9f9f9",
  border: "1px solid #ddd",
  borderRadius: "8px",
  marginBottom: "1.5rem",
  alignItems: "center",
  "& input, & select, & button": {
    padding: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
  },

  "& input": {
    flex: 1,
    maxWidth: "200px",
  },

  "& select": {
    flex: 1,
    maxWidth: "150px",
  },

  "& button": {
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.2s",

    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
}));
