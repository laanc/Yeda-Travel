import React, { useState } from "react";

function PedirCotizacion() {
  const [nombre, setNombre] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `¡Hola! Me gustaría saber más sobre un viaje. Aquí están mis detalles:\n\nNombre: ${nombre}\nDestino: ${destino}\nFecha de Viaje: ${fecha}\nCorreo Electrónico: ${correo}\nMensaje: ${mensaje}`;
    
    // Abre la ventana de WhatsApp con el mensaje predefinido
    window.open(`https://wa.me/51952052348?text=${encodeURIComponent(whatsappMessage)}`, "_blank");

    // Limpiar los campos del formulario
    setNombre("");
    setDestino("");
    setFecha("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <section className="bg-[#fefefe] py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-[#2d365d] text-3xl font-semibold mb-8">
          ¡Pide tu cotización ahora!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="w-full sm:w-1/2">
              <label htmlFor="nombre" className="block text-[#2d365d] text-lg font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="destino" className="block text-[#2d365d] text-lg font-medium mb-2">
                Destino
              </label>
              <input
                type="text"
                id="destino"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="w-full sm:w-1/2">
              <label htmlFor="fecha" className="block text-[#2d365d] text-lg font-medium mb-2">
                Fecha de Viaje
              </label>
              <input
                type="date"
                id="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="correo" className="block text-[#2d365d] text-lg font-medium mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="mensaje" className="block text-[#2d365d] text-lg font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#2cbfcf] text-white py-3 px-6 rounded-lg font-semibold w-full"
            >
              Enviar Cotización
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PedirCotizacion;
