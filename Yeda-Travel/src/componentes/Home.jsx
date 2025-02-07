import React from 'react';
import Navbar from './NavBar';
import Hero from './Hero';
import BannerPartners from './BannerPartners';
import Ofertas from './Ofertas';       // Sección interna de ofertas
import BannerTrust from './BannerTrust';
import Cotizaciones from './Cotizaciones'; // Sección interna de cotizaciones
import Destinos from './Destinos';
import Nosotros from './Nosotros';
import PaymentBanner from './BannerPayment';

function Home() {
  return (
    <div id="home">
      {/* Navbar y Hero Section */}
      <Navbar />
      <Hero />

      <BannerPartners />

      {/* Sección de destinos (Interna) */}
      <section id="destinos">
        <Destinos />
      </section>

      <PaymentBanner />

      {/* Sección de Ofertas (Interna) */}
      <section id="ofertas">
        <Ofertas />
      </section>

      <BannerTrust />

      {/* Sección de nosotros (Interna) */}
      <section id="nosotros">
        <Nosotros />
      </section>

      {/* Sección de Cotizaciones (Interna) */}
      <section id="cotizaciones">
        <Cotizaciones />
      </section>
    </div>
  );
}

export default Home;
