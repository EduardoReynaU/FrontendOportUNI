import React from 'react';
import { Container, Header, Button, SpaceBetween } from '@cloudscape-design/components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '1rem' }}>
        <Container header={<Header variant="h1">Sistema de Recomendación</Header>}>
          <SpaceBetween size="l">
            <p>Selecciona cómo deseas ingresar:</p>
            <Link to="/login-estudiante"><Button variant="primary">Soy Estudiante</Button></Link>
            <Link to="/login-convocante"><Button variant="normal">Soy Convocante</Button></Link>
          </SpaceBetween>
        </Container>
      </div>
    </div>
  );
}
