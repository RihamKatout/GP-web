import { Button } from "antd";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export const UnauthorizedPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Unauthorized</h1>
      <p>You are not authorized to view this page</p>
      <p>
        {isLoggedIn ? (
          <Button onClick={() => navigate("/")}>Back to Home page</Button>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </p>
    </div>
  );
};
