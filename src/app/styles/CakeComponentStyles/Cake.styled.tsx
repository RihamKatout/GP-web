import styled from "styled-components";

export const CakePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.3fr 1fr; /* Default grid layout */
  height: 110vh;
  padding: 0;
  margin: 0 auto;

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 2fr 1fr; /* Slightly narrower middle column */
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* Single-column layout for small screens */
    height: auto; /* Adjust height to fit content */
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MiddleColumn = styled(Column)`
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;

  @media (max-width: 900px) {
    margin: 10px 0; /* Add margin for spacing in single-column mode */
  }
`;

export const CakeInput = styled.input`
  color: #090909;
  border: 0.2em solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  max-width: 190px;

  @media (max-width: 600px) {
    max-width: 100%; /* Full width on smaller screens */
    padding: 8px 15px; /* Adjust padding */
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;

  @media (max-width: 900px) {
    padding: 15px; /* Adjust padding for smaller screens */
  }
`;

export const CakeButton = styled.button`
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primary_dark};
  width: 7.3em;
  height: 4.6em;
  border: 1px solid rgba(217, 217, 217, 0.5);
  border-radius: 15px;
  text-align: center;
  transition: all 0.6s ease;
  font-weight: bold;
  font-size: 1rem;
  font-family: 'Overlock', sans-serif;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
    0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
    0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

  &:hover {
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.028) inset;
  }

  @media (max-width: 600px) {
    width: 100%; /* Full width for smaller screens */
    height: auto; /* Adjust height */
    font-size: 0.9rem; /* Adjust font size */
  }
`;
