import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled("div")({
  width: "100%",
  height: "2.2rem",
  border: "1px solid #000",
  display: "flex",
  alignItems: "center",
  borderRadius: "0.2rem",
  padding: "0.2rem",
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
      <SearchInput type="text" placeholder="search ... "/>
      <SearchIcon/>
    </SearchContainer>
  );
};
