import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled("div")({
  width: "40%",
  height: "2.2rem",
  display: "flex",
  alignItems: "center",
  borderRadius: "0.5rem",
  padding: "0.2rem",
  boxShadow: "0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5)",
  border: "1px solid rgba(115, 109, 109, 0.338)",
  "&:focus": {
    outline: "none",
  },
});

const SearchInput = styled("input")({
  flex: 1,
  border: "none",
  fontSize: "1rem",
  width: "90%",
});

export const SearchField = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="search ... " />
      <SearchIcon />
    </SearchContainer>
  );
};
