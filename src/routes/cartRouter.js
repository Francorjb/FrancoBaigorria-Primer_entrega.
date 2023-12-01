const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.delete('/:cid/products/:pid', cartController.deleteProductFromCart);
router.put('/:cid', cartController.updateCart);
router.put('/:cid/products/:pid', cartController.updateProductQuantity);
router.delete('/:cid', cartController.clearCart);
router.get('/:cid', cartController.getCartDetails);

module.exports = router;
