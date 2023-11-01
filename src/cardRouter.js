const express = require('express');
const fs = require('fs');

const cartRouter = express.Router();
const cartFile = 'carrito.json';

cartRouter.use((req, res, next) => {
  try {
    const data = fs.readFileSync(cartFile, 'utf-8');
    req.cartData = JSON.parse(data);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al cargar carritos' });
  }
});

cartRouter.post('/', (req, res) => {
  const newCart = req.body;

  res.json({ message: 'Carrito creado correctamente' });
});


cartRouter.get('/:cid', (req, res) => {
  const cartId = req.params.cid;
  const cart = req.cartData.find((c) => c.id === cartId);
  if (cart) {
    res.json({ cart });
  } else {
    res.status(404).json({ error: 'Carrito no encontrado' });
  }
});


cartRouter.post('/:cid/product/:pid', (req, res) => {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const quantity = req.body.quantity || 1;

  res.json({ message: 'Producto agregado al carrito correctamente' });
});

module.exports = cartRouter;
