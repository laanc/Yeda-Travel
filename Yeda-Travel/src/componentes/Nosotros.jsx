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
    <section id="nosotros" className="bg-[#fefefe] py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Imagen de Todo el equipo */}
        <div className="mb-8">
          <img
            src={equipoImagen}
            alt="Nuestro equipo"
            className="w-full h-auto object-cover rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500" // Estilo único y moderno
          />
        </div>

        {/* Descripción de la agencia */}
        <div className="mb-12">
          <h2 className="text-[#2d365d] text-3xl font-semibold mb-4">
            Conoce a Nuestra Agencia
          </h2>
          <p className="text-gray-500 text-lg">
            En nuestra agencia nos mueve la pasión por crear experiencias únicas y memorables para cada uno de nuestros clientes. Somos un equipo comprometido en brindar soluciones personalizadas, basadas en tus necesidades y sueños. Lo que nos motiva es ver cómo nuestros clientes disfrutan de cada viaje, cada destino y cada momento que planificamos con ellos.
          </p>
        </div>

        {/* Staff de Asesores y Gerentes */}
        <div>
          <h3 className="text-[#2d365d] text-3xl font-semibold mb-6">
            Nuestro Talento: El Equipo Detrás de Cada Viaje
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Asesor 1 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src={asesor1}
                alt="Asesor 1"
                className="w-48 h-48 object-cover mx-auto mb-4 rounded-full border-4 border-[#2cbfcf]"  // Imágenes más grandes y bordes modernos
              />
              <h4 className="text-[#2d365d] text-xl font-semibold">Jose Escobar Noriega</h4>
              <p className="text-gray-500 text-sm">Asesor Comercial</p>
            </div>

            {/* Asesor 2 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src={asesor2}
                alt="Asesor 2"
                className="w-48 h-48 object-cover mx-auto mb-4 rounded-full border-4 border-[#2cbfcf]"  // Imágenes más grandes y bordes modernos
              />
              <h4 className="text-[#2d365d] text-xl font-semibold">Jhonatan Jara</h4>
              <p className="text-gray-500 text-sm">Asesor Comercial</p>
            </div>

            {/* Asesor 3 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src={asesor3}
                alt="Asesor 3"
                className="w-48 h-48 object-cover mx-auto mb-4 rounded-full border-4 border-[#2cbfcf]"  // Imágenes más grandes y bordes modernos
              />
              <h4 className="text-[#2d365d] text-xl font-semibold">Anais Silva</h4>
              <p className="text-gray-500 text-sm">Asesora de Viajes</p>
            </div>

            {/* Asesor 4 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src={asesor4}
                alt="Asesor 4"
                className="w-48 h-48 object-cover mx-auto mb-4 rounded-full border-4 border-[#2cbfcf]"  // Imágenes más grandes y bordes modernos
              />
              <h4 className="text-[#2d365d] text-xl font-semibold">Abiluz Jara</h4>
              <p className="text-gray-500 text-sm">Asesora de Viajes</p>
            </div>

            {/* Asesor 5 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src={asesor5}
                alt="Asesor 5"
                className="w-48 h-48 object-cover mx-auto mb-4 rounded-full border-4 border-[#2cbfcf]"  // Imágenes más grandes y bordes modernos
              />
              <h4 className="text-[#2d365d] text-xl font-semibold">Brigitte Hidalgo</h4>
              <p className="text-gray-500 text-sm">Asesora de Viajes</p>
            </div>

            {/* Asesor 6 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src={asesor6}
                alt="Asesor 6"
                className="w-48 h-48 object-cover mx-auto mb-4 rounded-full border-4 border-[#2cbfcf]"  // Imágenes más grandes y bordes modernos
              />
              <h4 className="text-[#2d365d] text-xl font-semibold">Alexander Flores</h4>
              <p className="text-gray-500 text-sm">Asesor Comercial</p>
            </div>

            {/* Gerente 1 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src={gerente1}
                alt="Gerente 1"
                className="w-48 h-48 object-cover mx-auto mb-4 rounded-full border-4 border-[#2cbfcf]"  // Imágenes más grandes y bordes modernos
              />
              <h4 className="text-[#2d365d] text-xl font-semibold">Demetrio Jara Mendoza</h4>
              <p className="text-gray-500 text-sm">Gerente de Agencia</p>
            </div>

            {/* Gerente 2 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src={gerente2}
                alt="Gerente 2"
                className="w-48 h-48 object-cover mx-auto mb-4 rounded-full border-4 border-[#2cbfcf]"  // Imágenes más grandes y bordes modernos
              />
              <h4 className="text-[#2d365d] text-xl font-semibold">Abela Hurtado</h4>
              <p className="text-gray-500 text-sm">Gerente de Operaciones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
