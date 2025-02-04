import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Iconos del menú hamburguesa
import logo from "../assets/logotranspa.png"; // Asegúrate de que la ruta sea correcta

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className={`shadow-md transition-all duration-300 ease-in-out ${menuOpen ? "bg-[#2d365d]" : "bg-[#fefefe]"}`}>
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between md:justify-between">
        
        {/* Logo - Centrado en móviles */}
        <div className={`flex-1 flex justify-center md:justify-start`}>
          <img src={logo} alt="Logo de la agencia" className="h-14" />
        </div>

        {/* Botón de menú hamburguesa en móviles */}
        <button className="md:hidden text-[#2d365d] dark:text-[#fefefe]" onClick={toggleMenu}>
          {menuOpen ? <X size={28} className="text-[#fefefe]" /> : <Menu size={28} className="text-[#2d365d]" />}
        </button>

        {/* Menú en Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-[#2d365d]">
            <li><Link to="/" className="hover:text-[#2cbfcf]">Home</Link></li>
            <li><Link to="/nosotros" className="hover:text-[#2cbfcf]">Nosotros</Link></li>
            <li><Link to="/ofertas" className="hover:text-[#2cbfcf]">Ofertas</Link></li>
            <li><Link to="/destinos" className="hover:text-[#2cbfcf]">Destinos</Link></li>
            <li><Link to="/contacto" className="hover:text-[#2cbfcf]">Contacto</Link></li>
          </ul>
        </nav>
      </div>

      {/* Menú en móviles - Aparece cuando se abre */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "h-auto bg-[#2d365d] text-[#fefefe]" : "h-0"}`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li><Link to="/" onClick={toggleMenu} className="hover:text-[#2cbfcf]">Home</Link></li>
          <li><Link to="/nosotros" onClick={toggleMenu} className="hover:text-[#2cbfcf]">Nosotros</Link></li>
          <li><Link to="/ofertas" onClick={toggleMenu} className="hover:text-[#2cbfcf]">Ofertas</Link></li>
          <li><Link to="/destinos" onClick={toggleMenu} className="hover:text-[#2cbfcf]">Destinos</Link></li>
          <li><Link to="/contacto" onClick={toggleMenu} className="hover:text-[#2cbfcf]">Contacto</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
