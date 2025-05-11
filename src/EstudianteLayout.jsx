// EstudianteLayout.jsx
import React from 'react';
import BaseLayout from './BaseLayout';
import { SideNavigation, HelpPanel, Button } from '@cloudscape-design/components';

export default function EstudianteLayout({ children, perfil, mensaje, breadcrumb }) {
  const navigationItems = [
    { type: 'link', text: 'Mi perfil', href: '/estudiante-perfil' },
    { type: 'link', text: 'Convocatorias', href: '/estudiante' },
    { type: 'link', text: 'Seguimiento', href: '/estudiante-seguimiento' },
  ];

  const toolsPanel = (
    <HelpPanel header={<h2>Mi Perfil</h2>}>
      <p><strong>Nombre:</strong> {perfil.nombre}</p>
      <p><strong>Correo:</strong> {perfil.correo}</p>
      <p><strong>Carrera:</strong> {perfil.carrera}</p>
      <p><strong>Ciclo:</strong> {perfil.ciclo}</p>
      <p><strong>Habilidades:</strong> {perfil.habilidades?.join(', ')}</p>
      <br />
      <Button variant="normal" onClick={() => {
        localStorage.clear();
        window.location.href = '/';
      }}>Cerrar sesión</Button>
    </HelpPanel>
  );

  return (
    <BaseLayout
      perfil={{ ...perfil, tipo: 'estudiante' }}
      breadcrumb={breadcrumb || 'Estudiante'}
      navigation={<SideNavigation header={{ text: 'OportUNI', href: '/estudiante' }} items={navigationItems} />}
      tools={toolsPanel}
      mensaje={mensaje}
    >
      {children}
    </BaseLayout>
  );
}
