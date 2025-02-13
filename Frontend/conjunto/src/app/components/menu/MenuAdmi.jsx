"use client";
import { useState } from 'react';
import { unna, amiri, poppinis } from '../../utils/fonts.js'

const SidebarAdmi = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Alternar entre abierto y cerrado
    };

    return (
        <section>
            {/* Ícono para abrir el menú */}
            {!isOpen && (
                <button
                    className="absolute top-8 left-40 bg-transparent border-none cursor-pointer z-20"
                    onClick={toggleSidebar}
                >
                    <img src="/iconos/menu.svg" alt="Abrir menú" className="w-6" />
                </button>
            )}

            {/* Menú lateral */}
            <section
                className={`fixed top-0 left-0 w-[22%] h-screen bg-[#f5f5f5] bg-[url('/svg/fondo.svg')] text-black transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-50 overflow-hidden`}
            >
                {/* Ícono para cerrar el menú */}
                <button
                    className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10"
                    onClick={toggleSidebar}
                >
                    <img src="/iconos/menu.svg" alt="Cerrar menú" className="w-7" />
                </button>

                {/* este contiene la ilustracion del menu */}

                <section className=' h-[260px] relative'>
                    <img src="/svg/personaMenu.svg" alt="Cerrar menú" className="w-[69%] top-5 absolute right-6 z-0" />
                    <hr className="w-20 border-[#FF8800] absolute top-[86%] right-6" />
                    <h1 className={`${unna.className} absolute top-[78%] text-3xl mx-[120px]`}>Menú</h1>
                    <hr className="w-20 border-[#FF8800] absolute top-[86%] left-9" />


                </section>

                {/* Contenido del menú */}
                <ul className= {`${poppinis.className} text-sm px-10 pt-2 flex-col justify-center items-center `}>
                    <li className="p-3 hover:bg-[#fcedd4] cursor-pointer flex">
                        <img src="/iconos/apartamento.svg" alt="Icono apartamento" className="w-5 h-5 mr-2" />
                        Apartamentos</li>
                    <li className="p-3 hover:bg-[#fcedd4] cursor-pointer flex">
                        <img src="/iconos/user.svg" alt="Icono apartamento" className="w-5 h-5 mr-2" />
                        Propietario</li>
                    <li className="p-3 hover:bg-[#fcedd4] cursor-pointer flex">
                        <img src="/iconos/usuarios.svg" alt="Icono apartamento" className="w-5 h-6 mr-2" />
                        Visitantes</li>
                    <li className="p-3 hover:bg-[#fcedd4] cursor-pointer flex">
                        <img src="/iconos/finanza.svg" alt="Icono apartamento" className="w-5 h-5 mr-2" />
                        Gestión Financiera</li>
                    <li className="p-3 hover:bg-[#fcedd4] cursor-pointer flex">
                        <img src="/iconos/solicitud.svg" alt="Icono apartamento" className="w-5 h-5 mr-2" />
                        Solicitudes</li>
                </ul>

                <section className='flex items-center'>
                    <img src="/svg/planta1.svg" alt="Icono apartamento" className="w-16 mr-2" />
                    <a href="/publico/recuperarPassword" className="text-sm font-medium flex text-black hover:text-[#faa307]">
                    <img src="/iconos/salir.svg" alt="Icono apartamento" className="w-5 h-5 ml-5 mr-2" />
                        Cerrar sesión
                    </a>
                </section>
            </section>

            {/* Overlay para oscurecer el fondo cuando el menú está abierto */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                />
            )}
        </section>
    );
};

export default SidebarAdmi;