import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import viewsRouter from './routes/views.router.js';
import { ProductManager } from './managers/ProductManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use('/', viewsRouter);

// Websockets
const productManager = new ProductManager(path.join(__dirname, 'data', 'products.json'));

io.on('connection', async socket => {
  console.log('🔌 Cliente conectado');
  socket.emit('productList', await productManager.getProducts());

  socket.on('addProduct', async product => {
    await productManager.addProduct(product);
    io.emit('productList', await productManager.getProducts());
  });

  socket.on('deleteProduct', async id => {
    await productManager.deleteProduct(id);
    io.emit('productList', await productManager.getProducts());
  });
});

httpServer.listen(8080, () => console.log('Servidor en http://localhost:8080'));
