import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      {user && <p>Logged in as: {user.username}</p>}
    </div>
  );
};

export default Home;
