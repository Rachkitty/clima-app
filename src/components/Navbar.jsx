// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand-logo">
          <span className="weather-brand-icon">🌤️</span>
          <div>
            <span className="brand-name">ClimaLive</span>
            <span className="brand-sub">Monitoreo Meteorológico en Tiempo Real</span>
          </div>
        </div>
      </div>
    </nav>
  );
}