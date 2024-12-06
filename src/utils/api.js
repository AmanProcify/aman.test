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

export default API;
