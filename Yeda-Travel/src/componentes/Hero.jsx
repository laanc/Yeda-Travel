import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; // Asegúrate de que la ruta sea correcta

function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa Oscura */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Ajustado la opacidad a 50% */}

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#fefefe] drop-shadow-lg">
          Descubre el mundo con nosotros
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#fefefe]">
          Encuentra los mejores destinos y ofertas para tu próximo viaje.
        </p>
        <Link
          to="#destinos"
          className="mt-6 inline-block bg-[#2cbfcf] text-[#fefefe] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#238b94] transition transform hover:scale-105 focus:outline-none"
        >
          Explorar Destinos
        </Link>
      </div>
    </section>
  );
}

export default Hero;
