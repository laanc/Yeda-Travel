import React from 'react';
import Navbar from './NavBar';
import Hero from './Hero';
import BannerPartners from './BannerPartners';
import Ofertas from './OfertaPage';       // Sección interna de ofertas
import BannerTrust from './BannerTrust';
import Testimonios from './Testimonios';
import Cotizaciones from './Cotizaciones'; // Sección interna de cotizaciones
import Destinos from './Destinos';
import Nosotros from './Nosotros';

function Home() {
  return (
    <div id="home">
      {/* Navbar y Hero Section */}
      <Navbar />
      <Hero />
      <BannerPartners />

      {/* Sección de Ofertas (Interna) */}
      <section id="ofertas">
        <Ofertas />
      </section>

      <BannerTrust />

      {/* Sección de destinos (Interna) */}
      <section id="destinos">
        <Destinos />
      </section>

      {/* Sección de nosotros (Interna) */}
      <section id="nosotros">
        <Nosotros />
      </section>

      {/* Sección de Testimonios (Interna) */}
      <section id="testimonios">
        <Testimonios />
      </section>

      {/* Sección de Cotizaciones (Interna) */}
      <section id="cotizaciones">
        <Cotizaciones />
      </section>
    </div>
  );
}

export default Home;
