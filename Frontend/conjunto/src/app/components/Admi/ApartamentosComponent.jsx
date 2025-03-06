"use client";
import React, { useState, useEffect } from 'react';
import { Pen, Trash2, Plus, X } from 'lucide-react';
import { unna, amiri, poppinis, nunito } from '../../utils/fonts.js'

//conexion con el backend 
const registrarApartamento = async (data) => {
    try {
        const res = await fetch("http://localhost:3002/api/registrarApt", {
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

//hacer la solicitud paar mostrar los apartamentos
const listarApartamentos = async () => {
    try {
        const res = await fetch("http://localhost:3002/api/listarApt", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Error al listar los apartamentos");
        }

        return res.json();
    } catch (error) {
        console.error("Error al listar los apartamentos: ", error);
        return null; // Retorna null en caso de error
    }
};


//hacer la solicitud para editar los apartamentos
const editarApartamento = async (id, data) => {
    console.log(`Enviando petición de edición para ID ${id} con datos:`, data);
    
    try {
        const res = await fetch(`http://localhost:3002/api/editar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            cache: "no-store",
        });

        console.log(`Respuesta recibida con estado: ${res.status} ${res.statusText}`);
        
        // Get the response as text first
        const responseText = await res.text();
        console.log("Texto de respuesta:", responseText);
        
        // Try to parse as JSON if possible
        let responseData;
        try {
            responseData = JSON.parse(responseText);
            console.log("Datos de respuesta parseados:", responseData);
        } catch (e) {
            console.log("No se pudo parsear la respuesta como JSON, usando texto plano");
            responseData = { error: responseText };
        }

        if (!res.ok) {
            // Create a more descriptive error
            const errorMessage = responseData.error || 
                                responseData.message || 
                                `Error al editar el apartamento (${res.status}): ${res.statusText}`;
            
            console.error("Error en la respuesta:", errorMessage);
            // Just return an error object instead of throwing
            return { success: false, error: errorMessage };
        }

        return { success: true, ...responseData };
    } catch (error) {
        console.error("Error de red al editar el apartamento:", error);
        // Return error object instead of throwing
        return { success: false, error: error.message || "Error de conexión al servidor" };
    }
};


const ApartmentList = () => {
    const [apartments, setApartments] = useState([]);
    const [selectedApartmentId, setSelectedApartmentId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        direccion: '',  // Initialize with empty string instead of undefined
        habitaciones: '',
        estado: 'Desocupado',
        idPropietario: ''
    });

    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");

    //modal paar editar un apartamento
    const handleOpenEditModal = (apartment) => {
        if (!apartment) {
            console.error("Error: apartamento no válido");
            return;
        }
        console.log("Apartamento recibido:", apartment);

        setSelectedApartmentId(apartment.id || null);
        setFormData({
            direccion: apartment.direccion || '',  // Add fallbacks for all values
            habitaciones: apartment.habitaciones || '',
            estado: apartment.estado || 'Desocupado',
            idPropietario: apartment.propietario ? apartment.propietario.id : ""
        });
        setIsEditModalOpen(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await listarApartamentos();
            if (data && data.apartamentos) {
                setApartments(data.apartamentos);
            } else {
                console.error("No se encontraron apartamentos");
            }
        };
        fetchData();
    }, []);


    /* esta funcion envia el formulario para editar el apartamento */
    const handleSubmitEdit = async (e) => {
        e.preventDefault();
        setError('');
        setMensaje('');
    
        if (!formData.direccion || !formData.habitaciones || !formData.estado) {
            setError("Todos los campos son obligatorios.");
            return;
        }
    
        const dataToSend = {
            direccion: formData.direccion,
            numHabitaciones: parseInt(formData.habitaciones, 10),
            estado: formData.estado,
            idPropietario: formData.idPropietario || null
        };
        
        console.log("Iniciando edición con ID:", selectedApartmentId);
        console.log("Datos a enviar:", dataToSend);
        
        const response = await editarApartamento(selectedApartmentId, dataToSend);
        
        if (response.success) {
            console.log("Edición exitosa:", response);
            setMensaje(response.mensaje || "Apartamento actualizado correctamente");
            setIsEditModalOpen(false);
            setSelectedApartmentId(null);
            setFormData({
                direccion: '',
                habitaciones: '',
                estado: 'Desocupado',
                idPropietario: ''
            });
    
            const updatedData = await listarApartamentos();
            if (updatedData && updatedData.apartamentos) {
                setApartments(updatedData.apartamentos);
            }
        } else {
            console.error("Falló la edición:", response.error);
            setError(response.error || "Error al editar el apartamento");
        }
    };

    // Maneja el envío del formulario para registrar un nuevo apartamento
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMensaje('');

        if (!formData.direccion || !formData.habitaciones || !formData.estado) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        try {
            // REGISTRAR NUEVO APARTAMENTO
            const response = await registrarApartamento({
                direccion: formData.direccion,
                numHabitaciones: parseInt(formData.habitaciones, 10),
                estado: formData.estado
            });

            setMensaje(response.mensaje || "Apartamento registrado con éxito");
            setFormData({
                direccion: '',
                habitaciones: '',
                estado: 'Desocupado',
                idPropietario: ''
            });
            setIsModalOpen(false);

            // Recargar lista de apartamentos
            const updatedData = await listarApartamentos();
            if (updatedData && updatedData.apartamentos) {
                setApartments(updatedData.apartamentos);
            }
        } catch (err) {
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° habitaciones</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre del propietario</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CC</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {apartments.map((apartment) => (
                            <tr key={apartment.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{apartment.direccion}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{apartment.numHabitaciones}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.propietario ? apartment.propietario.nombre : "No asignado"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.propietario ? apartment.propietario.apellido : "No asignado"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.propietario ? apartment.propietario.cc : "No asignado"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {apartment.propietario ? apartment.propietario.telefono : "No asignado"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                        ${apartment.estado === 'Ocupado' ? 'bg-opacity-50 text-[#52b788]' :
                                            apartment.estado === 'Desocupado' ? 'text-[#bf0603]' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {apartment.estado}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleOpenEditModal(apartment)}
                                            className="text-[#6c757d] hover:text-[#212529]">
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

            {/* modal paar editar un apartamento */}
            {isEditModalOpen && (
                <main className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <section className="bg-white rounded-lg p-6 w-full max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Editar apartamento</h2>
                            <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmitEdit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Dirección</label>
                                    <input
                                        type="text"
                                        name="direccion"
                                        className="mt-1 block w-full shadow-sm border-b-2 border-[#FF8800] focus:outline-none"
                                        value={formData.direccion || ''}
                                        onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">N° habitaciones</label>
                                    <input
                                        type="number"
                                        name="habitaciones"
                                        className="mt-1 block w-full shadow-sm border-b-2 border-[#FF8800] focus:outline-none"
                                        value={formData.habitaciones || ''}
                                        onChange={(e) => setFormData({ ...formData, habitaciones: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Estado</label>
                                    <select
                                        name="estado"
                                        className="mt-1 block w-full shadow-sm border-b-2 border-[#FF8800] focus:outline-none"
                                        value={formData.estado || 'Desocupado'}
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
                                    onClick={() => setIsEditModalOpen(false)}
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