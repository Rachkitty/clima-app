# Clima App

Aplicación web para la consulta de información meteorológica y condiciones del tiempo por ciudad. El sistema utiliza un archivo de datos estructurado en formato JSON local para simular la integración de datos y ofrecer respuestas instantáneas en la interfaz de usuario. Proyecto desarrollado con React y Vite dentro del marco de la materia Técnicas de FrontEnd.

---

## Características

- Búsqueda dinámica de datos meteorológicos por nombre de ciudad.
- Consumo e interpretación de datos locales en formato JSON.
- Visualización de indicadores clave: temperatura, humedad y estado del clima.
- Interfaz modular desarrollada bajo arquitectura de componentes con React.

---

## Tecnologías Utilizadas

- **React:** Librería de JavaScript para la construcción de interfaces de usuario.
- **Vite:** Herramienta de compilación y servidor de desarrollo optimizado.
- **JavaScript (ES6+):** Lógica del cliente y filtrado de datos.
- **JSON:** Estructura de datos local para el almacenamiento de información.
- **CSS3 / HTML5:** Maquetación y estilos visuales.

---

## Estructura del Proyecto

```text
clima-app/
├── public/          # Recursos estáticos
├── src/
│   ├── assets/      # Recursos gráficos
│   ├── data/        # Archivo JSON con la información del clima
│   ├── App.css      # Estilos específicos del componente principal
│   ├── App.jsx      # Lógica e interfaz principal de la aplicación
│   ├── index.css    # Estilos globales de la aplicación
│   └── main.jsx     # Punto de entrada de la aplicación React
├── index.html       # Estructura HTML base
├── package.json     # Definición de dependencias y scripts
└── vite.config.js   # Configuración de la herramienta Vite