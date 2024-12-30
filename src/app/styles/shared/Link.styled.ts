import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderLinkProps {
  fontFamily?: string;
}

export const HeaderLink = styled(Link)<HeaderLinkProps>`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  font-size: 2.2rem;
  font-weight: 400;
  font-family: ${(props) => props.fontFamily || "Arial, sans-serif"};
  &:hover {
    color: #0066cc;
  }
`;
