import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import LoginForm from "./components/LoginForm"; // Your LoginForm component
// import Home from "./pages/Home"; // Your Home component
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import { AuthProvider } from "./context/AuthContext"; // Your AuthContext to manage login state

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Route for Login page */}
          <Route path="/login" element={<LoginForm />} />

          {/* Redirect default route (/) to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Routes for dashboards (to be protected after login) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
