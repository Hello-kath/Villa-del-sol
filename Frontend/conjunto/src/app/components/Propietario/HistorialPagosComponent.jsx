'use client';
import React from 'react';

const PagosRealizar = () => {
    // Datos de ejemplo - basados en la imagen
    const pagos = [
        {
            nombrePropietario: 'Sofia',
            tipoPago: 'Urbano',
            fecha: '02/03/2023',
            valor: '02/03/2023'
        },
        {
            nombrePropietario: '02/03/2023',
            tipoPago: '02/03/2023',
            fecha: '02/03/2023',
            valor: '02/03/2023'
        },
        {
            nombrePropietario: '02/03/2023',
            tipoPago: '02/03/2023',
            fecha: '02/03/2023',
            valor: '02/03/2023'
        },
        {
            nombrePropietario: '02/03/2023',
            tipoPago: '02/03/2023',
            fecha: '02/03/2023',
            valor: '02/03/2023'
        },
        {
            nombrePropietario: '02/03/2023',
            tipoPago: '02/03/2023',
            fecha: '02/03/2023',
            valor: '02/03/2023'
        }
    ];

    return (
        <div className="mt-12 mb-8">
            <h2 className="text-xl text-gray-600 mb-6">Pagos a realizar</h2>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Nombre de propietario
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Tipo de pago
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                fecha
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                valor
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {pagos.map((pago, indice) => (
                            <tr key={indice} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {pago.nombrePropietario}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {pago.tipoPago}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {pago.fecha}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {pago.valor}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <button 
                                        className="bg-[#FF8800] hover:bg-[#e37902] text-white font-medium py-1 px-4 rounded-xl"
                                        onClick={() => {
                                            // Usando createElement para crear el li con onClick
                                            const liElement = document.createElement('li');
                                            liElement.onclick = () => window.location.href = '/propietario/RealizarPago/';
                                            // Ejecutar el evento del li inmediatamente
                                            liElement.click();
                                        }}
                                    >
                                        Pagar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-8">
                <button 
                    className="bg-[#f48c06] hover:bg-[#e37902] text-white font-medium py-1 px-10 rounded-xl"
                    onClick={() => {
                        // Usando createElement para crear el li con onClick
                        const liElement = document.createElement('li');
                        liElement.onclick = () => window.location.href = '/propietario/RealizarPago/';
                        // Ejecutar el evento del li inmediatamente
                        liElement.click();
                    }}
                >
                    Pagar todo
                </button>
            </div>
        </div>
    );
};

// tablas historial y pagos pendientes
const HistorialPagosCompleto = () => {
    return (
        <div className="px-4 md:px-28 pt-8">
            <h1 className="text-3xl font-serif text-center mb-8">GESTIÓN DE FINANZAS</h1>
            
            {/* Tabla de Historial de Pagos */}
            <div className="mb-12">
                <h2 className="text-xl text-gray-600 mb-6">Historial de pagos</h2>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                    Nombre
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                    Tipo de pago
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                    fecha
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                    hora
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                    valor
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {/* Datos de ejemplo */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">Sofia</td>
                                <td className="px-6 py-4 text-sm text-gray-900">Urbano</td>
                                <td className="px-6 py-4 text-sm text-gray-900">02/03/2023</td>
                                <td className="px-6 py-4 text-sm text-gray-900">02/03/2023</td>
                                <td className="px-6 py-4 text-sm text-gray-900">02/03/2023</td>
                            </tr>
                            {/* Repetir para más filas */}
                            {Array(4).fill(0).map((_, indice) => (
                                <tr key={indice} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900">02/03/2023</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">02/03/2023</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">02/03/2023</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">02/03/2023</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">02/03/2023</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            {/* Componente de Pagos por Realizar */}
            <PagosRealizar />
        </div>
    );
};

export default HistorialPagosCompleto;