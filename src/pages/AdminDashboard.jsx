import React from "react";
import "../styles/AdminDashboard.css"; // Import the CSS file for styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>Welcome to the Admin Dashboard</h2>
        <p>Here is an overview of your account and system status.</p>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>500</p>
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <p>1,200</p>
        </div>
        <div className="card">
          <h3>Pending Approvals</h3>
          <p>45</p>
        </div>
      </div>

      <div className="dashboard-footer">
        <p>Admin Dashboard - 2024</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
