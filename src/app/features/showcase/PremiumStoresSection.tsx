import { Carousel } from "antd";
import bunny from "../../../assets/characters/Bunny.png";
import cat from "../../../assets/characters/cat.png";
import bear from "../../../assets/characters/Bear.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const PremiumStoresSection = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Carousel autoplay>
        <div>
          <HeroContainer>
            <div className="content">
              <div className="text-section">
                <h1>
                  GO TO <span>Shop Accessories</span> !!
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio.
                </p>
                <button onClick={() => navigate("/cake")}>Shop Now!</button>
              </div>
              <div className="video-section">
                <img
                  src={bunny}
                  style={{ maxWidth: "780px", height: "auto" }}
                />
              </div>
            </div>
          </HeroContainer>
        </div>

        {/* Additional Slides */}
        <div>
          <HeroContainer>
            <div className="content">
              <div className="text-section">
                <h1>
                  GO TO <span>Shop Accessories</span> !!
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio.
                </p>
                <button onClick={() => navigate("/cake")}>Shop Now!</button>
              </div>
              <div className="video-section">
                <img src={cat} style={{ maxWidth: "800px", height: "auto" }} />{" "}
              </div>
            </div>
          </HeroContainer>
        </div>
        <div>
          <HeroContainer>
            <div className="content">
              <div className="text-section">
                <h1>
                  GO TO <span>Shop Accessories</span> !!
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio.
                </p>
                <button onClick={() => navigate("/cake")}>Shop Now!</button>
              </div>
              <div
                className="video-section"
                style={{ maxWidth: "550px", marginLeft: "120px" }}
              >
                <img src={bear} style={{ maxWidth: "780px", height: "auto" }} />
              </div>
            </div>
          </HeroContainer>
        </div>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
    width: 20vw;
    height: auto;
    padding: 1rem;
    border-right: 2px solid black;
`;

const HeroContainer = styled.div`
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text || "#000"};
  transition: 0.2s;
  padding: 20px;

  .content {
    display: grid;
    grid-template-columns: 1fr; /* Single column for small screens */
    gap: 10px;
    align-items: center;
    text-align: left;

    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
    }
  }

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-left: 100px;
    width: 80%;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-top: 40px;
      font-family: "Delius Swash Caps",  serif;
      span {
        color: ${({ theme }) => theme.colors.primary || "#e63946"};
      }
    }

    p {
      font-size: 1.2rem;
      line-height: 1.5;
      font-family: "Overlock", serif;
    }

    button {
      border-radius: 15px;
      width: 200px;
      padding: 10px;
      color: #2b2929;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 20px;
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
        0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
        0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
          0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
          0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
      }
    }
  }
  .video-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: fit-content;
    margin-top: 120px;

    .dotlottie-container {
      max-width: 100px;
      width: 90%;
    }
  }
`;
