import React from "react";
import logo from "../assets/logotranspa.png"; // Asegúrate de tener el logo en esta ruta

// Importar los iconos de Font Awesome
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa"; // Asegúrate de instalar react-icons

function Footer() {
  return (
    <footer className="bg-[#2d365d] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Contenedor del footer con logo y enlaces */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo de la agencia */}
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="Logo Agencia" className="w-68 h-auto" />
          </div>

          {/* Información de contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <p className="text-sm mb-2">Teléfono: +51952052348</p>
            <p className="text-sm mb-2">Email: contacto@tuagencia.com</p>
            <p className="text-sm mb-2">Dirección: Centro Aéreo Comercial Oficina 103 Modulo B Callao Perú</p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="hover:text-[#2cbfcf] transition-all" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-[#2cbfcf] transition-all" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={24} className="hover:text-[#2cbfcf] transition-all" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} className="hover:text-[#2cbfcf] transition-all" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-[#2cbfcf] transition-all" />
          </a>
        </div>

        {/* Desarrollador y año */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Yeda Travel. Todos los derechos reservados.</p>
          <p>Desarrollado por <a href="#home" className="underline">FDX Web Developer</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
