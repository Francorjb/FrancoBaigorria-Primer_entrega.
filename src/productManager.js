const express = require('express');
const fs = require('fs');

const productsRouter = express.Router();
const productsFile = 'productos.json';

productsRouter.use((req, res, next) => {
  try {
    const data = fs.readFileSync(productsFile, 'utf-8');
    req.productsData = JSON.parse(data);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al cargar productos' });
  }
});


productsRouter.get('/', (req, res) => {
  const limit = req.query.limit;
  const products = limit ? req.productsData.slice(0, limit) : req.productsData;
  res.json({ products });
});

productsRouter.get('/:pid', (req, res) => {
  const product = req.productsData.find((p) => p.id === req.params.pid);
  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});


productsRouter.post('/', (req, res) => {
  const newProduct = req.body;

  res.json({ message: 'Producto agregado correctamente' });
});


productsRouter.put('/:pid', (req, res) => {
  const productId = req.params.pid;
  const updatedProduct = req.body;

  res.json({ message: 'Producto actualizado correctamente' });
});


productsRouter.delete('/:pid', (req, res) => {
  const productId = req.params.pid;

  res.json({ message: 'Producto eliminado correctamente' });
});

module.exports = productsRouter;
