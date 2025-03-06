'use client';

import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { unna, amiri, poppinis, nunito } from '../../utils/fonts.js'

const ListaResidentes = () => {
    // Estado para almacenar los residentes
    const [residentes, setResidentes] = useState([
        {
            email: 'sofiaurbano@gmail.com',
            nombre: 'Sofia',
            apellido: 'Urbano',
            cc: '02/03/2023',
            telefono: '02/03/2023',
            relacion: '02/03/2023',
            direccion: '02/03/2023'
        },
        // Aquí puedes añadir más residentes iniciales si lo deseas
    ]);

    // Función para eliminar un residente
    const eliminarResidente = (email) => {
        setResidentes(residentes.filter(residente => residente.email !== email));
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <header className="flex justify-between items-center mb-6">
                <h1 className={`${unna.className} text-3xl font-serif ml-96`} >Lista de residentes que viven en tu casa</h1>
                <button
                    onClick={() => window.location.href = '/propietario/RegistrarResidente/'}
                    className="flex items-center bg-[#ffc300] hover:bg-[#e37902] text-white font-bold py-2 px-4 rounded"
                    aria-label="Registrar nuevo residente"
                >
                    <Plus className="mr-2" size={25} />
                    Registrar user
                </button>
            </header>

            <section className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <caption className="sr-only">Lista de residentes registrados</caption>
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cc</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Relación</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {residentes.map((residente, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{residente.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{residente.nombre}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{residente.apellido}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{residente.cc}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{residente.telefono}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{residente.relacion}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{residente.direccion}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button
                                            className="text-[#6c757d] hover:text-[#212529]"
                                            aria-label="Editar residente"
                                        >
                                            <Edit size={20} />
                                        </button>
                                        <button
                                            onClick={() => eliminarResidente(residente.email)}
                                            className="text-red-600 hover:text-red-900"
                                            aria-label="Eliminar residente"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {/* Filas adicionales vacías para simular la tabla que se muestra en la imagen */}
                        {[...Array(4)].map((_, index) => (
                            <tr key={`empty-${index}`} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/03/2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/03/2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/03/2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/03/2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/03/2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/03/2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/03/2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button
                                            className="text-[#6c757d] hover:text-[#212529]"
                                            aria-label="Editar residente"
                                        >
                                            <Edit size={20} />
                                        </button>
                                        <button
                                            className="text-[#c32f27] hover:text-red-900"
                                            aria-label="Eliminar residente"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default ListaResidentes;