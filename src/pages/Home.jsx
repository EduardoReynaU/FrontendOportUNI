import React from 'react';
import {
  Container,
  Header,
  SpaceBetween,
  Box,
  Button
} from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleGitHub = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

    // Redirige al flujo de autenticación de GitHub
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=https://frontendoportuni-356996092654.us-central1.run.app/callback&scope=read:user user:email`;
  };

  const handleGmail = () => {
    // Aquí podrías implementar algo similar para Google OAuth si ya lo tienes configurado
    alert('Integración con Gmail aún no implementada.');
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
        <Container header={<Header variant="h1">Bienvenido a OportUNI</Header>}>
          <SpaceBetween size="l">
            <p>Conecta tu cuenta para continuar:</p>

            <SpaceBetween size="xs">
              <Button variant="primary" onClick={handleGitHub}>Entrar con GitHub</Button>
              <Button variant="normal" onClick={handleGmail}>Entrar con Gmail</Button>
            </SpaceBetween>

          </SpaceBetween>
        </Container>
      </div>
    </div>
  );
}
