import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
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
          }
          // ✅ Redirige siempre a /estudiante
          navigate('/estudiante');
        })
        .catch(() => {
          // Incluso si hay error, redirige igual
          navigate('/estudiante');
        });
    } else {
      // Si no hay código, redirige directamente
      navigate('/estudiante');
    }
  }, [navigate]);

  return null; // No mostramos nada, redirección inmediata
}
