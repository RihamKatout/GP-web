import styled from "styled-components";

// Define prop interfaces
interface PaddingProps {
  top?: string | undefined;
  bottom?: string | undefined;
  left?: string | undefined;
  right?: string | undefined;
  responsiveRight?: string | undefined;
  responsiveLeft?: string | undefined;
  responsiveBottom?: string | undefined;
  responsiveTop?: string | undefined;
}

interface FlexProps {
  justify?: string;
  align?: string;
  gap?: string;
  direction?: string;
  fullWidthChild?: boolean;
  responsiveFlix?: boolean;
  responsiveDirection?: string;
}

export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;
`;
export const PaddingContainer = styled.div<PaddingProps>`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveLeft }) => responsiveLeft};
    padding-right: ${({ responsiveRight }) => responsiveRight};
  }
`;
export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ responsiveFlix }) => (responsiveFlix ? "flex" : "block")};
    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
  }
`;
export const Heading = styled(PaddingContainer)<{
  size?: string;
  align?: string;
}>`
  color: #201e1ed2;
  text-align: ${({ align }) => align};
  font-family: "Poppins", sans-serif;
  font-size: ${({ size }) => {
    switch (size) {
      case "h1":
        return "4.5rem";

      case "h2":
        return "3rem";

      case "h3":
        return "2rem";

      case "h4":
        return "1.2rem";

      default:
        return;
    }
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ size }) => {
      switch (size) {
        case "h1":
          return "2.5rem";

        case "h2":
          return "2rem";

        case "h3":
          return "1.5rem";

        case "h4":
          return "1rem";

        default:
          return;
      }
    }};
  }
`;

export const BlueText = styled.span`
  color: #e38e8e;
`;

export const ParaText = styled(PaddingContainer)`
  color: #201e1ed2;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
`;

export const IconContainer = styled.div<{ size?: string; color?: string }>`
  font-size: ${({ size }) => size};
  cursor: pointer;
  color: ${({ color, theme }) => {
    switch (color) {
      case "white":
        return theme.colors.white;

      case "pink":
        return "#e38e8e";

      default:
        return;
    }
  }};
`;

export const Button = styled.button<{
  bigRadius?: boolean;
  primary?: boolean;
  big?: boolean;
  bigFont?: boolean;
}>`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")};
  background-color: ${({ primary }) => (primary ? "#E38B06" : "#000")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${({ bigFont }) => (bigFont ? "16px" : "18px")};
  }
`;
