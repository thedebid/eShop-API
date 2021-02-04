const productService = require('./product.service')

function createProduct(req, res, next) {
    productService
        .createProduct()
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
    const productList = await productService.getProduct()
    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList)
}

module.exports = {
    createProduct,
    getProductList,
}
