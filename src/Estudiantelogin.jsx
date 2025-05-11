import React from 'react';
import { Container, Header, Button, SpaceBetween } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

export default function EstudianteLogin() {
  const navigate = useNavigate();

  const handleLinkedInLogin = () => {
    const perfilSimulado = {
      nombre: 'Cristina Martínez',
      universidad: 'UPC',
      carrera: 'Ingeniería de Sistemas',
      ciclo: 10,
      habilidades: ['React', 'Node.js', 'UX Design'],
      idiomas: ['Español', 'Inglés'],
    };

    localStorage.setItem('logueado', 'estudiante');
    navigate('/estudiante');
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '1rem' }}>
        <Container header={<Header variant="h1">Login con LinkedIn</Header>}>
          <SpaceBetween size="l">
            <p>Inicia sesión con LinkedIn para continuar.</p>
            <Button iconName="external" onClick={handleLinkedInLogin}>
              Iniciar sesión con LinkedIn
            </Button>
          </SpaceBetween>
        </Container>
      </div>
    </div>
  );
}
