import React, { useEffect } from 'react';
import { FaCheckCircle, FaStar, FaLock, FaHandshake, FaHeart, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BannerTrust() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[#fefefe] py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-[#2d365d] text-3xl font-semibold mb-6">
          ¿Por qué confiar en nosotros?
        </h2>
        
        {/* Información de cualidades */}
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up">
            <FaCheckCircle className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#2d365d] text-xl">Confianza</h3>
            <p className="text-gray-500 text-sm">Más de 10 años ofreciendo servicios confiables.</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up" data-aos-delay="200">
            <FaStar className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#2d365d] text-xl">Experiencia</h3>
            <p className="text-gray-500 text-sm">Asesores expertos en el sector de viajes.</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up" data-aos-delay="400">
            <FaLock className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#2d365d] text-xl">Seguridad</h3>
            <p className="text-gray-500 text-sm">Pagos protegidos con tecnología de última generación.</p>
          </div>
        </div>

        {/* Información de cualidades */}
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up">
            <FaHandshake className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#2d365d] text-xl">Profesionalismo</h3>
            <p className="text-gray-500 text-sm">Asesoría personalizada y de calidad.</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up" data-aos-delay="200">
            <FaHeart className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#2d365d] text-xl">Satisfacción</h3>
            <p className="text-gray-500 text-sm">Comprometidos con la felicidad de nuestros clientes.</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3" data-aos="fade-up" data-aos-delay="400">
            <FaPhoneAlt className="text-[#2cbfcf] text-4xl mb-4" />
            <h3 className="text-[#2d365d] text-xl">Atención 24/7</h3>
            <p className="text-gray-500 text-sm">Siempre disponibles para resolver tus dudas.</p>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default BannerTrust;
