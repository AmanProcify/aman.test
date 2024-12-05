import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// ProtectedRoute component to guard routes based on login status
const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
