import React from "react";
import equipoImagen from "../assets/staff/staff.svg"; 

// Imágenes de los asesores y gerentes
import asesor1 from "../assets/staff/asesor1.svg";
import asesor2 from "../assets/staff/asesor2.svg";
import asesor3 from "../assets/staff/asesor3.svg";
import asesor4 from "../assets/staff/asesor4.svg";
import asesor5 from "../assets/staff/asesor5.jpeg";
import asesor6 from "../assets/staff/asesor6.svg";
import gerente1 from "../assets/staff/gerente1.svg";
import gerente2 from "../assets/staff/gerente2.svg";

function Nosotros() {
  return (
    <section id="nosotros" className="bg-[#fefefe] py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Sección en dos columnas */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          {/* Imagen del equipo */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={equipoImagen}
              alt="Nuestro equipo"
              className="w-full h-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Descripción de la agencia */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-6">
            <h2 className="text-[#2d365d] text-4xl font-semibold mb-4">
              Conoce a Nuestra Agencia
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              En nuestra agencia nos mueve la pasión por crear experiencias únicas y memorables para cada uno de nuestros clientes. Somos un equipo comprometido en brindar soluciones personalizadas, basadas en tus necesidades y sueños. Lo que nos motiva es ver cómo nuestros clientes disfrutan de cada viaje, cada destino y cada momento que planificamos con ellos.
            </p>
          </div>
        </div>

        {/* Staff de Asesores y Gerentes */}
        <div>
          <h3 className="text-[#2d365d] text-3xl font-semibold mb-8 text-center">
            Nuestro Talento: El Equipo Detrás de Cada Viaje
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{ img: asesor1, nombre: "Jose Escobar Noriega", cargo: "Asesor Comercial" },
              { img: asesor2, nombre: "Jhonatan Jara", cargo: "Asesor Comercial" },
              { img: asesor3, nombre: "Anais Silva", cargo: "Asesora de Viajes" },
              { img: asesor4, nombre: "Abiluz Jara", cargo: "Asesora de Viajes" },
              { img: asesor5, nombre: "Brigitte Hidalgo", cargo: "Asesora de Viajes" },
              { img: asesor6, nombre: "Alexander Flores", cargo: "Asesor Comercial" }].map((persona, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
                <img
                  src={persona.img}
                  alt={persona.nombre}
                  className="w-48 h-48 object-cover mb-6 rounded-full border-4 border-[#2cbfcf] shadow-lg"
                />
                <h4 className="text-[#2d365d] text-xl font-semibold mb-2">{persona.nombre}</h4>
                <p className="text-gray-600 text-sm">{persona.cargo}</p>
              </div>
            ))}
          </div>

                    {/* Gerentes centralizados con diseño responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8 justify-center items-center">
            {[{ img: gerente1, nombre: "Demetrio Jara Mendoza", cargo: "Gerente de Agencia" },
              { img: gerente2, nombre: "Abela Hurtado", cargo: "Gerente de Operaciones" }].map((persona, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center max-w-xs sm:max-w-sm mx-auto">
                <img
                  src={persona.img}
                  alt={persona.nombre}
                  className="w-48 h-48 object-cover mb-6 rounded-full border-4 border-[#2cbfcf] shadow-lg"
                />
                <h4 className="text-[#2d365d] text-xl font-semibold mb-2">{persona.nombre}</h4>
                <p className="text-gray-600 text-sm">{persona.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
