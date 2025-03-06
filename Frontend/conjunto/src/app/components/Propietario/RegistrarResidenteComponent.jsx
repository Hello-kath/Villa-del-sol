"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { unna, poppinis } from '../../utils/fonts.js';
import ContraseñaInput from '../../components/PasswordInput.jsx';

export default function RegistroResidente() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Función para registrar un residente en el backend
    const registrarResidente = async (data) => {
        try {
            console.log("Enviando datos al backend:", data);
            const res = await fetch("http://localhost:3002/api/registrar/Registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Error al registrar el residente");
            }
            return res.json();
        } catch (error) {
            console.error("Error al registrar el residente:", error);
            return { error: error.message };
        }
    };

    // Función para verificar el correo (si el backend envía token de verificación)
    const verificarCorreo = async (token) => {
        try {
            const res = await fetch(`http://localhost:3002/api/registrar/verificar-correo/${token}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) {
                throw new Error("Error al verificar el correo");
            }
            const resultado = await res.json();
            if (resultado.message === "Correo verificado exitosamente.") {
                alert(resultado.message);
                router.push("/publico/iniciarSesion");
            } else {
                console.error("El correo aún no está confirmado.");
            }
        } catch (error) {
            console.error("Error al verificar el correo:", error);
        }
    };

    // Procesa el token en la URL (verificación de correo), si existe
    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            verificarCorreo(token);
        }
    }, [searchParams]);

    // Estado para manejar los valores del formulario
    const [formValues, setFormValues] = useState({
        email: "",
        nombre: "",
        apellido: "",
        cc: "",
        relacion: "",
        contraseña: "",
        confirmarContraseña: "",
    });

    // Maneja los cambios en los inputs
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar que las contraseñas coincidan
        if (formValues.contraseña !== formValues.confirmarContraseña) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Obtener el token del propietario y decodificarlo para extraer el campo "id"
        const token = localStorage.getItem("token");
        let propietarioId = null;
        if (token) {
            try {
                const decoded = JSON.parse(atob(token.split('.')[1]));
                // Se asume que el token se generó con el campo "id" que corresponde al idPropietario
                propietarioId = decoded.id;
                console.log("Propietario ID extraído del token:", propietarioId);
                if (!propietarioId) {
                    throw new Error("El token no contiene el campo 'id'.");
                }
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                alert("Error en la autenticación. Vuelve a iniciar sesión.");
                return;
            }
        } else {
            alert("No se encontró el token del propietario.");
            return;
        }

        // Agregar el propietarioId a los datos a enviar
        const dataToSend = { ...formValues, propietarioId };

        // Enviar la solicitud al backend
        const result = await registrarResidente(dataToSend);

        if (result.error) {
            console.error("Error:", result.error);
            alert("Error al registrar residente.");
        } else {
            alert("Confirma tu correo para completar el registro.");
            console.log("Registro exitoso:", result);
            
        }
    };

    return (
        <main className="flex overflow-hidden">
            {/* Ilustración */}
            <section className="w-[550px] h-[100vh] relative">
                <img src="/svg/registrarse.svg" alt="registrar SVG" className="w-[500px] absolute top-12 ml-6" />
            </section>

            {/* Formulario */}
            <section className="border-[#FF8800] border-2 rounded-lg w-[370px] h-[88vh] my-8 ml-8 mr-20">
                <section className="w-full h-44">
                    <img src="/img/logoTitulo.png" alt="registrar SVG" className="w-[200px] absolute mx-[78px] top-4" />
                    <h1 className={`${unna.className} mx-[49px] text-4xl pt-32`}>¡Nuevo Residente!</h1>
                </section>

                <form onSubmit={handleSubmit} className="flex flex-col ml-8 mt-2 mr-5 gap-2">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`}
                        placeholder="Nombre"
                    />
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formValues.apellido}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`}
                        placeholder="Apellido"
                    />
                    <input
                        type="text"
                        id="cc"
                        name="cc"
                        value={formValues.cc}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`}
                        placeholder="Cc"
                    />
                    <select
                        id="relacion"
                        name="relacion"
                        value={formValues.relacion}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`}
                    >
                        <option value="" hidden>Seleccione la relación</option>
                        <option value="familiar">Familiar</option>
                        <option value="inquilino">Arrendador</option>
                        <option value="otro">otro</option>
                    </select>
                    <ContraseñaInput
                        id="contraseña"
                        name="contraseña"
                        value={formValues.contraseña}
                        onChange={handleChange}
                        placeholder="Contraseña"
                    />
                    <ContraseñaInput
                        id="confirmar_contraseña"
                        name="confirmarContraseña"
                        value={formValues.confirmarContraseña}
                        onChange={handleChange}
                        placeholder="Confirmar contraseña"
                    />
                    <button
                        type="submit"
                        className={`${poppinis.className} bg-[#FDD073] text-white w-[60%] h-8 shadow-md rounded-xl mx-16 mt-4 text-[15px] font-semibold transition duration-300 hover:bg-[#FDD078] hover:text-white`}
                    >
                        Registrarse
                    </button>
                </form>
            </section>
        </main>
    );
}



