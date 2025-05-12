import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import EstudianteLogin from './pages/Estudiantelogin.jsx';
import EstudianteInicio from './pages/EstudianteInicio';
import ConvocanteLogin from './pages/ConvocanteLogin.jsx';
import ConvocanteInicio from './pages/ConvocanteInicio.jsx';
import EstudiantePerfil from './pages/EstudiantePerfil';
import EstudianteSeguimiento from './pages/EstudianteSeguimiento.jsx';
import SeleccionRol from './pages/SeleccionRol';
import Callback from './pages/Callback.jsx'; 

function App() {
  const tipoUsuario = localStorage.getItem('logueado');

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          tipoUsuario === 'estudiante'
            ? <Navigate to="/estudiante" />
            : tipoUsuario === 'convocante'
            ? <Navigate to="/convocante" />
            : <Home />
        } />
        <Route path="/login-estudiante" element={<EstudianteLogin />} />
        <Route path="/estudiante" element={<EstudianteInicio />} />
        <Route path="/login-convocante" element={<ConvocanteLogin />} />
        <Route path="/convocante" element={<ConvocanteInicio />} />
        <Route path="/estudiante-perfil" element={<EstudiantePerfil />} />
        <Route path="/estudiante-seguimiento" element={<EstudianteSeguimiento />} />
        <Route path="/seleccion-rol" element={<SeleccionRol />} />
        <Route path="/callback" element={<Callback />} /> 
      </Routes>
    </Router>
  );
}

export default App;
