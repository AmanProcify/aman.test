import React, { createContext, useState, useContext } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user will store logged-in user details

  const login = (userData) => {
    setUser(userData); // Set the logged-in user
  };

  const logout = () => {
    setUser(null); // Clear the user on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
