import React from 'react';
import './convocatoria.css'; // Estilos aparte si deseas

export default function ConvocatoriaCard({ titulo, descripcion, tipo, fecha, modalidad }) {
  return (
    <div className="convocatoria-card">
      <h3>{titulo}</h3>
      <p className="tipo">{tipo} • {modalidad}</p>
      <p className="descripcion">{descripcion}</p>
      <p className="fecha">Fecha límite: {fecha}</p>
    </div>
  );
}
