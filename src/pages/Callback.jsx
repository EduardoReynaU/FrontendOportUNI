import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      // Llamada al backend usando GraphQL para intercambiar el code por un token
      fetch(import.meta.env.VITE_GRAPHQL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            mutation {
              loginWithGithub(authCode: "${code}") {
                token
                user { username email }
              }
            }
          `
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.data && data.data.loginWithGithub) {
            const { token } = data.data.loginWithGithub;
            localStorage.setItem('jwt_token', token);
            // ✅ Redirige a la página principal o dashboard después del login
            navigate('/estudiante');
          } else {
            alert('Error en la autenticación con GitHub');
            navigate('/login-estudiante');
          }
        })
        .catch(() => {
          alert('Error de red en la autenticación');
          navigate('/login-estudiante');
        });
    } else {
      alert('No se recibió el código de autenticación');
      navigate('/login-estudiante');
    }
  }, [navigate]);

  return <p>Procesando autenticación con GitHub, por favor espera...</p>;
}
