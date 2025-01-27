
import { Link } from "react-router-dom";
import img from "../../../assets/404.png";
import { Theme } from "../../utils/Theme";
export const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img src={img} alt="404" style={{ width: 900, height: 500 }} />
      <h1> Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button style={{ marginTop: 20, padding: "0.5rem 1rem", borderRadius: "10px", backgroundColor: Theme.colors.secondary_light }}>Go Home</button>
      </Link>
    </div>
  );
};
