import React, { useState, useEffect } from "react";
import destino1 from "../assets/destinos/madrid.svg";
import destino2 from "../assets/destinos/barcelona.svg";
import destino3 from "../assets/destinos/roma.svg";
import destino4 from "../assets/destinos/paris.svg";
import destino5 from "../assets/destinos/londres.svg";
import destino6 from "../assets/destinos/lisboa.svg";

const destinos = [
  {
    img: destino1,
    nombre: "Madrid",
    info: "Descubre la vibrante capital de España, donde la historia y la modernidad se entrelazan. Disfruta del arte en el Museo del Prado, pasea por el icónico Parque del Retiro y prueba las tradicionales tapas en los bares locales."
  },
  {
    img: destino2,
    nombre: "Barcelona",
    info: "Explora la arquitectura de Gaudí en la Sagrada Familia, disfruta del ambiente mediterráneo en la playa de la Barceloneta y sumérgete en la vida nocturna del Barrio Gótico."
  },
  {
    img: destino3,
    nombre: "Roma",
    info: "La ciudad eterna te espera con su historia milenaria, el imponente Coliseo, la majestuosidad del Vaticano y la mejor pasta y pizza que jamás hayas probado."
  },
  {
    img: destino4,
    nombre: "París",
    info: "La ciudad del amor ofrece una combinación única de arte, moda y gastronomía. Visita la Torre Eiffel, recorre el Museo del Louvre y disfruta de un café en Montmartre."
  },
  {
    img: destino5,
    nombre: "Londres",
    info: "Sumérgete en la historia y la modernidad de Londres, con su famoso Big Ben, la animada vida en Camden Town y la grandeza del Palacio de Buckingham."
  },
  {
    img: destino6,
    nombre: "Lisboa",
    info: "La capital portuguesa te sorprenderá con su encanto histórico, tranvías clásicos y deliciosa gastronomía. Disfruta de las vistas desde el Castillo de San Jorge y pasea por el bohemio barrio de Alfama."
  }
];

function Destinos() {
  const [indice, setIndice] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const intervalo = setInterval(() => {
        setIndice((prev) => (prev + 1) % destinos.length);
      }, 5000);
      return () => clearInterval(intervalo);
    }
  }, [isMobile]);

  const handlePrev = () => {
    setIndice((prev) => (prev - 1 + destinos.length) % destinos.length);
  };

  const handleNext = () => {
    setIndice((prev) => (prev + 1) % destinos.length);
  };

  return (
    <section className="bg-[#fefefe] py-16 flex flex-col items-center">
      <h2 className="text-[#2d365d] text-3xl font-semibold mb-6 text-center">Descubre nuestros destinos</h2>
      <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <img
          src={destinos[indice].img}
          alt={destinos[indice].nombre}
          className={`w-full ${isMobile ? 'max-w-[95%] mx-auto' : 'h-96 object-cover'}`}
        />
        <div className="absolute inset-0 bg-[#2d365d] opacity-60 flex flex-col justify-end p-6 text-white text-center">
          <h3 className="text-2xl font-semibold">{destinos[indice].nombre}</h3>
          <p className="text-base mt-2 bg-black opacity-80 p-3 rounded-lg">{destinos[indice].info}</p>
        </div>
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#2cbfcf] p-2 rounded-full text-white"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2cbfcf] p-2 rounded-full text-white"
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Destinos;
