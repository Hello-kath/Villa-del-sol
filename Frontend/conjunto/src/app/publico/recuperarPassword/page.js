import { unna, amiri, poppinis } from '../../utils/fonts.js'

import ContraseñaInput from '../../components/ContraseñaInput';

export default function recuperarPassword() {
    return (
        /* contenedor principal */
        <main className="flex overflow-hidden">
            {/* aqui esta la ilustracion*/}
            <section className=" w-[550px] h-[100vh] relative ">
                {<img src="/svg/iniciarSesion.svg" alt="registrar SVG" className="w-[700px] absolute top-16 ml-6 "></img>}

            </section>

            {/* contirnr el formulario*/}
            <section className="border-[#FF8800] border-2 rounded-lg w-[370px] h-[88vh] my-6 ml-8 mr-20">
                {/* logo y texto principal */}
                <section className="w-full h-44" >
                    {<img src="/img/logoTitulo.png" alt="registrar SVG" className="w-[270px] absolute mx-[52px] top-3 "></img>}
                    <h1 className={`${unna.className} w-full mx-[20%] text-2xl pt-44 `}>Restablecer contraseña</h1>
                </section>
                {/* formulario */}
                <section className=" w-auto h-auto flex flex-col ml-8 mr-5 mt-20 gap-4" >
                    <input type="email" id="email" name="email" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Email" />
                    <ContraseñaInput id="contraseña" name="contraseña" placeholder="Contraseña" />
                    <ContraseñaInput id="confirmar_contraseña" name="confirmar_contraseña" placeholder="Confirmar contraseña" />
                    <button className={`${poppinis.className} bg-[#FDD073] text-white w-[60%] h-7 shadow-md rounded-xl mx-16 mt-4   text-[15px] font-semibold transition duration-300 hover:bg-[#FDD078] hover:text-white`}>
                        Guardar
                    </button>



                </section>
            </section>
        </main>
    )
}