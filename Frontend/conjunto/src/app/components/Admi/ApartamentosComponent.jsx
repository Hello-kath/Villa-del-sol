"use client";
import React, { useState } from 'react';
import { Pen, Trash2, Plus, X } from 'lucide-react';
import { unna, amiri, poppinis, nunito } from '../../utils/fonts.js'

//conexion con el backend 
const registrarApartamento = async (data) => {
    try {
        const res = await fetch("http://localhost:3002/api/registrarApt", { // Conectar al endpoint del backend
            method: "POST", // Método HTTP
            headers: {
                "Content-Type": "application/json", // Encabezado indicando formato JSON
            },
            body: JSON.stringify(data), // Convertir datos a JSON para enviarlos en la solicitud
            cache: "no-store", // Evitar almacenamiento en caché
        });

        if (!res.ok) { // Verificar si la conexión fue exitosa
            throw new Error("Error al registrar el apartamento"); // Error si el endpoint falla
        }

        return res.json(); // Retornar respuesta en formato JSON
    } catch (error) {
        console.log("Error al registrar el apartamento: ", error); // Mostrar error en la consola
    }
};


const ApartmentList = () => {
    const [apartments, setApartments] = useState([
        {
            direccion: '12A',
            habitaciones: 'sofiaurbano@gmail.com',
            propietario: 'Santiago',
            apellido: 'Urbano',
            cc: '1022548236',
            telefono: '32286422',
            estado: 'Ocupado'
        },
        {
            direccion: '02/03/2023',
            habitaciones: '02/03/2023',
            propietario: '02/03/2023',
            apellido: '02/03/2023',
            cc: '02/03/2023',
            telefono: '02/03/2023',
            estado: 'Desocupado'
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        direccion: '',
        habitaciones: '',
        estado: 'Desocupado'
    });


    const [error, setError] = useState(""); // Define el estado para errores
    const [mensaje, setMensaje] = useState("") 

    const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    try {
        // Limpia estados previos
        setError('');
        setMensaje('');

        // Validación básica: verificar que no haya campos vacíos
        if (!formData.direccion || !formData.habitaciones || !formData.estado) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        // Envía los datos del formulario al backend
        const response = await registrarApartamento({
            direccion: formData.direccion,
            numHabitaciones: parseInt(formData.habitaciones, 10), // Asegura que sea un número
            estado: formData.estado,
        });

        // Si la solicitud fue exitosa
        setMensaje(response.message); // Muestra mensaje de éxito
        setFormData({
            direccion: '',
            habitaciones: '',
            estado: 'Desocupado', // Resetea los valores a predeterminados
        });
        setIsModalOpen(false); // Cierra el modal después de guardar
    } catch (err) {
        // Manejo de errores
        setError(err.message || "Error al registrar el apartamento");
    }
};

    

    return (
        /* este contiene toda la lista  */
        <section className=" container mx-auto px-4 py-14">
            {/* contiene el titulo y boton para registrar un nuevo apartamento */}
            <section className="flex justify-between items-center mb-8">
                <h1 className={`${unna.className} text-3xl pl-[40%]  font-light text-black`}>Lista de apartamentos</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#ffc300] hover:bg-[#e37902] text-white px-3 py-2 rounded-lg flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Registrar
                </button>
            </section>

            {/* lista */}
            <section className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Direccion
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                N° habitaciones
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre del propietario
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
                                Estado
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {apartments.map((apartment, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.direccion}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.habitaciones}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.propietario}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.apellido}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.cc}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.telefono}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${apartment.estado === 'Ocupado' ? 'bg-opacity-50 text-[#52b788]' :
                                            apartment.estado === 'Desocupado' ? ' text-[#bf0603]' :
                                                'bg-yellow-100 text-yellow-800'}`}>
                                        {apartment.estado}
                                    </span>
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
            </section>

            {isModalOpen && (
                <main className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <section className="bg-white rounded-lg p-6 w-full max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Registrar nuevo apartamento</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Dirección</label>
                                    <input
                                        type="text"
                                        name="direccion"
                                        className="mt-1 block w-full shadow-sm border-b-2 border-[#FF8800] focus:outline-none"
                                        value={formData.direccion}
                                        onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">N° habitaciones</label>
                                    <input
                                        type="text"
                                        name="habitaciones"
                                        className="mt-1 block w-full shadow-sm border-b-2 border-[#FF8800] focus:outline-none"
                                        value={formData.habitaciones}
                                        onChange={(e) => setFormData({ ...formData, habitaciones: e.target.value })}
                                    />
                                </div>


                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Estado</label>
                                    <select
                                        name="estado"
                                        className="mt-1 block w-full shadow-sm border-b-2 border-[#FF8800] focus:outline-none"
                                        value={formData.estado}
                                        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                                    >
                                        <option value="Desocupado">Desocupado</option>
                                        <option value="En mantenimiento">En mantenimiento</option>
                                    </select>
                                </div>
                            </div>

                            <section className="flex justify-end gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#ffc300] hover:bg-[#e37902] text-white rounded-md"
                                >
                                    Guardar
                                </button>
                            </section>
                        </form>
                    </section>
                </main>
            )}

        </section>
    );
};

export default ApartmentList;