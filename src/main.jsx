import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css'; // Estilos base

// Importamos Apollo
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client'; // Este archivo lo crearás en breve

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
