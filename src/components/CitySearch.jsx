// src/components/CitySearch.jsx
import React from 'react';

export default function CitySearch({ cities, selectedCityId, onSelectCity }) {
  return (
    <div className="search-widget-card">
      <div className="search-title">
        <h3>Selecciona una Ciudad</h3>
        <p>Consulta los datos en tiempo real y el pronóstico semanal</p>
      </div>
      <div className="search-form-grid">
        <div className="form-field">
          <label>Ubicación</label>
          <select 
            value={selectedCityId} 
            onChange={(e) => onSelectCity(e.target.value)}
            className="form-select"
          >
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                📍 {city.name}, {city.country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}