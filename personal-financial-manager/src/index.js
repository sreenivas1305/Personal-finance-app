import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { StrictMode } from 'react';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);