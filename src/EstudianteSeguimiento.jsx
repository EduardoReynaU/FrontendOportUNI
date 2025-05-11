// EstudianteSeguimiento.jsx
import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  ContentLayout,
  Box,
  Button,
  StatusIndicator,
  SpaceBetween,
  Modal
} from '@cloudscape-design/components';
import EstudianteLayout from './EstudianteLayout';

const REVERSAL_LIMIT_MS = 30000; // 30 segundos

export default function EstudianteSeguimiento() {
  const perfil = JSON.parse(localStorage.getItem('perfilEstudiante')) || {
    nombre: 'Estudiante',
    correo: 'correo@ejemplo.com',
    carrera: 'No definida',
    ciclo: '—',
    habilidades: [],
  };

  const [seleccionadas, setSeleccionadas] = useState(() => {
    const almacenadas = localStorage.getItem('convocatoriasEstudiante');
    return almacenadas ? JSON.parse(almacenadas) : [
      { id: 1, titulo: 'Voluntariado en ONG Verde', estado: 'pendiente', medioContacto: 'LinkedIn' },
      { id: 2, titulo: 'Proyecto de mentoría STEM', estado: 'aceptado', medioContacto: 'Correo institucional' },
      { id: 3, titulo: 'Campamento de liderazgo', estado: 'rechazado', medioContacto: 'LinkedIn' },
      { id: 4, titulo: 'Asistencia en feria científica', estado: 'pendiente', medioContacto: 'Correo institucional' },
      { id: 5, titulo: 'Voluntariado en biblioteca digital', estado: 'pendiente', medioContacto: 'LinkedIn' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('convocatoriasEstudiante', JSON.stringify(seleccionadas));
  }, [seleccionadas]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedConvocatoria, setSelectedConvocatoria] = useState(null);
  const [nuevoEstado, setNuevoEstado] = useState(null);

  const abrirConfirmacion = (item, estado) => {
    setSelectedConvocatoria(item);
    setNuevoEstado(estado);
    setModalVisible(true);
  };

  const confirmarCambio = () => {
    if (!selectedConvocatoria || !nuevoEstado) return;
    const ahora = Date.now();
    const actualizadas = seleccionadas.map(item =>
      item.id === selectedConvocatoria.id
        ? { ...item, estado: nuevoEstado, fechaCambio: ahora }
        : item
    );
    setSeleccionadas(actualizadas);
    setModalVisible(false);
  };

  const revertirEstado = (id) => {
    const actualizadas = seleccionadas.map(item =>
      item.id === id ? { ...item, estado: 'pendiente', fechaCambio: null } : item
    );
    setSeleccionadas(actualizadas);
  };

  const pendientes = seleccionadas.filter(item => item.estado === 'pendiente');
  const aceptadas = seleccionadas.filter(item => item.estado === 'aceptado');
  const rechazadas = seleccionadas.filter(item => item.estado === 'rechazado');

  const puedeRevertir = (item) => {
    if (!item.fechaCambio) return false;
    return Date.now() - item.fechaCambio < REVERSAL_LIMIT_MS;
  };

  const renderCards = (items, showAccion = false, showRevertir = false) => (
    items.map(item => (
      <Box key={item.id} margin={{ bottom: 's' }}>
        <Box variant="h3">📌 {item.titulo}</Box>
        <p>
          Estado: {' '}
          <StatusIndicator type={
            item.estado === 'aceptado' ? 'success' :
            item.estado === 'rechazado' ? 'error' : 'info'
          }>
            {item.estado.charAt(0).toUpperCase() + item.estado.slice(1)}
          </StatusIndicator>
        </p>
        <p>El convocante se comunicará contigo por <strong>{item.medioContacto}</strong>.</p>

        {showAccion && (
          <Box direction="horizontal" display="flex" gap="s">
            <Button variant="primary" onClick={() => abrirConfirmacion(item, 'aceptado')}>
              Aceptar
            </Button>
            <Button variant="normal" onClick={() => abrirConfirmacion(item, 'rechazado')}>
              Rechazar
            </Button>
          </Box>
        )}

        {showRevertir && puedeRevertir(item) && (
          <Box direction="horizontal" display="flex" gap="s">
            <Button variant="link" onClick={() => revertirEstado(item.id)}>
              Revertir a pendiente
            </Button>
          </Box>
        )}

        <hr style={{ margin: '1rem 0' }} />
      </Box>
    ))
  );

  return (
    <EstudianteLayout perfil={perfil} breadcrumb="Seguimiento">
      <ContentLayout header={<Header variant="h1">Seguimiento de Convocatorias</Header>}>
        <SpaceBetween size="l">
          <Container header={<Header variant="h2">🔔 Convocatorias Pendientes</Header>}>
            {pendientes.length > 0
              ? renderCards(pendientes, true)
              : <Box variant="p">No hay convocatorias pendientes por el momento.</Box>
            }
          </Container>

          {aceptadas.length > 0 && (
            <Container header={<Header variant="h2">✅ Convocatorias Aceptadas</Header>}>
              {renderCards(aceptadas, false, true)}
            </Container>
          )}

          {rechazadas.length > 0 && (
            <Container header={<Header variant="h2">❌ Convocatorias Rechazadas</Header>}>
              {renderCards(rechazadas, false, true)}
            </Container>
          )}
        </SpaceBetween>
      </ContentLayout>

      <Modal
        onDismiss={() => setModalVisible(false)}
        visible={modalVisible}
        header="Confirmar acción"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={() => setModalVisible(false)}>Cancelar</Button>
              <Button variant="primary" onClick={confirmarCambio}>Confirmar</Button>
            </SpaceBetween>
          </Box>
        }
      >
        <p>¿Estás segura de marcar esta convocatoria como <strong>{nuevoEstado}</strong>?</p>
      </Modal>
    </EstudianteLayout>
  );
}
