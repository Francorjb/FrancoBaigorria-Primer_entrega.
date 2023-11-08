const express = require('express');
const http = require('http');
const path = require('path');
const exphbs  = require('express-handlebars');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts');
});

io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.on('nuevoProducto', (producto) => {
        io.emit('actualizarProductos', producto);
    });

    socket.on('eliminarProducto', (productoId) => {
        io.emit('actualizarProductos', productoId);
    });
});


server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
