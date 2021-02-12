const productController = require('./product.controller')
const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(productController.getProductList)
    .post(productController.createProduct)

router.route('/get/count').get(productController.getProductCount)

router.route('/get/featured/:count').get(productController.getFeaturedProducts)

router
    .route('/:id')
    .get(productController.getProductById)
    .delete(productController.deleteProduct)
    .put(productController.updateProduct)

module.exports = router
