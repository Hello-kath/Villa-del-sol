
import { unna, amiri, poppinis } from '../../utils/fonts.js'


import ContraseñaInput from '../../components/ContraseñaInput';


export default function Registro() {
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
                <section className=" w-auto h-auto flex flex-col ml-8 mr-5 gap-2" >
                    <input type="email" id="email" name="email" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Email" />
                    <input type="text" id="nombre" name="nombre" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Nombre" />
                    <input type="text" id="apellido" name="apellido" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Apellido" />
                    <input type="text" id="cc" name="cc" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Cc" />
                    <input type="text" id="direccion" name="direccion" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Direccion de Vivienda" />
                    <ContraseñaInput id="contraseña" name="contraseña" placeholder="Contraseña" />
                    <ContraseñaInput id="confirmar_contraseña" name="confirmar_contraseña" placeholder="Confirmar contraseña" />

                    <button className={`${poppinis.className} bg-[#FDD073] text-white w-[60%] h-8 shadow-md rounded-xl mx-16 mt-4   text-[15px] font-semibold transition duration-300 hover:bg-[#FDD078] hover:text-white`}>
                        Registrarse
                    </button>

                    <a href="/publico/iniciarSesion" className="text-[12px] text-center ml-3 mt-2 font-medium text-[#F35B04] hover:text-orange-700">
                        Iniciar sesion
                    </a>

                </section>
            </section>
        </main>
    );
}


