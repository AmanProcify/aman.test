import React, { useEffect, useState } from 'react';
import API from '../utils/api.js'; // Use the centralized API configuration
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    date_of_birth: '',
    date_of_joining: '',
    role: '',
    salary: '',
    department: '',
    manager_id: '',
    status: 'Active',
    gender: 'Male',
    emergency_contact: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState('employees'); // Track the active tab (employee list or add employee)

  useEffect(() => {
    if (activeTab === 'employees') fetchEmployees();
  }, [activeTab]);

  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.get('/api/employees');
      setEmployees(response.data);
    } catch (err) {
      console.error('Error fetching employees:', err);
      setError('Failed to fetch employees. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddEmployee = async () => {
    setError(null);
    try {
      await API.post('/api/employees', newEmployee);
      setIsAdding(false);
      setActiveTab('employees');
      fetchEmployees(); // Refresh employee list after adding
      setNewEmployee({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        date_of_birth: '',
        date_of_joining: '',
        role: '',
        salary: '',
        department: '',
        manager_id: '',
        status: 'Active',
        gender: 'Male',
        emergency_contact: '',
      });
    } catch (err) {
      console.error('Error adding employee:', err);
      setError('Failed to add employee. Please check the inputs and try again.');
    }
  };

  const handleDeleteEmployee = async (id) => {
    setError(null);
    try {
      await API.delete(`/api/employees/${id}`);
      fetchEmployees();
    } catch (err) {
      console.error('Error deleting employee:', err);
      setError('Failed to delete employee. Please try again later.');
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li
            className={activeTab === 'employees' ? 'active' : ''}
            onClick={() => setActiveTab('employees')}
          >
            Employee List
          </li>
          <li
            className={activeTab === 'addEmployee' ? 'active' : ''}
            onClick={() => setActiveTab('addEmployee')}
          >
            Add Employee
          </li>
        </ul>
      </div>

      <div className="main-content">
        {activeTab === 'employees' && (
          <div className="employee-list">
            <h2>Employees</h2>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
              <p>Loading employees...</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{`${employee.first_name} ${employee.last_name}`}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone_number}</td>
                      <td>{employee.role}</td>
                      <td>
                        <button
                          onClick={() => handleDeleteEmployee(employee.id)}
                          className="delete-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === 'addEmployee' && (
          <div className="add-employee-form">
            <h2>Add Employee</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddEmployee();
              }}
            >
              <input
                type="text"
                placeholder="First Name"
                value={newEmployee.first_name}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, first_name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={newEmployee.last_name}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, last_name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newEmployee.email}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, email: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={newEmployee.phone_number}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, phone_number: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={newEmployee.address}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, address: e.target.value })
                }
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={newEmployee.date_of_birth}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, date_of_birth: e.target.value })
                }
              />
              <input
                type="date"
                placeholder="Date of Joining"
                value={newEmployee.date_of_joining}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, date_of_joining: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Role"
                value={newEmployee.role}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, role: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Department"
                value={newEmployee.department}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, department: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Salary"
                value={newEmployee.salary}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, salary: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Manager ID"
                value={newEmployee.manager_id}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, manager_id: e.target.value })
                }
              />
              <select
                value={newEmployee.status}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <select
                value={newEmployee.gender}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, gender: e.target.value })
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                placeholder="Emergency Contact"
                value={newEmployee.emergency_contact}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, emergency_contact: e.target.value })
                }
              />
              <button type="submit">Save</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
