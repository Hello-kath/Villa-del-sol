"use client";
import { useState } from 'react';
import Sidebar from '../../components/menu/Menu';
import Notificaciones from '../../components/Notificacion.jsx';
import { unna, amiri, poppinis, nunito } from '../../utils/fonts.js'

export default function Home() {

    const [isActive, setIsActive] = useState(false); // Declarar e inicializar isActive



    return (

        <main>
            {/* contenedor de inicio */}
            <section class="flex h-[calc(100vh-78px)] w-full overflow-y-auto overflow-hidden px-3 py-4">
                <div className='h-full w-[31%]'>
                    <img src="/svg/foto1.svg" alt="foto SVG" className="w-[79%] mt-12 " />
                </div>
                <div className=' h-full w-[38%] pt-28 px-4'>
                    <h1 className={`${unna.className} text-center text-3xl `}>¿Qué  es Villa del sol?</h1>
                    <p className={`${nunito.className} text-center text-xl pt-2`}> Es un conjunto residencial diseñado para ofrecer tranquilidad,
                        confort y un estilo de vida único. Ubicado en una zona privilegiada,
                        este conjunto combina modernas instalaciones con áreas verdes cuidadosamente
                        planeadas, brindando un entorno ideal para el desarrollo de familias, profesionales
                        y personas que buscan calidad de vida.</p>
                </div>
                <div className='h-full w-[31%]'>
                    <img src="/svg/foto2.svg" alt="foto SVG" className="w-[79%] ml-24 " />
                </div>
            </section>
            {/* contenedor de conocenos */}
            <section id="conocenos" class=" h-[calc(100vh-60px)] w-full overflow-y-auto overflow-hidden pt-4 px-3">
                <div className=''>
                    <h1 className={`${unna.className} text-center font-light text-3xl py-4`} >Ofrecemos una variedad de zonas y servicios como:</h1>
                    <div className="bg-[url('/svg/fondo.svg')] h-72 w-full flex px-[25%] relative z-0">
                        <img src="/svg/parque.svg" alt="foto SVG" className="h-full pr-36 " />
                        <img src="/svg/piscina.svg" alt="foto SVG" className="h-full  " />

                        <div className="absolute left-0 top-40">
                            <img
                                src="/svg/persona.svg"
                                alt="Decorative figure"
                                className="h-80 object-contain"
                            />
                        </div>
                        <div className="absolute right-0 top-48">
                            <img
                                src="/svg/persona2.svg"
                                alt="Decorative figure"
                                className="h-72 object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className=' h-[200px] relative overflow-hidden flex justify-center gap-40'>
                    <div className=' p-5  w-64'>
                        <h1 className={`${unna.className} text-wrap font-light text-2xl `}>Parques infantiles</h1>
                        <p className={`${nunito.className} text-wrap`}>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                    </div>
                    <div className=' p-5 w-64'>
                        <h1 className={`${unna.className} text-wrap font-light text-2xl `}>Piscinas</h1>
                        <p className={`${nunito.className} text-wrap`}>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                    </div>
                </div>
            </section>
            {/* contenedor de servicios*/}
            <section id="servicios" class="h-[calc(100vh-78px)] w-full overflow-y-auto overflow-hidden p-4 ">
                <div className=''>
                    <div className="bg-[url('/svg/fondo.svg')] h-[323px] w-full flex justify-center gap-32 z-0">
                        <img src="/svg/gym.svg" alt="foto SVG" className="h-full " />
                        <img src="/svg/salonEventos.svg" alt="foto SVG" className="h-full  " />
                        <img src="/svg/vigilancia.svg" alt="foto SVG" className="h-full  " />


                    </div>
                </div>
                <div className=' h-[200px] relative overflow-hidden flex px-36 gap-36'>
                    <div className=' pt-4 ml-10 w-64'>
                        <h1 className={`${unna.className} text-wrap font-light text-2xl `}>Gimnasio equipado</h1>
                        <p className={`${nunito.className} text-wrap`}>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                    </div>
                    <div className='pt-4 w-64'>
                        <h1 className={`${unna.className} text-wrap font-light text-2xl `}>Salon de eventos</h1>
                        <p className={`${nunito.className} text-wrap`}>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                    </div>
                    <div className=' pt-4 mr-4 w-64'>
                        <h1 className={`${unna.className} text-wrap font-light text-2xl `}>Vigilancia</h1>
                        <p className={`${nunito.className} text-wrap`}>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                    </div>
                </div>
            </section>
            {/* contenedor de reglamento*/}
            <section id="reglamento" class="h-[calc(100vh-73px)] w-full overflow-y-auto overflow-hidden ">
                <h1 className={`${unna.className} text-center font-light text-3xl py-1`}>MANUAL-DE-CONVIVENCIA</h1>
                <div className="bg-[url('/img/casapiscina.png')] bg-no-repeat bg-[length:100%_auto] bg-[center_top_40%] h-[82%] flex items-center justify-center">
                    <div className='bg-[#364E67] rounded-sm bg-opacity-55 h-[75%] w-[38%] p-7'> 
                        <p className= {`${nunito.className} text-white text-base `}>
                        El reglamento de Villa del Sol es básicamente nuestra guía para mantener la buena convivencia en el conjunto. En él se explican las reglas para el uso de las áreas comunes, las responsabilidades que tenemos como vecinos y las medidas que nos ayudan a vivir en un espacio seguro y organizado.
                        Si alguna vez tienes dudas o necesitas recordarlas, solo tienes que hacer clic en el ícono de archivo para acceder al reglamento completo en PDF.
                        </p>
                        <a href="https://www.sierrasdelesteph.com/wordpress/wp-content/uploads/2016/03/MANUAL_SIERRAS_DEL_ESTE.pdf" className="flex flex-col items-center gap-2 ml-15 mt-6">
                            <img src="/iconos/archivo.svg" alt="WhatsApp" className="w-10 h-10" />
                            <span className={`${nunito.className} text-white text-sm font-light `}>Ver manual</span>
                        </a>
                    </div>
                </div>
                {/* contiene el footer */}
                <div className= "bg-[url('/svg/fondo.svg')] pl-[330px] pt-2 h-[57px]">
                    <section className={` ${amiri.className} w-2/3 h-10 flex gap-36`}>
                        <a href="#" className="flex items-center gap-2 ">
                            <img src="/iconos/Whatsap.svg" alt="WhatsApp" className="w-8 h-8" />
                            <span className="-mt-2">3135037822</span>
                        </a>

                        <a href="#" className="flex items-center gap-2 ">
                            <img src="/iconos/instagram.svg" alt="WhatsApp" className="w-7 h-7" />
                            <span className="-mt-2">StateVilladelSol</span>
                        </a>

                        <a href="#" className="flex items-center gap-2">
                            <img src="/iconos/gmail.svg" alt="WhatsApp" className="w-7 h-7" />
                            <span className="-mt-2">villadelsol@gmail.com</span>
                        </a>

                    </section>
                </div>

            </section>
        </main>

    )
}
