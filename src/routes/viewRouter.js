const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/products', viewController.viewAllProducts);
router.get('/carts/:cid', viewController.viewCart);

module.exports = router;
