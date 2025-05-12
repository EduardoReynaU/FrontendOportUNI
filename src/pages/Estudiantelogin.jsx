import React from 'react';
import { Container, Header, Button, SpaceBetween } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

export default function EstudianteLogin() {
  const navigate = useNavigate();

  const handleGithubLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user user:email`;
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
        <Container header={<Header variant="h1">Login con GitHub</Header>}>
          <SpaceBetween size="l">
            <p>Inicia sesión con GitHub para continuar.</p>
            <Button iconName="external" onClick={handleGithubLogin}>
              Iniciar sesión con GitHub
            </Button>
          </SpaceBetween>
        </Container>
      </div>
    </div>
  );
}
