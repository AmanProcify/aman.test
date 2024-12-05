import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you're using `react-dom/client` if you're using React 18 or higher
import './index.css';
import App from './App'; // Import your App component

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
