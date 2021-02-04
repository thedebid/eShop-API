const categoryController = require('./category.controller')
const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(categoryController.getCategoryList)
    .post(categoryController.createCategory)

module.exports = router
