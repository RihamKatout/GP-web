import { motion } from "framer-motion";
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../../../styles/Global.styled";
import showcase from "../../../../assets/showcase.png";
// import shape1 from "../../assets/particle.png";

//import for showcase style
import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
} from "../../../styles/Showcase.styled";
//import for icons
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { fadeInLeftVariant, fadeInRightVariant } from "../../../utils/Variants";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="5%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="center" gap="1rem" fullWidthChild>
        {/*--left-content */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            as="h3"
            size="h3"
            top="0.5rem"
            bottom="1rem"
            style={{ fontFamily: "DynaPuff", color: "#1e1c1" }}
          >
            WELCOM TO{" "}
            <BlueText
              style={{
                fontFamily: "DynaPuff",
                fontWeight: "400",
                fontSize: "3.5rem",
              }}
            >
              DESIGNFY!
              <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
            </BlueText>
          </Heading>
          <Heading as="h3" size="h3" style={{ color: "#1e1c1c414" }}>
            its about{" "}
            <BlueText style={{ color: "#1e1c1c414" }}>
              design and costom
            </BlueText>{" "}
            your order as you like
          </Heading>

          <ParaText as="p" top="2rem" bottom="3rem">
            you can order in whatever suit you tast!, these feature made just
            for you
          </ParaText>

          {/*--social icons-- */}
          <FlexContainer gap="15px" responsiveFlix>
            <IconContainer color="pink" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="pink" size="1.5rem">
              <BsTwitter />
            </IconContainer>
            <IconContainer color="pink" size="1.5rem">
              <BsYoutube />
            </IconContainer>
            <IconContainer color="pink" size="1.5rem">
              <BsInstagram />
            </IconContainer>
          </FlexContainer>
        </motion.div>

        <ShowcaseParticleContainer>
          <ShowcaseImageCard>
            <DotLottieReact
              src="https://lottie.host/3b41766d-fbf3-4b8d-92c1-52893a6fada6/q9AyrI26gM.lottie"
              loop
              autoplay
            />
          </ShowcaseImageCard>
        </ShowcaseParticleContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};
