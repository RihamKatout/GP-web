import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  span {
    font-size: 1rem;
    color: #555;
  }
`;

export const PaginationButton = styled.button`
  background-color: rgb(235, 213, 245);
  color: black;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(221, 149, 255);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;