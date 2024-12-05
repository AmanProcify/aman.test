import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css'; // Import the CSS file for styling

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // UseEffect to add a class to the body for background styling
  useEffect(() => {
    document.body.classList.add('login-page');

    // Clean up when the component unmounts (to remove the class)
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Example authentication logic (you can replace with real authentication)
    if (username === "admin" && password === "admin") {
      navigate("/admin-dashboard");
    } else if (username === "manager" && password === "manager") {
      navigate("/manager-dashboard");
    } else if (username === "user" && password === "user") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
