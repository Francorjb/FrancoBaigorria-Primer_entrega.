// const express = require('express');
// const ProductManager = require('/productManager.js'); 

// const app = express();
// const port = 3000;

// const manager = new ProductManager('products.json');

// app.get('/products', async (req, res) => {
//   try {
//     const limit = req.query.limit;
//     const products = await manager.getProducts();

//     if (limit) {
//       const limitedProducts = products.slice(0, limit);
//       res.json({ products: limitedProducts });
//     } else {
//       res.json({ products });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener productos' });
//   }
// });

// app.get('/products/:pid', async (req, res) => {
//   try {
//     const pid = parseInt(req.params.pid);
//     const product = await manager.getProductById(pid);

//     if (product) {
//       res.json({ product });
//     } else {
//       res.status(404).json({ error: 'Producto no encontrado' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener el producto' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Servidor Express escuchando en el puerto ${port}`);
// });
