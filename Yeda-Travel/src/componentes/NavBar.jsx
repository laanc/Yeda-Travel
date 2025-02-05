import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Iconos del menú hamburguesa
import logo from "../assets/logotranspa.png"; // Asegúrate de que la ruta sea correcta

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-gray-300/50 
      ${isScrolled || menuOpen ? "bg-[#fefefe]/80 text-[#2d365d] shadow-md backdrop-blur-md" : "bg-transparent text-white"}`}
    >
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <a href="/" onClick={closeMenu}>
            <img src={logo} alt="Logo de la agencia" className="h-18 cursor-pointer" />
          </a>
        </div>

        {/* Botón de menú hamburguesa en móviles */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className={isScrolled ? "text-[#2d365d]" : "text-white"} />}
        </button>

        {/* Menú en Desktop */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-[#2cbfcf]">Home</a></li>
            <li><Link to="/nosotros" className="hover:text-[#2cbfcf]">Nosotros</Link></li>
            <li><a href="#ofertas" className="hover:text-[#2cbfcf]">Ofertas</a></li>
            <li><a href="#destinos" className="hover:text-[#2cbfcf]">Destinos</a></li>
          </ul>
          {/* Botón Cotizar */}
          <a href="#cotizaciones" className="ml-6 bg-[#2cbfcf] text-white px-4 py-2 rounded-lg hover:bg-[#2399a3] transition">
            Cotizar
          </a>
        </nav>
      </div>

      {/* Menú en móviles */}
      <div className={`md:hidden transition-all duration-300 ease-in-out 
      ${menuOpen ? "h-auto bg-[#2d365d]/90 text-white" : "h-0 overflow-hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li><a href="#home" onClick={closeMenu} className="hover:text-[#2cbfcf]">Home</a></li>
          <li><Link to="/nosotros" onClick={closeMenu} className="hover:text-[#2cbfcf]">Nosotros</Link></li>
          <li><a href="#ofertas" onClick={closeMenu} className="hover:text-[#2cbfcf]">Ofertas</a></li>
          <li><a href="#destinos" onClick={closeMenu} className="hover:text-[#2cbfcf]">Destinos</a></li>
          {/* Botón Cotizar en Móviles */}
          <li>
            <a href="#cotizaciones" onClick={closeMenu} className="bg-[#2cbfcf] text-white px-4 py-2 rounded-lg hover:bg-[#2399a3] transition">
              Cotizar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
