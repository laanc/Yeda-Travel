import React, { useEffect } from 'react';
import { FaCheckCircle, FaStar, FaLock, FaHandshake, FaHeart, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BannerTrust() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative bg-[#2d365d] py-16 overflow-hidden">
      {/* Elemento creativo: Oval de fondo */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[150%] h-80 bg-[#fefefe] rounded-full opacity-10"></div>

      <div className="relative max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-[#fefefe] text-3xl font-semibold mb-6">
          ¿Por qué confiar en nosotros?
        </h2>
        
        {/* Información de cualidades - Primera fila */}
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up">
            <FaCheckCircle className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#fefefe] text-xl">Confianza</h3>
            <p className="text-gray-200 text-sm">
              Más de 10 años ofreciendo servicios confiables.
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up" data-aos-delay="200">
            <FaStar className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#fefefe] text-xl">Experiencia</h3>
            <p className="text-gray-200 text-sm">
              Asesores expertos en el sector de viajes.
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up" data-aos-delay="400">
            <FaLock className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#fefefe] text-xl">Seguridad</h3>
            <p className="text-gray-200 text-sm">
              Pagos protegidos con tecnología de última generación.
            </p>
          </div>
        </div>

        {/* Información de cualidades - Segunda fila */}
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up">
            <FaHandshake className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#fefefe] text-xl">Profesionalismo</h3>
            <p className="text-gray-200 text-sm">
              Asesoría personalizada y de calidad.
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up" data-aos-delay="200">
            <FaHeart className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#fefefe] text-xl">Satisfacción</h3>
            <p className="text-gray-200 text-sm">
              Comprometidos con la felicidad de nuestros clientes.
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up" data-aos-delay="400">
            <FaPhoneAlt className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#fefefe] text-xl">Atención 24/7</h3>
            <p className="text-gray-200 text-sm">
              Siempre disponibles para resolver tus dudas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerTrust;
