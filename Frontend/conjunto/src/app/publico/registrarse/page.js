"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { unna, amiri, poppinis } from '../../utils/fonts.js'
import ContraseñaInput from '../../components/PasswordInput.jsx';


export default function Registro() {
    const router = useRouter();
    const searchParams = useSearchParams(); // Obtiene los parámetros de la URL

    //conecxion con el backend
    const registrarPropietario = async (data) => {
        try {
            const res = await fetch("http://localhost:3002/api/propietarios/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Error al registrar el propietario");
            }

            return res.json(); // Retorna la respuesta
        } catch (error) {
            console.error("Error al registrar el propietario:", error);
            return { error: error.message }; // Devuelve el error al frontend
        }
    }; 

    const verificarCorreo = async (token) => { 
        try {
            const res = await fetch(`http://localhost:3002/api/propietarios/verificar-correo/${token}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!res.ok) {
                throw new Error("Error al verificar el correo");
            }
    
            const resultado = await res.json(); // `res.json()` correctamente definido
    
            if (resultado.mensaje === "Correo verificado exitosamente.") { 
                console.log("Correo confirmado."); 
                alert(resultado.mensaje); 
                router.push("/publico/iniciarSesion");
            } else {
                console.error("El correo aún no está confirmado.");
            }
        } catch (error) {
            console.error("Error al verificar el correo:", error);
        }
    };
    

    useEffect(() => {
        const token = searchParams.get("token"); // Obtener el token de la URL
        if (token) verificarCorreo(token);
    }, [searchParams]); // Se ejecuta cuando searchParams cambie
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault(); // Esto evita que la página se recargue
    
        // Validar las contraseñas
        if (formValues.contraseña !== formValues.confirmarContraseña) {
            console.error("Las contraseñas no coinciden.");
            
            return;
        }
    
        // Enviar los datos al backend
        const result = await registrarPropietario(formValues);
    
        // Maneja la respuesta del servidor
        if (result.error) {
            console.error("Error:", result.error);
        } else {
            alert("Confirma la dirección de tu correo.");
            console.log("Registro exitoso:", result);
        }
    };
    
    const [formValues, setFormValues] = useState({
        email: "",
        nombre: "",
        apellido: "",
        cc: "",
        direccion: "",
        contraseña: "",
        confirmarContraseña: "",
    });

    //funcion para manejar cambios
    const handleChange = (e) => {
        setFormValues({
            ...formValues, // Conserva los valores actuales
            [e.target.name]: e.target.value, // Actualiza solo el campo editado
        });
    };

    return (
        /* contenedor principal */
        <main className="flex overflow-hidden">
            {/* esta es la ilustracion*/}
            <section className=" w-[550px] h-[100vh] relative ">
                {<img src="/svg/registrarse.svg" alt="registrar SVG" className="w-[500px] absolute top-12 ml-6 "></img>}

            </section>

            {/* contirnr el formulario*/}
            <section className="border-[#FF8800] border-2 rounded-lg w-[370px] h-[88vh] my-6 ml-8 mr-20">
                {/* logo y texto principal */}
                <section className="w-full h-44 " >
                    {<img src="/img/logoTitulo.png" alt="registrar SVG" className="w-[200px] absolute mx-[78px] top-4 "></img>}
                    <h1 className={`${unna.className}  mx-[90px] text-4xl pt-32`}>¡Bienvenido!</h1>
                </section>
                {/* formulario */}

                <form onSubmit={handleSubmit} className=" w-auto h-auto flex flex-col ml-8 mr-5 gap-2">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`}
                        placeholder="Email" />
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`}
                        placeholder="Nombre" />
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formValues.apellido}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Apellido" />
                    <input
                        type="text"
                        id="cc"
                        name="cc"
                        value={formValues.cc}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Cc" />
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={formValues.direccion}
                        onChange={handleChange}
                        className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Direccion de Vivienda" />
                    <ContraseñaInput
                        id="contraseña"
                        name="contraseña"
                        value={formValues.contraseña} // Valor proveniente del estado en Registro
                        onChange={handleChange}
                        placeholder="Contraseña" />
                    <ContraseñaInput
                        id="confirmar_contraseña"
                        name="confirmarContraseña"
                        value={formValues.confirmarContraseña} // Valor proveniente del estado en Registro
                        onChange={handleChange}
                        placeholder="Confirmar contraseña" />

                    <button type="submit" className={`${poppinis.className} bg-[#FDD073] text-white w-[60%] h-8 shadow-md rounded-xl mx-16 mt-4   text-[15px] font-semibold transition duration-300 hover:bg-[#FDD078] hover:text-white`}>
                        Registrarse
                    </button>

                    <a href="/publico/iniciarSesion" className="text-[12px] text-center ml-3 mt-2 font-medium text-[#F35B04] hover:text-orange-700">
                        Iniciar sesion
                    </a>
                </form>

            </section>
        </main>
    );
}


