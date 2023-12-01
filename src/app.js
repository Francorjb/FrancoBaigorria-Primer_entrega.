const express = require('express');
const http = require('http');
const path = require('path');
const exphbs  = require('express-handlebars');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
const viewRouter = require('./routes/viewRouter');

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


mongoose.connect('./', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/views', viewRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');