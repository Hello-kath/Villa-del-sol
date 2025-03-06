'use client';
import React from 'react';
import { Check, X } from 'lucide-react';
import { unna, amiri, poppinis, nunito } from '../../utils/fonts.js'

const HistorialVisitantes = () => {
    // Datos de ejemplo - reemplazar con tu fuente de datos real
    const visitantes = [
        {
            direccion: 'Sofia',
            nombre: 'Sofia',
            apellido: 'Urbano',
            fecha: '02/03/2023',
            hora: '02/03/2023',
            validado: true
        },
        {
            direccion: '02/03/2023',
            nombre: '02/03/2023',
            apellido: '02/03/2023',
            fecha: '02/03/2023',
            hora: '02/03/2023',
            validado: false
        },
        {
            direccion: '02/03/2023',
            nombre: '02/03/2023',
            apellido: '02/03/2023',
            fecha: '02/03/2023',
            hora: '02/03/2023',
            validado: true
        },
        {
            direccion: '02/03/2023',
            nombre: '02/03/2023',
            apellido: '02/03/2023',
            fecha: '02/03/2023',
            hora: '02/03/2023',
            validado: true
        },
        {
            direccion: '02/03/2023',
            nombre: '02/03/2023',
            apellido: '02/03/2023',
            fecha: '02/03/2023',
            hora: '02/03/2023',
            validado: true
        }
    ];

    return (
        <div className="px-28 pt-8">
            <h1 className={`${unna.className} text-3xl font-semibold text-center mb-8`}>Historial de visitantes</h1>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Nombre
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Apellido
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Fecha
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Hora
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Validar Entrada
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {visitantes.map((visitante, indice) => (
                            <tr key={indice} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {visitante.nombre}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {visitante.apellido}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {visitante.fecha}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {visitante.hora}
                                </td>
                                <td className="px-14 py-4 text-sm">
                                    {visitante.validado ? (
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-5 h-5 text-green-600" />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                            <X className="w-5 h-5 text-red-600" />
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistorialVisitantes;