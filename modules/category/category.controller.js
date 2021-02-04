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
module.exports = {
    getCategoryList,
    createCategory,
}
