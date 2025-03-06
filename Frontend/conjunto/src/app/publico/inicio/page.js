"use client"
import '../../globals.css';
import { unna, amiri, poppinis } from '../../utils/fonts';
import Link from "next/link";

// pages/inicio.js
export default function Inicio() {
    return (
        <>
            {/* encabezado */}
            <header className=" w-full h-[10vh] sm:h-[10vh] md:h-[10vh] lg:h-[11vh] pt-5">
                <nav className="text-center flex justify-end">
                    <button onClick={() => window.location.href = '/RegistrarVisitaPage'} className={`${poppinis.className}  bg-white text-white w-[9%]  mr-20  rounded-lg px-1 py-2 text-sm transition duration-300 hover:!bg-white hover:!text-orange-500`}>
                        visitante
                    </button>
                    <Link href="/publico/iniciarSesion" className='contents'>
                    <button className={`${poppinis.className} bg-[#FDD078] text-white w-[9%]  shadow-md rounded-lg px-1 py-2 text-sm transition duration-300 hover:!bg-white hover:!text-orange-500`}>
                        Iniciar sesión
                    </button>
                    </Link>
                    
                    <Link href="/publico/registrarse" className='contents'>
                    <button className= {`${poppinis.className} bg-white text-orange-500 w-[9%] shadow-md rounded-lg ml-16 mr-44 px-1 py-2 text-sm font-semibold transition duration-300 hover:bg-[#FDD078] hover:text-white`}>
                        Registrarse
                    </button>
                    </Link>
                    

                </nav>
            </header>

            {/* cuerpo */}
            <main className="flex w-[1100px] h-[82vh] sm:h-[79vh] md:h-[81vh] lg:h-[80vh] ml-32 justify-center  bg-[url('/svg/fondo.svg')] bg-cover bg-center">
                {/* contiene sesion de bienvenida */}
                <section className='  w-[680px] flex flex-col items-center pl-12 '>
                    {<img src="/img/logo.png" alt="Imagen SVG" className="w-[400px] absolute  mt-[-145px]"></img>}
                    <h1 className={`${unna.className} text-7xl mt-28`}>Villa del sol</h1>
                    <h4 className={`${amiri.className} text-3xl mt-[-16px] text-wrap text-center`}>El espacio perfecto para tu familia</h4>
                    {<img src="/svg/personasInicio.svg" alt="Imagen SVG" className="w-[550px] absolute top-[280px]"></img>}
                </section>
                {/* contiene la imagen de la casa */}
                <section className=' w-[579px]'>
                    <img src="/svg/casaInicio.svg" alt="Imagen SVG" className="w-[31%] absolute right-[135px] top-18"></img>
                </section>
            </main>
            {/* pie de pagina */}
            <footer className="w-full h-[10vh] sm:h-[10vh] md:h-[9vh] lg:h-[9vh] pl-32 py-2">
                {/* contenedor de redes */}
                <section className={` ${amiri.className} w-2/3 h-10 px-2 flex `}>
                    <a href="#" className="flex items-center gap-2 ml-14">
                        <img src="/iconos/Whatsap.svg" alt="WhatsApp" className="w-8 h-8" />
                        <span className="-mt-2">3135037822</span>
                    </a>

                    <a href="#" className="flex items-center gap-2 ml-16">
                        <img src="/iconos/instagram.svg" alt="WhatsApp" className="w-7 h-7" />
                        <span className="-mt-2">StateVilladelSol</span>
                    </a>

                    <a href="#" className="flex items-center gap-2 ml-16">
                        <img src="/iconos/gmail.svg" alt="WhatsApp" className="w-7 h-7" />
                        <span className="-mt-2">villadelsol@gmail.com</span>
                    </a>

                </section>
            </footer>
        </>


    );
}
