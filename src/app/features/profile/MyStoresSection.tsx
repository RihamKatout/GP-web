import { useAuth } from "../../context";
import { UnauthorizedPage } from "../../pages";

export const MyStoresSection = () => {
  const { user } = useAuth();
  if (!user?.roles.includes("STORE_MANAGER")) {
    return <UnauthorizedPage />;
  }

  return <div>Your stores</div>;
};
