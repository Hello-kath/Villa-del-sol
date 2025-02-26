"use client";
import React, { useState } from 'react';
import { Search, ChevronDown, Bell } from 'lucide-react';
import { unna, amiri, poppinis, nunito } from '../../utils/fonts.js'

const GestionFinanzas = () => {
    const [tipoPago, setTipoPago] = useState('No pagos');
    const [mostrarMenuPagos, setMostrarMenuPagos] = useState(false);
    const [categoriaConsulta, setCategoriaConsulta] = useState('');
    const [mostrarMenuConsulta, setMostrarMenuConsulta] = useState(false);
    const [textoConsulta, setTextoConsulta] = useState('');

    const opcionesPago = ['Pagos', 'No pagos'];
    const opcionesConsulta = ['Administración', 'Seguridad', 'Servicios'];

    const datosMuestra = [
        {
            direccion: 'sofiaurbano@gmail.com',
            nombre: 'Sofia',
            apellido: 'Urbano',
            cc: '02/03/2023',
            telefono: '02/03/2023',
            valorPago: '02/03/2023'
        },
        // Datos repetidos para demostración
        ...Array(4).fill({
            direccion: '02/03/2023',
            nombre: '02/03/2023',
            apellido: '02/03/2023',
            cc: '02/03/2023',
            telefono: '02/03/2023',
            valorPago: '02/03/2023'
        })
    ];

    const realizarBusqueda = () => {
        console.log('Buscando:', textoConsulta, 'en categoría:', categoriaConsulta);
        // Implementación de búsqueda iría aquí
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className={`${unna.className} text-3xl font-serif text-center mb-8`}>GESTIÓN DE FINANZAS</h1>

            <div className="flex gap-4 mb-8">
                {/* Menú desplegable de tipo de pago */}
                <div className="relative flex-1">
                    <div
                        className="border-2 border-orange-300 rounded-full px-4 py-2 flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-orange-200"
                        onClick={() => setMostrarMenuPagos(!mostrarMenuPagos)}
                    >
                        <span className="text-gray-600">{tipoPago}</span>
                        <ChevronDown className="text-orange-400" size={20} />
                    </div>

                    {mostrarMenuPagos && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-orange-200 rounded-lg shadow-lg">
                            {opcionesPago.map((opcion) => (
                                <div
                                    key={opcion}
                                    className="px-4 py-2 hover:bg-orange-50 cursor-pointer"
                                    onClick={() => {
                                        setTipoPago(opcion);
                                        setMostrarMenuPagos(false);
                                    }}
                                >
                                    {opcion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Campo de búsqueda con menú desplegable */}
                <div className="relative flex-1">
                    <div className="relative">
                        <input
                            type="text"
                            value={textoConsulta}
                            onChange={(e) => setTextoConsulta(e.target.value)}
                            placeholder={categoriaConsulta || "listar pagos de seguridad"}
                            className="w-full border-2 border-orange-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-200"
                            onClick={() => setMostrarMenuConsulta(true)}
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" size={20} />
                        <div
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setMostrarMenuConsulta(!mostrarMenuConsulta)}
                        >
                            <ChevronDown className="text-orange-400" size={20} />
                        </div>
                    </div>

                    {mostrarMenuConsulta && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-orange-200 rounded-lg shadow-lg">
                            {opcionesConsulta.map((opcion) => (
                                <div
                                    key={opcion}
                                    className="px-4 py-2 hover:bg-orange-50 cursor-pointer"
                                    onClick={() => {
                                        setCategoriaConsulta(opcion);
                                        setMostrarMenuConsulta(false);
                                    }}
                                >
                                    {opcion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Botón de búsqueda */}
                <button
                    className="bg-orange-300 text-white px-8 rounded-full hover:bg-orange-400 transition-colors"
                    onClick={realizarBusqueda}
                >
                    Buscar
                </button>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">Dirección</th>
                            <th className="text-left py-3 px-4 font-medium">Nombre</th>
                            <th className="text-left py-3 px-4 font-medium">Apellido</th>
                            <th className="text-left py-3 px-4 font-medium">Cc</th>
                            <th className="text-left py-3 px-4 font-medium">Teléfono</th>
                            <th className="text-left py-3 px-4 font-medium">Valor del pago</th>
                            <th className="text-left py-3 px-4 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosMuestra.map((fila, indice) => (
                            <tr key={indice} className="border-b">
                                <td className="py-3 px-4 text-gray-600">{fila.direccion}</td>
                                <td className="py-3 px-4 text-gray-600">{fila.nombre}</td>
                                <td className="py-3 px-4 text-gray-600">{fila.apellido}</td>
                                <td className="py-3 px-4 text-gray-600">{fila.cc}</td>
                                <td className="py-3 px-4 text-gray-600">{fila.telefono}</td>
                                <td className="py-3 px-4 text-gray-600">{fila.valorPago}</td>
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

export default GestionFinanzas;