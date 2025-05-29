# 📦 Entrega Nº2 – Productos en Tiempo Real con WebSockets

Este proyecto implementa un servidor Express con Socket.io y Handlebars para gestionar una lista de productos en tiempo real.

---

## ✅ Funcionalidades

- Vista `/` muestra los productos existentes (modo clásico).
- Vista `/realtimeproducts` muestra los productos actualizados en tiempo real mediante WebSocket.
- Formularios para:
  - ➕ Agregar un producto.
  - ❌ Eliminar un producto por su ID.
- Al agregar o eliminar, **la lista se actualiza automáticamente** sin recargar la página.

---

## 🚀 Cómo levantar el proyecto

### 1. Instalá las dependencias
```bash
npm install
```

### 2. Ejecutá el servidor
```bash
npm start
```

### 3. Abrí en el navegador:
- [http://localhost:8080](http://localhost:8080) → Vista clásica
- [http://localhost:8080/realtimeproducts](http://localhost:8080/realtimeproducts) → Vista con WebSocket

---

## 📁 Estructura del proyecto

```
src/
├── app.js                  # Configuración principal del servidor
├── routes/
│   └── views.router.js     # Rutas para Handlebars
├── managers/
│   └── ProductManager.js   # Clase para manejar productos con persistencia
├── data/
│   └── products.json       # Archivo JSON donde se almacenan los productos
├── views/
│   ├── home.handlebars
│   └── realTimeProducts.handlebars
└── public/
    └── js/
        └── realtime.js     # Script cliente que maneja sockets
```

---

## ⚙️ Tecnologías usadas

- Node.js + Express
- Express Handlebars
- Socket.io
- JSON como persistencia simple

---

¡Listo para simular un entorno de productos en tiempo real! 🎯
