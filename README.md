# Proyecto Final - PlatoClick

## Descripción
Este proyecto es un sistema de gestión de restaurantes que consume una API externa para mostrar información detallada sobre platos, pedidos y clientes.

## Requisitos Cumplidos
- **Consumo de Datos**: Se realizan peticiones asíncronas (`fetch` con `async/await`) al backend en `http://localhost:4000`.
- **Funcionalidad**: Lista de restaurantes, detalles de cada uno (platos, pedidos y clientes relacionados).
- **React & Hooks**: Uso de componentes funcionales, `useState` para el estado y `useEffect` para la carga de datos.
- **React Router**: Navegación dinámica entre la lista y los detalles sin recargar la página.
- **Interfaz UI**: Diseño responsive con **Bootstrap** y **React-Bootstrap**. Estética premium con fuentes modernas, gradientes y animaciones.
- **Despliegue**: Preparado para Vite. Se puede ejecutar localmente con `npm run dev`.
- **Control de Versiones**: Realización de múltiples commits descriptivos.

## Estructura
- `/restaurante-backend`: Node.js Express API con MySQL (Dockerizado).
- `/restaurante-frontend`: React application con Vite y Bootstrap.

## Ejecución Local
1. **Backend**:
  docker-compose up -d

2. **Frontend**:
   npm run dev


Proyecto realizado por: Geraldine Ramírez Hernández


