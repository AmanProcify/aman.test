import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import '../styles/LoginForm.css'; // Import the CSS file for styling

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To display any errors
  const navigate = useNavigate();

  // UseEffect to add a class to the body for background styling
  useEffect(() => {
    document.body.classList.add('login-page');

    // Clean up when the component unmounts (to remove the class)
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend login API
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      // Get the role from the response
      const { role } = response.data;

      // Navigate to different pages based on the user's role
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'manager') {
        navigate('/manager-dashboard');
      } else if (role === 'employee') {
        navigate('/dashboard');
      }
    } catch (error) {
      // Handle error (e.g., invalid credentials)
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error); // Set error message from API response
      } else {
        setErrorMessage('Something went wrong! Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error */}
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

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
