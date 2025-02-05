import React, { useState } from "react";
import oferta1 from "../assets/ofertas/bangkok.svg";
import oferta2 from "../assets/ofertas/barcelona.svg";
import oferta3 from "../assets/ofertas/berlin.svg";
import oferta4 from "../assets/ofertas/cartagena.svg";
import oferta5 from "../assets/ofertas/estambul.svg";
import oferta6 from "../assets/ofertas/florencia.svg";
import oferta7 from "../assets/ofertas/lisboa.svg";
import oferta8 from "../assets/ofertas/londres.svg";
import oferta9 from "../assets/ofertas/madrid.svg";
import oferta10 from "../assets/ofertas/mexico.svg";
import oferta11 from "../assets/ofertas/milan.svg";
import oferta12 from "../assets/ofertas/nuevayork.svg";
import oferta13 from "../assets/ofertas/paris.svg";
import oferta14 from "../assets/ofertas/puntacana.svg";
import oferta15 from "../assets/ofertas/rio.svg";
import oferta16 from "../assets/ofertas/roma.svg";

function Ofertas() {
  const [modalOferta, setModalOferta] = useState(null);
  const [filtro, setFiltro] = useState("");
  const numeroWhatsApp = "51952052348";

  const ofertas = [
    { imagen: oferta1, titulo: "Bangkok", precio: "$2290", incluye: "Vuelo + Hotel + Tours" },
    { imagen: oferta2, titulo: "Barcelona", precio: "$680", incluye: "Hotel + Desayuno" },
    { imagen: oferta3, titulo: "Berlín", precio: "$1200", incluye: "Vuelo + Hotel + City Tour" },
    { imagen: oferta4, titulo: "Cartagena de Indias", precio: "$599", incluye: "Hotel + Tours" },
    { imagen: oferta5, titulo: "Estambul", precio: "$1590", incluye: "Vuelo + Hotel + Paseos" },
    { imagen: oferta6, titulo: "Florencia", precio: "$1500", incluye: "Vuelo + Hotel + Excursiones" },
    { imagen: oferta7, titulo: "Lisboa", precio: "$780", incluye: "Hotel + Desayuno" },
    { imagen: oferta8, titulo: "Londres", precio: "$780", incluye: "Vuelo + Hotel" },
    { imagen: oferta9, titulo: "Madrid", precio: "$650", incluye: "Hotel + Desayuno" },
    { imagen: oferta10, titulo: "Ciudad de México", precio: "$450", incluye: "Hotel + Tours" },
    { imagen: oferta11, titulo: "Milán", precio: "$990", incluye: "Vuelo + Hotel + Desayuno" },
    { imagen: oferta12, titulo: "Nueva York", precio: "$720", incluye: "Hotel + City Tour" },
    { imagen: oferta13, titulo: "París", precio: "$699", incluye: "Vuelo + Hotel + Paseos" },
    { imagen: oferta14, titulo: "Punta Cana", precio: "$680", incluye: "Resort Todo Incluido" },
    { imagen: oferta15, titulo: "Río de Janeiro", precio: "$690", incluye: "Vuelo + Hotel + Tours" },
    { imagen: oferta16, titulo: "Roma", precio: "$699", incluye: "Vuelo + Hotel + Excursiones" }
  ];

  const ofertasFiltradas = ofertas.filter((oferta) =>
    oferta.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section className="py-16 bg-[#fefefe]">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-[#2d365d] text-3xl font-semibold mb-6">Nuestras Ofertas</h2>
        <input
          type="text"
          placeholder="Buscar destino..."
          className="mb-4 p-2 border rounded w-full sm:w-1/2"
          onChange={(e) => setFiltro(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ofertasFiltradas.map((oferta, index) => {
            const mensaje = encodeURIComponent(
              `📍 *Hola, me interesa la oferta de viaje a ${oferta.titulo}*. ¿Podrías darme más información? 😊`
            );
            const enlace = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
                <img
                  src={oferta.imagen}
                  alt={oferta.titulo}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setModalOferta(oferta)}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#2d365d]">{oferta.titulo}</h3>
                  <p className="mt-2 text-xl font-bold text-[#2cbfcf]">{oferta.precio}</p>
                  <p className="mt-1 text-sm text-gray-600">{oferta.incluye}</p>
                  <a
                    href={enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 text-white bg-[#2cbfcf] rounded-md shadow-md hover:bg-[#1c9ca0]"
                  >
                    Contactarse
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modalOferta && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold text-[#2d365d]">{modalOferta.titulo}</h3>
            <p className="mt-2 text-xl font-bold text-[#2cbfcf]">{modalOferta.precio}</p>
            <p className="mt-1 text-gray-600">{modalOferta.incluye}</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => setModalOferta(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Ofertas;
