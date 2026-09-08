<div align="center">

# ⚽ FemFútbol Dashboard

### 🇪🇸 Español | 🇬🇧 [English](#-english-version)

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2015+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 🇪🇸 Versión en Español

### 📋 Descripción del Proyecto

**FemFútbol Dashboard** es una aplicación web para explorar equipos, ligas y estadísticas del fútbol femenino mundial. Permite buscar y filtrar equipos, guardar tus favoritos y —en su versión completa— consultar datos en tiempo real desde la API de [football-data.org](https://www.football-data.org/).

Este proyecto fue construido como parte de un bootcamp personal de 2 días para aprender React desde cero, cubriendo fundamentos, componentes, manejo de estado y hooks.

---

### 🛠️ Tecnologías Usadas

| Tecnología | Versión | Para qué se usa |
|---|---|---|
| [React](https://react.dev/) | 19 | Librería principal de UI |
| [Vite](https://vitejs.dev/) | 6 | Bundler y servidor de desarrollo |
| [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) | ES2015+ | Lenguaje principal |
| [football-data.org API](https://www.football-data.org/) | v4 | Datos reales de fútbol femenino |

---

### 🚀 Cómo Instalar y Correr

**Requisitos previos:** tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y npm.

```bash
# 1. Clona el repositorio
git clone https://github.com/leysanchezb92/femfutbol.git

# 2. Entra a la carpeta del proyecto
cd femfutbol

# 3. Instala las dependencias
npm install

# 4. Crea el archivo de variables de entorno
cp .env.example .env
# Abre .env y agrega tu token de football-data.org

# 5. Corre el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador. ¡Listo! 🎉

> **¿No tienes token?** Regístrate gratis en [football-data.org](https://www.football-data.org/client/register). La app también funciona con los datos mock incluidos en `src/data/teams.json`.

---

### 📁 Estructura de Carpetas

```
femfutbol/
├── public/                  # Archivos estáticos
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.jsx       # Cabecera de la app
│   │   └── TeamCard.jsx     # Tarjeta de cada equipo
│   ├── data/
│   │   └── teams.json       # Mock data de equipos femeninos
│   ├── hooks/               # Custom hooks
│   │   └── useFemFootball.js # Hook para consumir la API
│   ├── pages/               # Vistas principales
│   ├── App.jsx              # Componente raíz
│   ├── App.css              # Estilos globales
│   └── main.jsx             # Punto de entrada
├── .env.example             # Ejemplo de variables de entorno
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

<div align="center">

Hecho con ❤️ y mucho ☕ por [leysanchezb92](https://github.com/leysanchezb92)

</div>

---
---

## 🇬🇧 English Version

### 📋 Project Description

**FemFútbol Dashboard** is a web app to explore teams, leagues and statistics from women's football worldwide. It allows you to search and filter teams, save your favourites and —in its full version— fetch live data from the [football-data.org](https://www.football-data.org/) API.

This project was built as part of a personal 2-day bootcamp to learn React from scratch, covering fundamentals, components, state management and hooks.

---

### 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | Main UI library |
| [Vite](https://vitejs.dev/) | 6 | Bundler & dev server |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | ES2015+ | Main language |
| [football-data.org API](https://www.football-data.org/) | v4 | Live women's football data |

---

### 🚀 Installation & Setup

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or higher) and npm installed.

```bash
# 1. Clone the repository
git clone https://github.com/leysanchezb92/femfutbol.git

# 2. Navigate to the project folder
cd femfutbol

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env
# Open .env and add your football-data.org token

# 5. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Done! 🎉

> **No token yet?** Register for free at [football-data.org](https://www.football-data.org/client/register). The app also works with the mock data included in `src/data/teams.json`.

---

### 📁 Folder Structure

```
femfutbol/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # App header
│   │   └── TeamCard.jsx     # Team card component
│   ├── data/
│   │   └── teams.json       # Women's teams mock data
│   ├── hooks/               # Custom hooks
│   │   └── useFemFootball.js # Hook to consume the API
│   ├── pages/               # Main views
│   ├── App.jsx              # Root component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── .env.example             # Environment variables example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

<div align="center">

Made with ❤️ and lots of ☕ by [leysanchezb92](https://github.com/leysanchezb92)

</div>