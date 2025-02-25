import { Divider } from "antd";
import Contact from "../../../SweetTouches/component/Contact";
import styled from "styled-components";

// TODO: fix
export const HelpCenterSection = () => {
  return (
    <Container>
      <Divider style={{ borderColor: "#1a1a19b3" }}>
        <h1>Contact Us</h1>
      </Divider>
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  h1 {
    margin: 0;
    font-family: "DynaPuff";
    font-weight: 400;
    font-size: 3.7rem;
    color: rgb(27, 26, 52);
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;
