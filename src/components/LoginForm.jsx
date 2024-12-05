import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Auth context to manage user login
import { useNavigate } from "react-router-dom"; // To navigate after login

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example authentication logic (you can replace with real authentication)
    if (username === "admin" && password === "admin") {
      login({ username, role: "admin" });
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard after login
    } else if (username === "manager" && password === "manager") {
      login({ username, role: "manager" });
      navigate("/manager-dashboard"); // Redirect to Manager Dashboard after login
    } else if (username === "user" && password === "user") {
      login({ username, role: "user" });
      navigate("/dashboard"); // Redirect to User Dashboard after login
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
