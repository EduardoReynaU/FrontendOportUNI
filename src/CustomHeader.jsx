import React from 'react';
import './customheader.css'; // Estilos aparte
import logo from './assets/logo-oportuni.png';

export default function Header({ nombre = "LUZ CRISTINA" }) {
  return (
    <header className="custom-header">
      <div className="header-left">
        <img src={logo} alt="OportUNI logo" style={{ height: '40px' }} className="logo" />
      </div>
      
      <div className="header-right">
        <span className="perfil-icono">👤</span>
        <span className="perfil-nombre">Hola, {nombre.toUpperCase()}</span>
      </div>
    </header>
  );
}
