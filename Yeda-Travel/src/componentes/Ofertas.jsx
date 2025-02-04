import React, { useState, useEffect } from "react";

// Importa las imágenes desde la carpeta assets
import ofertaImagen from "../assets/hero.jpg"; // Asegúrate de que la ruta sea correcta
import ofertaParis from "../assets/hero.svg"; // Otra oferta (puedes añadir más imágenes)

function OfertaDelDia({ imagen, titulo, enlace }) {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 horas en segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <div className="bg-[#fefefe] p-6 text-center shadow-md my-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between sm:p-8">
      {/* Miniatura centrada */}
      <div className="w-32 h-32 mb-4 sm:mb-0 sm:mr-6 flex justify-center items-center">
        <img 
          src={imagen} 
          alt="Oferta" 
          className="w-full h-full object-cover rounded-lg" 
        />
      </div>

      {/* Información de la oferta */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-[#2d365d] text-2xl sm:text-3xl font-semibold mb-4">{titulo}</h2>
        <p className="text-[#2cbfcf] text-lg sm:text-xl mb-4">¡No te la pierdas! Aprovecha antes de que se acabe.</p>
        <p className="text-[#2d365d] text-xl sm:text-2xl font-bold mb-6">¡Solo por hoy!</p>
        <div className="text-lg sm:text-xl font-semibold text-[#2cbfcf] mb-6">
          Tiempo restante: {formatTime(timeLeft)}
        </div>
        <a href={enlace} className="bg-[#2cbfcf] text-white py-2 px-6 rounded-lg text-lg">Ver Oferta</a>
      </div>
    </div>
  );
}

function Ofertas() {
  const ofertas = [
    {
      imagen: ofertaImagen,
      titulo: "Oferta en Viaje a Madrid",
      enlace: "/oferta-madrid"
    },
    {
      imagen: ofertaParis,
      titulo: "Oferta en Viaje a París",
      enlace: "/oferta-paris"
    },
    {
      imagen: ofertaImagen,
      titulo: "Oferta en Viaje a Barcelona",
      enlace: "/oferta-madrid"
    },
    {
      imagen: ofertaParis,
      titulo: "Oferta en Viaje a Roma",
      enlace: "/oferta-paris"
    },
    // Agregar más ofertas aquí
  ];

  return (
    <section className="py-16 bg-[#fefefe]">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-[#2d365d] text-3xl font-semibold mb-6">Nuestras Ofertas</h2>
        
        {/* Grid para mostrar dos ofertas por fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ofertas.map((oferta, index) => (
            <OfertaDelDia
              key={index}
              imagen={oferta.imagen}
              titulo={oferta.titulo}
              enlace={oferta.enlace}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ofertas;
