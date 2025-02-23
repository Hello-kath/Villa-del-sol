"use client";
import React, { useState } from 'react';
import { Search, ChevronDown, Bell } from 'lucide-react';

const FinanceManagement = () => {
    const [paymentType, setPaymentType] = useState('No pagos');

    const mockData = [
        {
            direccion: 'sofiaurbano@gmail.com',
            nombre: 'Sofia',
            apellido: 'Urbano',
            cc: '02/03/2023',
            telefono: '02/03/2023',
            valorPago: '02/03/2023'
        },
        // Repeated data for demonstration
        ...Array(4).fill({
            direccion: '02/03/2023',
            nombre: '02/03/2023',
            apellido: '02/03/2023',
            cc: '02/03/2023',
            telefono: '02/03/2023',
            valorPago: '02/03/2023'
        })
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-serif text-center mb-8">GESTION DE FINANZAS</h1>

            <div className="flex gap-4 mb-8">
                {/* Payment Type Dropdown */}
                <div className="relative flex-1">
                    <div className="border rounded-full px-4 py-2 flex items-center justify-between cursor-pointer">
                        <span className="text-gray-600">{paymentType}</span>
                        <ChevronDown className="text-gray-400" size={20} />
                    </div>
                </div>

                {/* Search Input */}
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="listar pagos de seguridad"
                        className="w-full border rounded-full px-4 py-2 pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>

                {/* Search Button */}
                <button className="bg-orange-200 text-white px-8 rounded-full hover:bg-orange-300 transition-colors">
                    Buscar
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">Direccion</th>
                            <th className="text-left py-3 px-4 font-medium">Nombre</th>
                            <th className="text-left py-3 px-4 font-medium">Apellido</th>
                            <th className="text-left py-3 px-4 font-medium">Cc</th>
                            <th className="text-left py-3 px-4 font-medium">Telefono</th>
                            <th className="text-left py-3 px-4 font-medium">Valor del pago</th>
                            <th className="text-left py-3 px-4 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((row, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-3 px-4 text-gray-600">{row.direccion}</td>
                                <td className="py-3 px-4 text-gray-600">{row.nombre}</td>
                                <td className="py-3 px-4 text-gray-600">{row.apellido}</td>
                                <td className="py-3 px-4 text-gray-600">{row.cc}</td>
                                <td className="py-3 px-4 text-gray-600">{row.telefono}</td>
                                <td className="py-3 px-4 text-gray-600">{row.valorPago}</td>
                                <td className="py-3 px-4">
                                    <Bell className="text-orange-400 cursor-pointer" size={20} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinanceManagement;