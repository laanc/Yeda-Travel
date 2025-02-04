import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa las imágenes de los testimonios desde la carpeta de assets
import cliente1 from "../assets/testimonios/cliente1.svg";
import cliente2 from "../assets/testimonios/cliente2.svg";
import cliente3 from "../assets/testimonios/cliente3.svg";

// Configuración de slick slider
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Testimonios() {
  return (
    <section className="bg-[#fefefe] py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-[#2d365d] text-3xl font-semibold mb-8">
          Lo que dicen nuestros clientes
        </h2>
        <Slider {...settings}>
          {/* Testimonio 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src={cliente1}
                alt="Cliente 1"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-[#2d365d] text-xl font-semibold">Juan Pérez</h3>
                <p className="text-[#2d365d] text-sm">Viajero frecuente</p>
              </div>
            </div>
            <p className="text-gray-500 mb-4">
              "Fue una experiencia increíble. Todo estuvo perfectamente organizado, desde los vuelos hasta el alojamiento. 100% recomendado."
            </p>
            <div className="flex justify-center">
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src={cliente2}
                alt="Cliente 2"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-[#2d365d] text-xl font-semibold">Ana Gómez</h3>
                <p className="text-[#2d365d] text-sm">Viajera novata</p>
              </div>
            </div>
            <p className="text-gray-500 mb-4">
              "Una experiencia de viaje única. El equipo me ayudó en cada paso del proceso y me dio recomendaciones personalizadas que hicieron mi viaje mucho más especial."
            </p>
            <div className="flex justify-center">
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
            </div>
          </div>

          {/* Testimonio 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src={cliente3}
                alt="Cliente 3"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-[#2d365d] text-xl font-semibold">Carlos Díaz</h3>
                <p className="text-[#2d365d] text-sm">Viajero de negocios</p>
              </div>
            </div>
            <p className="text-gray-500 mb-4">
              "Cada detalle fue pensado para garantizar la comodidad y el éxito de mi viaje. ¡Volveré sin dudarlo!"
            </p>
            <div className="flex justify-center">
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
              <FaStar className="text-[#2cbfcf] text-xl" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonios;
