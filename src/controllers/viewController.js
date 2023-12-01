const Product = require('../dao/models/productModel');
const Cart = require('../dao/models/cartModel');

const viewAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('products', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
};

const viewCart = async (req, res) => {
    try {
        const { cid } = req.params;
        const cart = await Cart.findById(cid).populate('products.productId');

        if (!cart) {
            return res.status(404).send('Carrito no encontrado');
        }

        res.render('cart', { cart });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = {
    viewAllProducts,
    viewCart
};
