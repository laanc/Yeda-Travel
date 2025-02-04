import React from "react";
import logo from "../assets/logotranspa.png"; // Asegúrate de tener el logo en esta ruta

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
            <p className="text-sm mb-2">Teléfono: +34 123 456 789</p>
            <p className="text-sm mb-2">Email: contacto@tuagencia.com</p>
            <p className="text-sm mb-2">Dirección: Calle Ficticia, 123, Madrid</p>
          </div>
        </div>

        {/* Desarrollador y año */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tu Agencia. Todos los derechos reservados.</p>
          <p>Desarrollado por <a href="https://tuportfolio.com" className="underline">Tu Nombre</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
