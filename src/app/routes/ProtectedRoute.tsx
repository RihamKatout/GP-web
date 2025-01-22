import React from "react";
import { useAuth } from "../context";
import { UnauthorizedPage } from "../pages/errors/UnauthorizedPage";

interface ProtectedRouteProps {
  role?: string;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { user } = useAuth();
  return user?.roles.includes(role || "CUSTOMER") ? (
    children
  ) : (
    <UnauthorizedPage />
  );
};

export default ProtectedRoute;
