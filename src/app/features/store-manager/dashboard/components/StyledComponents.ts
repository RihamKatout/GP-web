import styled from "styled-components";

export const DashboardCard = styled.div`
  gap: 1rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  background-color: ${({ theme }) => theme.colors.gray_light};
  h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary_dark};
  }
  span {
    margin-left: 0.3rem;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.8rem;
  }
  svg {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const VerticalContainer = styled.div`
  gap: 0.5rem;
  align-items: center;
  min-height: 250px;
  flex-direction: column;
  justify-content: flex-start;
  .lowStock {
    width: 100%;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 5fr 1fr;
    grid-template-rows: 1fr;
    .productName {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const CategorySelect = styled("select")({
  padding: "0.1rem",
  borderRadius: "0.5rem",
  border: "2px solid #1b1a1a",
});
