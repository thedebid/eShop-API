const productController = require('./product.controller')
const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(productController.getProductList)
    .post(productController.createProduct)

router
    .route('/:id')
    .get(productController.getProductById)
    .delete(productController.deleteProduct)

module.exports = router
