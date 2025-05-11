import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Importa tus estilos
import './index.css';          // Estilos base (aunque no uses Tailwind)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
