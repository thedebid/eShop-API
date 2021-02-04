const ProductController = require('./product.controller')
const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(ProductController.getProductList)
    .post(ProductController.createProduct)

module.exports = router
