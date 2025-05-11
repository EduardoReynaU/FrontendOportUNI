function LoginEstudiante() {
    const navigate = useNavigate();
  
    const handleLinkedInLogin = () => {
      // Simulación de datos recibidos desde LinkedIn
      const perfilSimulado = {
        nombre: 'Cristina Martínez',
        universidad: 'UPC',
        carrera: 'Ingeniería de Sistemas',
        ciclo: 10,
        habilidades: ['React', 'Node.js', 'UX Design'],
        idiomas: ['Español', 'Inglés'],
      };
  
      // Guardamos en localStorage (simulando una sesión real)
      localStorage.setItem('perfilEstudiante', JSON.stringify(perfilSimulado));
  
      // Redirige al dashboard
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
  