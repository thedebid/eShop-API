const productService = require('./product.service')

function createProduct(req, res, next) {
    productService
        .save(req.body)
        .then((result) => {
            //console.log(result)
            res.status(200).json(result)
        })
        .catch((err) => {
            // console.log(err)
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
        .findById(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}

function deleteProduct(req, res, next) {
    productService
        .remove(req.params.id)
        .then(() =>
            res.status(200).json({
                message: 'Product deleted successfully',
            })
        )
        .catch((err) => next(err))
}

function updateProduct(req, res, next) {
    productService
        .update(req.params.id, req.body)
        .then((result) =>
            res
                .status(200)
                .json({ result, message: 'Product updated successfully' })
        )
        .catch((err) => next(err))
}

function getProductCount(req, res, next) {
    productService
        .count()
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}

function getFeaturedProducts(req, res, next) {
    const count = req.params.count ? req.params.count : 0
    productService
        .featured(+count)
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
}

module.exports = {
    createProduct,
    getProductList,
    getProductById,
    deleteProduct,
    updateProduct,
    getProductCount,
    getFeaturedProducts,
}
