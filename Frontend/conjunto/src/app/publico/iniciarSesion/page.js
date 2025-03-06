'use client';

import { unna, amiri, poppinis, nunito } from '../../utils/fonts.js';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from "next/navigation";
import ContraseñaInput from '../../components/PasswordInput.jsx';

export default function IniciarSesion() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [mensaje, setMensaje] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Función para realizar la solicitud de inicio de sesión
    const iniciarSesion = async (credenciales) => {
        try {
            const res = await fetch("http://localhost:3002/api/iniciarSesion/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credenciales),
            });

            const responseData = await res.json();

            if (!res.ok) {
                // Manejar errores específicos del backend
                throw new Error(responseData.details || responseData.error || "Error al iniciar sesión");
            }

            return responseData;
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            throw error;
        }
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Limpiar errores anteriores

        // Validación de campos
        if (!email || !password) {
            setError("Por favor, complete todos los campos");
            return;
        }

        try {
            const credenciales = { email, password };
            const data = await iniciarSesion(credenciales);

            // Guardar el token y el rol en localStorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("rol", data.rol);

            // Redirigir según el rol
            switch(data.rol) {
                case 'Administrador':
                    router.push('/publico/Home');
                    break;
                case 'Propietario':
                    router.push('/publico/Home');
                    break;
                case 'Residente':
                    router.push('/publico/Home');
                    break;
                default:
                    router.push('/publico/Home');
            }
        } catch (error) {
            // Manejar errores de inicio de sesión
            setError(error.message || "Error al iniciar sesión");
            console.error("Error de inicio de sesión:", error);
        }
    };

    useEffect(() => {
        const confirmado = searchParams.get("confirmado");

        if (confirmado === "true") {
            setMensaje("Tu correo ha sido verificado con éxito. Ahora puedes iniciar sesión.");
        }
    }, [searchParams]);

    return (
        <main className="flex overflow-hidden">
            <section className="w-[550px] h-[100vh] relative">
                <img src="/svg/iniciarSesion.svg" alt="registrar SVG" className="w-[700px] absolute top-16 ml-6" />
            </section>

            <section className="border-[#FF8800] border-2 rounded-lg w-[370px] h-[88vh] my-6 ml-8 mr-20">
                <section className="w-full h-44">
                    <img src="/img/logoTitulo.png" alt="registrar SVG" className="w-[270px] absolute mx-[52px] top-3" />
                    <h1 className={`${unna.className} mx-[41%] text-4xl pt-44`}>¡Hola!</h1>
                </section>

                {/* Mostrar mensaje de verificación */}
                {mensaje && (
                    <div className="text-green-600 text-center font-semibold my-4">
                        {mensaje}
                    </div>
                )}

                {/* Mostrar errores de inicio de sesión */}
                {error && (
                    <div className="text-red-600 text-center font-semibold my-4">
                        {error}
                    </div>
                )}
 
                <form onSubmit={handleSubmit} className="w-auto h-auto flex flex-col ml-8 mr-5 mt-20 gap-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${poppinis.className} font-medium text-sm border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`}
                        placeholder="Email"
                    />
                    <ContraseñaInput
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña" 
                    />
                    <a href="/publico/recuperarPassword" className="text-[10px] text-end -mt-2 font-medium text-[#6c6c6a] hover:text-[#faa307]">
                        ¿Olvidaste tu contraseña?
                    </a>
                    <button 
                        type="submit" 
                        className={`${poppinis.className} bg-[#FDD073] text-white w-[60%] h-7 shadow-md rounded-xl mx-16 mt-4 text-[15px] font-semibold transition duration-300 hover:bg-[#FDD078] hover:text-white`}
                    >
                        Iniciar sesión
                    </button>
                    <section className='w-54 h-7 flex p-1 gap-1 mx-14 text-[12px]'>
                        <h4 className="font-medium text-[#6c6c6a]">¿No tienes una cuenta?</h4>
                        <a href="/publico/registrarse" className="font-medium text-[#F35B04] hover:text-orange-700">
                            Registrarse
                        </a>
                    </section>
                </form>
            </section>
        </main>
    );
}