"use client";

import '@fortawesome/fontawesome-svg-core';
import './globals.css';
import { usePathname } from 'next/navigation';
import FondoComponent from './components/Fondo';
import Header from './components/Header';

export default function RootLayout({ children }) {
  // Obtener la ruta actual del navegador
  const pathname = usePathname();
  console.log('Ruta actual:', pathname);

  // Definir las rutas que deben tener fondo
  const paginasConFondo = [
    '/publico/registrarse',
    '/publico/iniciarSesion',
    '/publico/recuperarPassword'
  ];

  // Determinar si se debe aplicar fondo o no
  const aplicarFondo = paginasConFondo.includes(pathname);
  // Determinar si se debe mostrar el header o no
  const mostrarHeader = pathname !== '/' && pathname !== '/publico/inicio';

  return (
    <html lang="es">
      <body>
        {aplicarFondo ? (
          // Renderizar el componente Fondo si se debe aplicar fondo
          <FondoComponent>{children}</FondoComponent>
        ) : (
          // Renderizar el componente section si no se debe aplicar fondo
          <section>
            {/* Ignorar el header en la página de inicio y en la raíz */}
            {mostrarHeader && <Header />}
            {children}
          </section>
        )}
      </body>
    </html>
  );
}