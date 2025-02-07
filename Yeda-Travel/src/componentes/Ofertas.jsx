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
import oferta17 from "../assets/ofertas/dubai.svg";
import oferta18 from "../assets/ofertas/tokio.svg";
import oferta19 from "../assets/ofertas/disneyland.svg";
import oferta20 from "../assets/ofertas/seul.svg";
import oferta21 from "../assets/ofertas/hongkong.svg";
import oferta22 from "../assets/ofertas/singapur.svg";
import oferta23 from "../assets/ofertas/dakar.svg";
import oferta24 from "../assets/ofertas/saopaulo.svg";
import oferta25 from "../assets/ofertas/buenosaires.svg";
import oferta26 from "../assets/ofertas/santiagodechile.svg";
import oferta27 from "../assets/ofertas/lapaz.svg";
import oferta28 from "../assets/ofertas/bogota.svg";
import oferta29 from "../assets/ofertas/cuzco.svg";
import oferta30 from "../assets/ofertas/tarapoto.svg";
import oferta31 from "../assets/ofertas/juliaca.svg";
import oferta32 from "../assets/ofertas/iquitos.svg";
import oferta33 from "../assets/ofertas/tacna.svg";
import oferta34 from "../assets/ofertas/huaraz.svg";
import oferta35 from "../assets/ofertas/arequipa.svg";
import oferta36 from "../assets/ofertas/cajamarca.svg";

function Ofertas() {
  const [modalOferta, setModalOferta] = useState(null);
  const [filtro, setFiltro] = useState("");
  const numeroWhatsApp = "51952052348";

  const ofertas = [
    { imagen: oferta1, titulo: "Bangkok", precio: "$2290", incluye: "Vuelo + Hotel" },
    { imagen: oferta2, titulo: "Barcelona", precio: "$680", incluye: "Vuelo + Hotel" },
    { imagen: oferta3, titulo: "Berlín", precio: "$1200", incluye: "Vuelo + Hotel" },
    { imagen: oferta4, titulo: "Cartagena de Indias", precio: "$599", incluye: "Vuelo + Hotel" },
    { imagen: oferta5, titulo: "Estambul", precio: "$2500", incluye: "Vuelo + Hotel" },
    { imagen: oferta6, titulo: "Florencia", precio: "$1500", incluye: "Vuelo + Hotel" },
    { imagen: oferta7, titulo: "Lisboa", precio: "$780", incluye: "Vuelo + Hotel" },
    { imagen: oferta8, titulo: "Londres", precio: "$780", incluye: "Vuelo + Hotel" },
    { imagen: oferta9, titulo: "Madrid", precio: "$650", incluye: "Vuelo + Hotel" },
    { imagen: oferta10, titulo: "Ciudad de México", precio: "$450", incluye: "Vuelo + Hotel" },
    { imagen: oferta11, titulo: "Milán", precio: "$990", incluye: "Vuelo + Hotel" },
    { imagen: oferta12, titulo: "Nueva York", precio: "$720", incluye: "Vuelo + Hotel" },
    { imagen: oferta13, titulo: "París", precio: "$699", incluye: "Vuelo + Hotel" },
    { imagen: oferta14, titulo: "Punta Cana", precio: "$680", incluye: "Vuelo + Hotel" },
    { imagen: oferta15, titulo: "Río de Janeiro", precio: "$750", incluye: "Vuelo + Hotel" },
    { imagen: oferta16, titulo: "Roma", precio: "$699", incluye: "Vuelo + Hotel" },
    { imagen: oferta17, titulo: "Dubai", precio: "$2990", incluye: "Vuelo + Hotel" },
    { imagen: oferta18, titulo: "Tokio", precio: "$6350", incluye: "Vuelo + Hotel" },
    { imagen: oferta19, titulo: "Disneyland (Santa Ana)", precio: "$1350", incluye: "Vuelo + Hotel" },
    { imagen: oferta20, titulo: "Seúl", precio: "$3990", incluye: "Vuelo + Hotel" },
    { imagen: oferta21, titulo: "Hong Kong", precio: "$3200", incluye: "Vuelo + Hotel" },
    { imagen: oferta22, titulo: "Singapur", precio: "$3100", incluye: "Vuelo + Hotel" },
    { imagen: oferta23, titulo: "Dakar", precio: "$2890", incluye: "Vuelo + Hotel" },
    { imagen: oferta24, titulo: "Sao Paulo", precio: "$590", incluye: "Vuelo + Hotel" },
    { imagen: oferta25, titulo: "Buenos Aires", precio: "$570", incluye: "Vuelo + Hotel" },
    { imagen: oferta26, titulo: "Santiago de Chile", precio: "$250", incluye: "Vuelo + Hotel" },
    { imagen: oferta27, titulo: "La Paz", precio: "$360", incluye: "Vuelo + Hotel" },
    { imagen: oferta28, titulo: "Bogota", precio: "$370", incluye: "Vuelo + Hotel" },
    { imagen: oferta29, titulo: "Cuzco", precio: "$77", incluye: "Ida y Vuelta" },
    { imagen: oferta30, titulo: "Tarapoto", precio: "$90", incluye: "Ida y Vuelta" },
    { imagen: oferta31, titulo: "Juliaca", precio: "$90", incluye: "Ida y Vuelta" },
    { imagen: oferta32, titulo: "Iquitos", precio: "$100", incluye: "Ida y Vuelta" },
    { imagen: oferta33, titulo: "Tacna", precio: "$110", incluye: "Ida y Vuelta" },
    { imagen: oferta34, titulo: "Huaraz", precio: "$95", incluye: "Ida y Vuelta" },
    { imagen: oferta35, titulo: "Arequipa", precio: "$95", incluye: "Ida y Vuelta" },
    { imagen: oferta36, titulo: "Cajamarca", precio: "$100", incluye: "Ida y Vuelta" },
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
        
        {/* Mensaje si no hay resultados */}
        {ofertasFiltradas.length === 0 && (
          <p className="text-lg text-red-500">No se encontraron ofertas para tu búsqueda. Intenta con otro destino.</p>
        )}

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
