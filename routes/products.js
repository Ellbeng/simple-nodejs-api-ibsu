var express = require('express');
var router = express.Router();

var ProductService = require('../services/ProductService');
var ApiSecurity = require('../middlewares/apiSecurity');


router.get('/all', ApiSecurity.requireLogin, ProductService.getAllProducts);
router.get('/search', ProductService.search);
router.get('/:id', ProductService.getProduct);
router.post('/', ApiSecurity.requirePermits('product.add'), ProductService.addProduct);
router.put('/:id', ApiSecurity.requirePermits('product.update', 'product.add'), ProductService.updateProduct);

module.exports = router;