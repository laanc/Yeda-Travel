import React from "react";
import destino1 from "../assets/destinos/madrid.svg";  
import destino2 from "../assets/destinos/barcelona.svg";
import destino3 from "../assets/destinos/roma.svg";
import destino4 from "../assets/destinos/paris.svg";
import destino5 from "../assets/destinos/londres.svg";
import destino6 from "../assets/destinos/lisboa.svg";

function Destinos() {
  // Componente para cada destino
  const DestinoCard = ({ imgSrc, nombre }) => (
    <div className="relative group">
      <img
        src={imgSrc}
        alt={nombre}
        className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      {/* Overlay para mobile: siempre visible en la parte inferior */}
      <div className="block sm:hidden absolute inset-x-0 bottom-0 bg-[#2d365d] bg-opacity-40 py-2 rounded-b-lg">
        <h3 className="text-white text-xl font-semibold text-center">{nombre}</h3>
      </div>
      {/* Overlay para desktop: en lugar de cubrir toda la imagen, solo un panel en la parte inferior */}
      <div className="hidden sm:flex absolute inset-x-0 bottom-0 h-16 bg-[#2d365d] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 justify-center items-center">
        <h3 className="text-white text-xl font-semibold">{nombre}</h3>
      </div>
    </div>
  );

  return (
    <section className="bg-[#fefefe] py-16">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-[#2d365d] text-3xl font-semibold mb-8">
          Descubre nuestros destinos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <DestinoCard imgSrc={destino1} nombre="Madrid" />
          <DestinoCard imgSrc={destino2} nombre="Barcelona" />
          <DestinoCard imgSrc={destino3} nombre="Roma" />
          <DestinoCard imgSrc={destino4} nombre="París" />
          <DestinoCard imgSrc={destino5} nombre="Londres" />
          <DestinoCard imgSrc={destino6} nombre="Lisboa" />
        </div>
      </div>
    </section>
  );
}

export default Destinos;
