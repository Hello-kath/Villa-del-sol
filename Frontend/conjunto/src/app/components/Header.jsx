"use client";
import { useState } from 'react';
import Sidebar from '../components/menu/Menu';
import Notificaciones from '../components/Notificacion.jsx';
import { unna, amiri, poppinis } from '../utils/fonts.js'

const Header = () => {

    const [isActive, setIsActive] = useState(false); // Declarar e inicializar isActive

    const handlePerfil = () => {
        window.location.href = '/publico/Perfil'; // Ruta a la que se redirigirá el usuario
    };

    const handleHome = () => {
        window.location.href = '/publico/Home'; // Ruta a la que se redirigirá el usuario
    };

    return (
        <header className="border-1 border-gray-950 w-[calc(100%-55px)] h-[70px] mx-auto mt-2 sticky top-0 bg-white shadow-md flex z-20 ">
            {/* contiene el logo, menu, home */}
            <section className=" w-[30%] relative">
                {<img src="/img/logoTitulo.png" alt="registrar SVG" className="w-[130px] absolute -top-6 mr-20"></img>}
                <Sidebar />
                {<img src="/iconos/home.svg" alt="registrar SVG" className="w-6 absolute  top-8 left-60  cursor-pointer z-20 " onClick={handleHome}></img>}
            </section>
            <nav className={`${poppinis.className} px-5 text-sm w-[40%]`}>
                {/* Contenido de navegacion */}
                <ul className=" pt-3  flex justify-between">
                    <li className={`p-4 cursor-pointer ${isActive ? 'active border-b-2 border-gray-700' : ''}`}>
                        <a href="#conocenos" className="text-gray-700 hover:text-gray-900">
                            Conocenos
                        </a>
                    </li>
                    <li className={`p-4 cursor-pointer ${isActive ? 'active border-b-2 border-gray-700' : ''}`}>
                        <a href="#servicios" className="text-gray-700 hover:text-gray-900">
                            Servicios
                        </a>
                    </li>
                    <li className={`p-4 cursor-pointer ${isActive ? 'active border-b-2 border-gray-700' : ''}`}>
                        <a href="#reglamento" className="text-gray-700 hover:text-gray-900">
                            Reglamento
                        </a>
                    </li>
                </ul>
            </nav>
            {/* contiene icnonos; ayuda, notificacion y perfil */}
            <section className="w-[30%]">

                <img
                    src="/iconos/perfil.svg"
                    alt="registrar SVG"
                    className="w-[56px] absolute top-3 right-12 cursor-pointer"
                    onClick={handlePerfil}
                />
                <Notificaciones />
                <img src="/iconos/ayuda.svg"
                    alt="registrar SVG"
                    className="w-6 absolute top-8 right-44 cursor-pointer" />
            </section>
        </header>

    );
};

export default Header;