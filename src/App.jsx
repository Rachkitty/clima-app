// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CitySearch from './components/CitySearch';
import WeatherWidget from './components/WeatherWidget';
import ForecastCard from './components/ForecastCard';
import weatherData from './data/weatherData.json';
import './App.css';

export default function App() {
  const [selectedCityId, setSelectedCityId] = useState('MTY');

  // Obtener la ciudad actual seleccionada
  const currentCity = weatherData.cities.find(c => c.id === selectedCityId) || weatherData.cities[0];

  return (
    <div className="app-wrapper">
      <Navbar />

      <header className="hero-section">
        <div className="hero-content">
          <h1>Clima en {currentCity.name}, {currentCity.country}</h1>
          <p className="hero-condition">
            {currentCity.icon} {currentCity.condition} • {currentCity.temperature}°C
          </p>
        </div>
      </header>

      <main className="main-container">
        {/* Selector de Ciudad */}
        <CitySearch 
          cities={weatherData.cities}
          selectedCityId={selectedCityId}
          onSelectCity={setSelectedCityId}
        />

        {/* Sección de Widgets Reutilizables */}
        <section className="widgets-section">
          <h2>Métricas Meteorológicas Actuales</h2>
          <div className="widgets-grid">
            
            {/* Widget 1: Temperatura */}
            <WeatherWidget 
              title="Temperatura" 
              value={currentCity.temperature} 
              unit="°C" 
              icon="🌡️" 
              description={`Sensación térmica de ${currentCity.feelsLike}°C`}
              colorTag="#ef4444"
            />

            {/* Widget 2: Humedad */}
            <WeatherWidget 
              title="Humedad" 
              value={currentCity.humidity} 
              unit="%" 
              icon="💧" 
              description={currentCity.humidity > 70 ? 'Humedad alta' : 'Nivel de humedad confortable'}
              colorTag="#0284c7"
            />

            {/* Widget 3: Velocidad del Viento */}
            <WeatherWidget 
              title="Viento" 
              value={currentCity.windSpeed} 
              unit="km/h" 
              icon="💨" 
              description={`Dirección: ${currentCity.windDirection}`}
              colorTag="#6366f1"
            />

            {/* Widget 4: Presión Atmosférica */}
            <WeatherWidget 
              title="Presión" 
              value={currentCity.pressure} 
              unit="hPa" 
              icon="⏲️" 
              description="Presión a nivel del mar"
              colorTag="#8b5cf6"
            />

            {/* Widget 5: Índice UV */}
            <WeatherWidget 
              title="Índice UV" 
              value={currentCity.uvIndex} 
              unit="/ 11" 
              icon="☀️" 
              description={currentCity.uvIndex >= 8 ? 'Riesgo Alto: Usar bloqueador' : 'Riesgo Moderado'}
              colorTag="#f59e0b"
            />

            {/* Widget 7: Visibilidad */}
            <WeatherWidget 
              title="Visibilidad" 
              value={currentCity.visibility} 
              unit="km" 
              icon="👁️" 
              description="Condición óptima de visión"
              colorTag="#14b8a6"
            />

          </div>
        </section>

        {/* Componente del Pronóstico Semanal */}
        <ForecastCard forecast={currentCity.forecast} />
      </main>

      <footer className="app-footer">
        <p>© 2026 ClimaLive — Práctica de Laboratorio React + Vite con Componentes Reutilizables.</p>
      </footer>
    </div>
  );
}