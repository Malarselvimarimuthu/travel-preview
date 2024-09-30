import React from 'react';
import { createRoot } from 'react-dom/client'; // Use named import
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
