// /controllers/employeeController.js
const connection = require('../config/db');

// ==========GEtting Employee Details===========//
const getEmployees = (req, res) => {
  const query = 'SELECT * FROM employees';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching employees:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
};

// ==========Add Employee=========================//
const addEmployee = (req, res) => {
    const {
      first_name, last_name, email, phone_number, address,
      date_of_birth, date_of_joining, role, salary,
      department, manager_id, status, gender, emergency_contact
    } = req.body;
  
    // Set default values for missing fields
    const values = [
      first_name, 
      last_name, 
      email, 
      phone_number, 
      address || null, // If address is missing, use NULL
      date_of_birth || null, 
      date_of_joining, 
      role, 
      salary || null, // If salary is missing, use NULL
      department || null, 
      manager_id || null, 
      status || null, 
      gender || null, 
      emergency_contact || null
    ];
  
    const query = `
      INSERT INTO employees (
        first_name, last_name, email, phone_number, address,
        date_of_birth, date_of_joining, role, salary,
        department, manager_id, status, gender, emergency_contact
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error adding employee:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({ message: 'Employee added successfully', id: results.insertId });
    });
  };
  

// DELETE EMPLOYEE==========================================================
const deleteEmployee = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM employees WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting employee:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  });
};

module.exports = { getEmployees, addEmployee, deleteEmployee };
