import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  img {
    width: 20vw;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    padding: 2rem;
    img {
      width: 60vw;
    }
    div {
      text-align: center;
    }
  }
`;

export const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src="src/assets/empty-cart.png" alt="Empty Cart" />
      <div>
        <h1 style={{ marginBottom: "2rem" }}>Your cart is empty</h1>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate("/")}
        >
          Shop now
        </Button>
      </div>
    </Container>
  );
};
