// BaseLayout.jsx
import React from 'react';
import {
  AppLayout,
  Flashbar,
  BreadcrumbGroup
} from '@cloudscape-design/components';
import CustomHeader from '../components/CustomHeader';

export default function BaseLayout({ children, perfil, breadcrumb, navigation, tools, mensaje }) {
  const breadcrumbItems = [
    { text: 'Inicio', href: perfil?.tipo === 'convocante' ? '/convocante' : '/estudiante' },
    { text: breadcrumb || 'Panel', href: '#' }
  ];

  return (
    <>
      <CustomHeader nombre={perfil?.nombre || 'Usuario'} />
      <AppLayout
        navigation={navigation}
        tools={tools}
        breadcrumbs={<BreadcrumbGroup items={breadcrumbItems} />}
        notifications={mensaje ? (
          <Flashbar
            items={[{
              type: 'info',
              content: mensaje,
              dismissible: true,
              id: 'mensaje-flash'
            }]}
          />
        ) : null}
        content={children}
      />
    </>
  );
}
