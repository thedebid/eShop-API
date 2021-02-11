const productService = require('./product.service')

function createProduct(req, res, next) {
    productService
        .save(req.body)
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err)
            next(err)
        })
}

async function getProductList(req, res, next) {
    productService
        .getAll()
        .then((result) => {
            if (!result.length) {
                return next({
                    message: 'Product not found',
                    status: '500',
                })
            }
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
}
function getProductById(req, res, next) {
    productService
        .getById(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}
module.exports = {
    createProduct,
    getProductList,
    getProductById,
}
