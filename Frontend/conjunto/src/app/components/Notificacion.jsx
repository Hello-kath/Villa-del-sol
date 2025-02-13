import { useState } from 'react';

import { unna, amiri, poppinis } from '../utils/fonts.js'

const Notificaciones = () => {
    // Estado para controlar la visibilidad del menú
    const [isOpen, setIsOpen] = useState(false);

    // Estado para almacenar las notificaciones
    const [notificaciones, setNotificaciones] = useState([
        { id: 1, titulo: 'Notificación 1', mensaje: 'Este es el mensaje de la notificación 1', tipo: 'nuevo_visitante' },
        { id: 2, titulo: 'Notificación 2', mensaje: 'Este es el mensaje de la notificación 2', tipo: 'pago_pendiente' },
        { id: 3, titulo: 'Notificación 3', mensaje: 'Este es el mensaje de la notificación 3', tipo: 'confirmacion_visitante' },
    ]);

    // Estado para controlar la visibilidad de la ventana emergente
    const [ventanaEmergente, setVentanaEmergente] = useState(false);

    // Estado para almacenar la notificación seleccionada
    const [notificacionSeleccionada, setNotificacionSeleccionada] = useState(null);

    // Estado para almacenar el rol del usuario
    const [rol, setRol] = useState('propietario'); // Rol por defecto

    // Función para alternar la visibilidad del menú
    const toggleNotificaciones = () => {
        setIsOpen(!isOpen);
    };

    // Función para abrir la ventana emergente
    const abrirVentanaEmergente = (notificacion) => {
        setVentanaEmergente(true);
        setNotificacionSeleccionada(notificacion);
        // Lógica para confirmar el ingreso de un visitante o confirmar la visita
    };

    // Función para confirmar el ingreso de una visita
    const confirmarIngreso = () => {
        if (rol === 'administrador' && notificacionSeleccionada.tipo === 'confirmacion_visitante') {
            // Lógica para confirmar la visita
            console.log('Visita confirmada');
        } else {
            // Lógica para confirmar el ingreso
            console.log('Ingreso confirmado');
        }
    };

    // Función para cambiar el rol del usuario
    const cambiarRol = (nuevoRol) => {
        setRol(nuevoRol);
        // Actualizar las notificaciones según el nuevo rol
    };

    return (
        <section>
            {/* Ícono para abrir las notificaciones */}
            {!isOpen && (
                <button
                    className="absolute top-8 right-32 bg-transparent border-none cursor-pointer z-20 flex items-center"
                    onClick={toggleNotificaciones}
                >
                    <img src="/iconos/notificacion.svg" alt="Abrir notificaciones" className="w-6" />
                </button>
            )}

            {/* Menú de notificaciones */}
            <section
                className={`fixed top-0 right-0 w-[25%] h-screen bg-[url('/svg/fondo.svg')] text-black transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50 overflow-hidden`}
            >
                {/* Título y ícono para cerrar las notificaciones */}
                <div className="flex items-center justify-between p-4">
                    <h2 className={`${unna.className} text-2xl font-medium`}>Notificaciones</h2>
                    <button
                        className="bg-transparent border-none cursor-pointer"
                        onClick={toggleNotificaciones}
                    >
                        <img src="/iconos/notificacion.svg" alt="Cerrar notificaciones" className="w-7" />
                    </button>
                </div>

                {/* Lista de notificaciones */}
                <ul className="pt-1 p-4">
                    {notificaciones.filter((notificacion) => {
                        if (rol === 'propietario') {
                            return notificacion.tipo === 'nuevo_visitante' || notificacion.tipo === 'pago_pendiente';
                        } else if (rol === 'administrador') {
                            return notificacion.tipo === 'confirmacion_visitante';
                        } else {
                            return notificacion.tipo === 'nuevo_visitante';
                        }
                    }).map((notificacion) => (
                        <li key={notificacion.id} className="p-4 hover:bg-[#fcedd4] cursor-pointer" onClick={() => abrirVentanaEmergente(notificacion)}>
                            {notificacion.titulo}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Ventana emergente para ver la notificación completa */}
            {ventanaEmergente && (
                <div
                    className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center"
                >
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-medium">{notificacionSeleccionada.titulo}</h2>
                        <p className="text-sm">{notificacionSeleccionada.mensaje}</p>
                        {(rol === 'propietario' || rol === 'residente') && notificacionSeleccionada.tipo === 'nuevo_visitante' && (
                            <button className={`${poppinis.className} bg-[#FDD078] text-white  rounded px-4 py-2 text-sm transition duration-300 hover:!bg-[#FF8800] hover:!text-white`} onClick={confirmarIngreso}>
                                Confirmar visita
                            </button>
                        )}
                        {rol === 'administrador' && notificacionSeleccionada.tipo === 'visitante_aceptado' && (
                            <p className="text-sm">El propietario ha aceptado el ingreso del visitante.</p>
                        )}
                        <button className="bg-transparent text-gray-700 font-bold py-2 px-4 rounded" onClick={() => setVentanaEmergente(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {/* Overlay para oscurecer el fondo cuando las notificaciones están abiertas */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40"
                    onClick={toggleNotificaciones}
                />
            )}
        </section>
    );
};

export default Notificaciones;