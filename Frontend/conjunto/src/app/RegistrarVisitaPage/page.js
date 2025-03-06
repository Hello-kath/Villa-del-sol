
import { unna, amiri, poppinis } from '../utils/fonts'





export default function Registro() {
    return (
        /* contenedor principal */
        <main className="flex justify-center overflow-hidden">

            {/* contirnr el formulario*/}
            <section className="border-[#FF8800] border-2 rounded-lg w-[370px] h-[88vh] my-6 ml-20 mr-20">
                {/* logo y texto principal */}
                <section className="w-full h-44 " >
                    {<img src="/img/logoTitulo.png" alt="registrar SVG" className="w-[200px] absolute mx-[78px] top-4 "></img>}
                    <h1 className={`${unna.className}  ml-[70px] text-4xl pt-32`}>Hacer una visita</h1>
                </section>
                {/* formulario */}
                <section className=" w-auto h-auto flex flex-col ml-8 mr-5 gap-3" >
                    <input type="email" id="nombre" name="nombre" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Nombre" />
                    <input type="text" id="apellido" name="apellido" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Apellido" />
                    <input type="text" id="motivo" name="motivo" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Motivo" />
                    <input type="text" id="direccion" name="direccion" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Direccion de Vivienda" />
                    <input type="text" id="nameVisita" name="nameVisita" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Nombre a quien visita" />
                    <input type="text" id="ApellVisita" name="ApellVisita" className={`${poppinis.className} font-medium text-sm  border-b-2 border-[#FF8800] pb-2 focus:outline-none bg-transparent`} placeholder="Apellido a quien visita" />
                    <button className={`${poppinis.className} bg-[#FDD073] text-white w-[60%] h-8 shadow-md rounded-xl mx-16 mt-4   text-[15px] font-semibold transition duration-300 hover:bg-[#FDD078] hover:text-white`}>
                        Visitar
                    </button>

                </section>
            </section>
        </main>
    );
}

