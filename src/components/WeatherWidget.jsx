// src/components/WeatherWidget.jsx
import React from 'react';

export default function WeatherWidget({ title, value, unit, icon, description, colorTag = '#0ea5e9' }) {
  return (
    <div className="weather-widget-card">
      <div className="widget-header">
        <span className="widget-title">{title}</span>
        <span className="widget-icon" style={{ backgroundColor: `${colorTag}18`, color: colorTag }}>
          {icon}
        </span>
      </div>
      <div className="widget-content">
        <div className="widget-value-group">
          <span className="widget-value">{value}</span>
          {unit && <span className="widget-unit">{unit}</span>}
        </div>
        {description && <p className="widget-description">{description}</p>}
      </div>
    </div>
  );
}