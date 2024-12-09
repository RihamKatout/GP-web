import React from "react";
import Navbar from "../components/shared/Navbar";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const {user} = useAuth();
  return (
    <>
      <Navbar isLoggedIn={user !== null} />
      <div>HomePage</div>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
    </>
  );
};

export default HomePage;
