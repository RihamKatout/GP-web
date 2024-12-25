import { Divider } from "antd";
import Contact from "../../../SweetTouches/component/Contact";

// TODO: fix
export const HelpCenterSection = () => {
  return (
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Divider style={{ borderColor: "#1a1a19b3" }}>
          <h1>Contact Us</h1>
        </Divider>
        <Contact />
      </div>
  );
};
