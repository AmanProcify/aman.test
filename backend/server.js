// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');

// Create an express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Use routes
app.use('/api', authRoutes);       // Authentication routes
app.use('/api/employees', employeeRoutes); // Employee routes

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
