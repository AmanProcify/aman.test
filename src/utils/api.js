import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Backend server URL
});

export const fetchBackendStatus = async () => {
  try {
    const response = await API.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching backend status:', error);
    throw error;
  }
};

export const fetchEmployees = async () => {
  try {
    const response = await API.get('/api/employees'); // Adjust the path here
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const addEmployee = async (employeeData) => {
  try {
    const response = await API.post('/api/employees', employeeData); // Adjust path
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await API.delete(`/api/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};

export default API;
