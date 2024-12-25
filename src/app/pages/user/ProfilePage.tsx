import { useAuth } from "../../context/AuthContext";

export const ProfilePage = () => {
  const { user } = useAuth();
  return <div>welcome {user?.firstName}</div>;
};
