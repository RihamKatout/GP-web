import React from "react";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user } = useAuth();
  return <div>welcome {user?.firstName}</div>;
};

export default ProfilePage;
