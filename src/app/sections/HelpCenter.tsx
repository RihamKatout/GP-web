import { Divider } from "antd";
import { OfferContainer, OfferTitle } from "../Shops/component/ShopHero";
import Contact from "../SweetTouches/component/Contact";

export const HelpCenter = () => {
  return (
    <OfferContainer>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Divider style={{ borderColor: "#1a1a19b3" }}>
          <OfferTitle>Contact Us</OfferTitle>
        </Divider>
        <Contact />
      </div>
    </OfferContainer>
  );
};
