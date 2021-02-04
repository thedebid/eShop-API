const ProductModel = require('../product/product.model')
const categoryService = require('./category.service')

function getCategoryList(req, res, next) {
    categoryService
        .getCategory()
        .then((result) => {
            if (!result.length) {
                next({
                    message: 'category not found',
                    status: '500',
                })
            }
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
}
function createCategory(req, res, next) {
    categoryService
        .saveCategory(req.body)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
}
function getCategoryById(req, res, next) {
    categoryService
        .categoryById(req.params.id)
        .then((result) => {
            if (result === null) {
                return next({
                    message: 'category not found',
                })
            }
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
}
function deleteCategoryById(req, res, next) {
    categoryService
        .deleteCategory(req.params.id)
        .then((result) => {
            if (result === null) {
                return next({
                    message: 'category not found',
                })
            }
            res.status(200).json({
                success: true,
                message: 'category is deleted!',
            })
        })
        .catch((err) => {
            next(err)
        })
}
module.exports = {
    getCategoryList,
    createCategory,
    getCategoryById,
    deleteCategoryById,
}
