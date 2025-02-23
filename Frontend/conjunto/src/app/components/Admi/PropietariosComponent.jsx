import React from 'react';
import { Pen, Trash2 } from 'lucide-react';

const OwnersList = () => {
    const owners = [
        {
            email: 'sofiaurbano@gmail.com',
            nombre: 'Sofia',
            apellido: 'Urbano',
            cc: '02/03/2023',
            telefono: '02/03/2023',
            direccion: '02/03/2023'
        },
        {
            email: '02/03/2023',
            nombre: '02/03/2023',
            apellido: '02/03/2023',
            cc: '02/03/2023',
            telefono: '02/03/2023',
            direccion: '02/03/2023'
        },
        // Más datos de ejemplo
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
                Lista de propietarios
            </h1>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Apellido
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cc
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Telefono
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Direccion
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {owners.map((owner, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {owner.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {owner.nombre}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {owner.apellido}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {owner.cc}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {owner.telefono}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {owner.direccion}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex gap-3">
                                        <button className="text-[#6c757d] hover:text-[#212529]">
                                            <Pen className="w-5 h-5" />
                                        </button>
                                        <button className="text-[#c32f27] hover:text-red-900">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OwnersList;