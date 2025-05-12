import React from 'react';
import {
  Container,
  Header,
  Button,
  SpaceBetween,
  FormField,
  Input
} from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

export default function ConvocanteLogin() {
  const navigate = useNavigate();
  const [correo, setCorreo] = React.useState('');

  const handleLogin = () => {
    // Guardamos el tipo de usuario
    localStorage.setItem('logueado', 'convocante');

    // Puedes guardar más info si deseas, como el correo
    localStorage.setItem('correoConvocante', correo);

    // Redirigimos al dashboard
    navigate('/convocante');
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
        <Container header={<Header variant="h1">Login Convocante</Header>}>
          <SpaceBetween size="l">
            <FormField label="Correo de organización">
              <Input
                value={correo}
                onChange={(e) => setCorreo(e.detail.value)}
              />
            </FormField>
            <Button onClick={handleLogin}>Ingresar</Button>
          </SpaceBetween>
        </Container>
      </div>
    </div>
  );
}
