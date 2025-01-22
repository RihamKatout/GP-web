import { Divider } from "antd";
import Contact from "../../../SweetTouches/component/Contact";
import { Theme } from "../../../utils/Theme";

// TODO: fix
export const HelpCenterSection = () => {
  return (
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Divider style={{ borderColor: "#1a1a19b3" }}>
          <h1 style={{ fontFamily: "DynaPuff" ,  color: Theme.colors.secondary_dark , fontWeight: 400 , fontSize: '3.7rem'}}>Contact Us</h1>
        </Divider>
        <Contact />
      </div>
  );
};
