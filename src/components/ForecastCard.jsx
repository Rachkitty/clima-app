// src/components/ForecastCard.jsx
import React from 'react';

export default function ForecastCard({ forecast }) {
  return (
    <div className="forecast-card">
      <h3>Pronóstico de los Próximos Días</h3>
      <div className="forecast-grid">
        {forecast.map((item, index) => (
          <div key={index} className="forecast-day-item">
            <span className="forecast-day">{item.day}</span>
            <span className="forecast-icon">{item.condition.split(' ')[0]}</span>
            <span className="forecast-condition">{item.condition.split(' ').slice(1).join(' ')}</span>
            <div className="forecast-temps">
              <span className="temp-max">{item.tempMax}°C</span>
              <span className="temp-min">{item.tempMin}°C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}