'use client';
import React, { useState } from 'react';
import { CheckCircle, ChevronDown, CreditCard, Smartphone, Landmark } from 'lucide-react';

const Pagos = () => {
    const [valorPago, setValorPago] = useState('');
    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const [metodoPagoSeleccionado, setMetodoPagoSeleccionado] = useState({
        nombre: 'Transferencia bancaria',
        icono: <Landmark className="text-orange-400 mr-2" size={20} />
    });

    const metodosPago = [
        {
            nombre: 'Transferencia bancaria',
            icono: <Landmark className="text-orange-400 mr-2" size={20} />
        },
        {
            nombre: 'Nequi',
            icono: <Smartphone className="text-orange-400 mr-2" size={20} />
        },
        {
            nombre: 'Ahorros a la mano',
            icono: <CreditCard className="text-orange-400 mr-2" size={20} />
        }
    ];

    const manejarCambioValor = (e) => {
        setValorPago(e.target.value);
    };

    const manejarPago = () => {
        alert(`Pago procesado: $${valorPago} con ${metodoPagoSeleccionado.nombre}`);
    };


    const seleccionarMetodoPago = (metodo) => {
        setMetodoPagoSeleccionado(metodo);
        setMostrarOpciones(false);
    };

    return (
        <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto mt-10 ">
            {/* Sección izquierda - Formulario de pago */}
            <section className="w-full md:w-[40%] px-10 py-1  ml-44 flex flex-col justify-center border border-[#FF8800] rounded-3xl overflow-hidden">
                <p className="text-xl text-center mb-10">
                    A continuación, ingresa el valor correspondiente al servicio de
                    seguridad y selecciona el método de pago que deseas utilizar.
                </p>

                <section className="mb-8">
                    <p className="text-xl font-semibold mb-4">Total a pagar: $32.000</p>

                    {/* Selector de método de pago */}
                    <section className="relative mb-6">
                        <div
                            className="border border-orange-300 rounded-full p-2 pl-4 flex items-center justify-between bg-white cursor-pointer"
                            onClick={() => setMostrarOpciones(!mostrarOpciones)}
                        >
                            <div className="flex items-center">
                                {metodoPagoSeleccionado.icono}
                                <span className="text-gray-800">{metodoPagoSeleccionado.nombre}</span>
                            </div>
                            <ChevronDown className="text-orange-400 mr-2" size={20} />
                        </div>

                        {/* Lista de opciones de pago */}
                        {mostrarOpciones && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-orange-200 rounded-lg shadow-lg z-10">
                                {metodosPago.map((metodo, index) => (
                                    <div
                                        key={index}
                                        className="p-3 flex items-center hover:bg-orange-50 cursor-pointer"
                                        onClick={() => seleccionarMetodoPago(metodo)}
                                    >
                                        {metodo.icono}
                                        <span className="text-gray-800">{metodo.nombre}</span>
                                        {metodo.nombre === metodoPagoSeleccionado.nombre && (
                                            <CheckCircle className="text-orange-400 ml-auto" size={16} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    <section className="flex items-center mb-4">
                        <span className="text-2xl text-orange-400 mr-2">$</span>
                        <input
                            type="text"
                            value={valorPago}
                            onChange={manejarCambioValor}
                            className="border-b-2 border-gray-300 focus:border-orange-400 outline-none flex-grow text-lg py-2"
                            placeholder="32.000"
                        />
                    </section>
                </section>

                <section className="flex justify-between items-center mt-1">
                    <button
                        onClick={() => window.location.href = '/propietario/HistorialPagos'}
                        className="px-8 py-3 text-gray-800 font-medium rounded-full"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={manejarPago}
                        className="px-10 py-1 bg-[#f48c06] hover:bg-[#e37902] text-white font-medium rounded-xl transition-colors"
                    >
                        Pagar
                    </button>
                </section>
            </section>

            {/* Sección derecha - Imagen */}
            <section className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
                {/* Aquí va la imagen - sustituye la URL por la ruta correcta de tu imagen */}
                <img
                    src="/svg/finanzas.svg"
                    alt="Finanzas"
                    className="w-[450px]"
                />
            </section>
        </main>
    );
};

export default Pagos;