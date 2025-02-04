import React from "react";
import { motion } from "framer-motion";

// Importa los logos
import airline1 from "../assets/bannersPartners/airline1.svg";
import airline2 from "../assets/bannersPartners/airline2.svg";
import airline3 from "../assets/bannersPartners/airline3.svg";
import airline4 from "../assets/bannersPartners/airline4.svg";
import airline5 from "../assets/bannersPartners/airline5.svg";
import airline6 from "../assets/bannersPartners/airline6.svg";
import airline7 from "../assets/bannersPartners/airline7.svg";
import airline8 from "../assets/bannersPartners/airline8.svg";

// Lista de logos
const logos = [airline1, airline2, airline3, airline4, airline5, airline6, airline7, airline8];

function BannerPartners() {
  return (
    <section className="bg-[#fefefe] py-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-[#2d365d] text-2xl font-semibold mb-4">
          Trabajamos con las mejores aerolíneas y empresas
        </h2>

        {/* Carrusel infinito */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-10"
            animate={{ x: ["0%", "-100%"] }} // Movimiento continuo
            transition={{
              repeat: Infinity, // Infinito
              duration: 15, // Velocidad controlada
              ease: "linear", // Movimiento suave
            }}
            style={{ display: "flex", minWidth: "200%" }} // Expande para efecto sin fin
          >
            {/* Repetimos el contenido infinitamente */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-96 h-48 object-contain" // Logos más grandes
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BannerPartners;
