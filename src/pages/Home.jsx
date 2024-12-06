import React, { useEffect, useState } from 'react';
import { fetchBackendStatus } from '../utils/api';

const Home = () => {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBackendStatus();
        setBackendMessage(data);
      } catch (error) {
        setBackendMessage('Error connecting to backend');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>Backend Status: {backendMessage}</p>
    </div>
  );
};

export default Home;
