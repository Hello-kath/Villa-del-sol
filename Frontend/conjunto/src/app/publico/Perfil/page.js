'use client';

import { unna, amiri, poppinis, nunito } from '../../utils/fonts.js'
import { useState } from 'react';
import { useClient } from 'next/dynamic';

export default function Perfil() {
    return (
        <main className="border-[#FF8800] border-2 rounded-lg w-100wh h-[82vh] mt-5 mx-32">
            {/* foto y nombre */}
            <section className=' h-44'>
                <div className='flex'>
                    <img src="/iconos/perfil.svg" alt="registrar SVG" className="w-[120px] pt-3 ml-[45%] " />
                    <img src="/iconos/camara.svg" alt="registrar SVG" className="w-7 pt-24 -ml-2 pointer-events-auto " />
                </div>
                <div className='flex flex-row items-center h-12 pl-[40%]'>
                    <img src="/iconos/editarUser.svg" alt="registrar SVG" className="w-7 mr-2" />
                    <h1 className={`${unna.className} text-2xl`}>Santiago Urbano</h1>
                </div>

            </section>

            {/* Datos del perfil */}
            <section className='h-[53vh] flex'>
                <div className='w-1/2 h-auto flex flex-col pt-6 pl-14 pr-10 gap-1'>
                    <label htmlFor="email" className="font-medium text-sm p-0 text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] focus:outline-none bg-transparent`} />

                    <label htmlFor="nombre" className="font-medium text-sm text-gray-700">Nombre</label>
                    <input type="text" id="nombre" name="nombre" className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] focus:outline-none bg-transparent`} />

                    <label htmlFor="apellido" className="font-medium text-sm text-gray-700">Apellido</label>
                    <input type="text" id="apellido" name="apellido" className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800]  focus:outline-none bg-transparent`} />

                    <label htmlFor="cc" className="font-medium text-sm text-gray-700">Cédula</label>
                    <input type="text" id="cc" name="cc" className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] focus:outline-none bg-transparent`}  />

                    <label htmlFor="direccion" className="font-medium text-sm text-gray-700">Dirección de Vivienda</label>
                    <input type="text" id="direccion" name="direccion" className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] focus:outline-none bg-transparent`} />
                </div>

                <div className='w-1/2 h-auto flex flex-col pt-6 pl-7 pr-14 gap-1'>
                    {/* Input para el número de teléfono */}
                    <label htmlFor="telefono" className="font-medium text-sm text-gray-700">Número de Teléfono</label>
                    <input type="number" id="telefono" name="telefono" className="font-medium text-sm border-b-2 border-orange-400 pb-2 focus:outline-none bg-transparent focus:ring-0 focus:ring-offset-0 hover:border-orange-500 focus:border-orange-500 placeholder-gray-400"  />

                    {/* Select para el rol */}
                    <label htmlFor="rol" className="font-medium text-sm text-gray-700">Rol</label>
                    <select id="rol" name="rol" className="font-medium text-sm border-b-2 border-orange-400 pb-2 focus:outline-none bg-transparent focus:ring-0 focus:ring-offset-0 hover:border-orange-500 focus:border-orange-500 text-gray-900">
                        <option className='text-gray-500' value="" hidden>Seleccione un rol</option>
                        <option value="propietario">Propietario</option>
                        <option value="administrador">Administrador</option>
                        <option value="residente">Residente</option>
                    </select>

                    {/* Select para el género */}
                    <label htmlFor="sexo" className="font-medium text-sm text-gray-700">Sexo</label>
                    <select id="sexo" name="sexo" className="font-medium text-sm border-b-2 border-orange-400 pb-2 focus:outline-none bg-transparent focus:ring-0 focus:ring-offset-0 hover:border-orange-500 focus:border-orange-500 text-gray-900">
                        <option className='text-gray-500' value="" hidden>Seleccione su sexo</option>
                        <option value="femenino">Femenino</option>
                        <option value="masculino">Masculino</option>
                        <option value="otro">Otro</option>
                    </select>

                    <button className={`${poppinis.className} bg-[#FDD073] text-white w-[30%] h-8 shadow-md rounded-xl mx-40 mt-6   text-[15px] font-semibold transition duration-300 hover:bg-[#FDD078] hover:text-white`}>
                        Guardar
                    </button>
                </div>
            </section>

        </main>
    )
}