import React from 'react';

function LoginEstudiante() {
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
        <h1>Login con GitHub</h1>
        <p>Inicia sesión con GitHub para continuar.</p>
        <button onClick={handleGithubLogin}>
          Iniciar sesión con GitHub
        </button>
      </div>
    </div>
  );
}

export default LoginEstudiante;
