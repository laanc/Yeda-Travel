// src/componentes/RoutesConfig.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nosotros from './Nosotros';
// Otras páginas según necesites

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nosotros" element={<Nosotros />} />
    {/* Agrega más rutas según sea necesario */}
  </Routes>
);

export default RoutesConfig;
