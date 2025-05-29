# Curso de Programación Backend con Node.js y MongoDB 🚀

Este repositorio reúne todos los conocimientos, prácticas y proyectos desarrollados durante el curso de **Backend con Node.js** dictado en **Coderhouse**. A lo largo del curso, aprendimos a construir aplicaciones del lado del servidor con Node, Express y MongoDB, aplicando buenas prácticas de desarrollo y organización del código.

---

## 🧠 Contenidos Aprendidos

### 1. Introducción a Node.js y Express

- Qué es Node.js y cómo funciona su entorno de ejecución
- Uso de `npm`, creación de proyectos y estructura básica
- Manejo de rutas con `Express`
- Middlewares y estructura de carpetas modularizada

### 2. Servidores HTTP y motores de plantillas

- Servidores con Express
- Introducción y configuración de **Handlebars**
- Vistas dinámicas, layouts y parcializados

### 3. Websockets con Socket.io

- Comunicación en tiempo real
- Creación de chat o lista de productos en vivo
- Eventos cliente-servidor con Socket.io

### 4. Arquitectura de capas

- Organización de proyectos por capas:
  - `routes`, `controllers`, `services`, `models`
- Patrón MVC y separación de responsabilidades

### 5. MongoDB y Mongoose

- Introducción a MongoDB y Mongo Compass
- Uso de `mongoose` para modelado de datos
- Esquemas, validaciones, relaciones con `populate()`

### 6. CRUD completo

- Crear, leer, actualizar y eliminar recursos
- Rutas RESTful para productos y carritos
- Validaciones de datos y manejo de errores

### 7. Paginación, filtros y ordenamiento

- Query Params (`limit`, `page`, `sort`, `query`)
- Librería `mongoose-paginate-v2`
- Vistas paginadas en Handlebars

### 8. Agregaciones en MongoDB

- Operadores `$match`, `$group`, `$project`
- Estadísticas sobre datos

### 9. Proyecto Final

- CRUD de productos y carritos persistidos en MongoDB
- Vistas renderizadas con paginación y filtros
- Endpoints robustos con buenas prácticas
- Real-time products con Socket.io

---

## 📦 Tecnologías Usadas

- **Node.js** (v20+)
- **Express**
- **MongoDB** (local y Atlas)
- **Mongoose**
- **Handlebars**
- **Socket.io**
- **dotenv**
- **nodemon**
- **mongoose-paginate-v2**

---

## 🛠 Cómo ejecutar el proyecto final

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/proyecto-final-backend.git
cd proyecto-final-backend

# Instalar dependencias
npm install

# Configurar variables de entorno
touch .env
# Agregar tu cadena de conexión:
# MONGO_URI=mongodb://localhost:27017/ecommerce

# Levantar el servidor
npm run dev
```

Abrir en navegador: `http://localhost:8080/products`

---

## 📚 Extras

- Script de carga masiva para poblar la base con productos
- Vista realTimeProducts con WebSocket
- Populate en carritos para mostrar detalle completo

---

## ✨ Reflexión Final

Este curso fue un camino intenso y desafiante. Comenzamos desde lo básico de Node y terminamos desarrollando un sistema backend con persistencia, vistas dinámicas y comunicación en tiempo real. Cada clase aportó una pieza del rompecabezas que hoy, con orgullo, podés mirar armado.

---

## 🙌 Agradecimientos

Gracias **Alumnos y Juan Pablo(Tutor)** por su dedicación, curiosidad constante, y por haber sido parte de este proceso.  
Que este proyecto sea solo el comienzo de muchos más que estén por venir.  
¡Nos vemos en el siguiente desafío!

> _“No pares hasta estar orgulloso.”_

<div align="center">
  <img src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" alt="Adios" width="600">
</div>
