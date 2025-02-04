import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nosotros from './Nosotros';
import Ofertas from './Ofertas';
import Destinos from './Destinos';
import Contacto from './Contacto';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/ofertas" element={<Ofertas />} />
    <Route path="/destinos" element={<Destinos />} />
    <Route path="/contacto" element={<Contacto />} />
  </Routes>
);

export default RoutesConfig;
