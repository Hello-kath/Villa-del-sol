import React from 'react';

const FondoComponent = ({ children }) => {
    return (
        <section className="flex w-[1100px] sm:h-[79vh] md:h-[81vh] lg:h-[96vh] ml-32 justify-center bg-[#f5f5f5] bg-[url('/svg/fondo.svg')] bg-cover bg-center">
            <figure className="w-full max-w-full overflow-hidden">
                <img src="/svg/formas.svg" alt="figura SVG" className="w-[80.6%] absolute" />
            </figure>
            <div className="relative w-full">{children}</div>
            {/* Esto permite agregar más contenido encima del diseño */}
        </section>
    );
};

export default FondoComponent;