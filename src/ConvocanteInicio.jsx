// ConvocanteInicio.jsx
import React from 'react';
import {
  AppLayout,
  Container,
  Header,
  Button,
  SpaceBetween,
  Box,
  SideNavigation
} from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';
import CustomHeader from './CustomHeader';
export default function ConvocanteInicio() {
  const navigate = useNavigate();

  const irAPerfil = () => {
    navigate('/convocante-perfil');
  };

  const irAFormulario = () => {
    navigate('/convocante-nuevo-proyecto');
  };

  return (
    
    <AppLayout
      navigation={
        <SideNavigation
          header={{ text: 'Convocante', href: '/convocante' }}
          items={[
            { type: 'link', text: 'Inicio', href: '/convocante' },
            { type: 'link', text: 'Publicar Proyecto', href: '/convocante-nuevo-proyecto' },
            { type: 'link', text: 'Mi Perfil', href: '/convocante-perfil' }
          ]}
        />
      }
      contentHeader={
        <SpaceBetween size="m">
          <Header variant="h1">Panel del Convocante</Header>
          <Box float="right">
            <Button onClick={irAPerfil}>Mi perfil</Button>
          </Box>
        </SpaceBetween>
      }
      content={
        <Container>
          <SpaceBetween size="l">
            <p>Bienvenida al panel. Aquí podrás publicar oportunidades y ver estudiantes sugeridos.</p>
            <Button variant="primary" onClick={irAFormulario}>
              Publicar nuevo proyecto
            </Button>
          </SpaceBetween>
        </Container>
      }
    />
  );
}
