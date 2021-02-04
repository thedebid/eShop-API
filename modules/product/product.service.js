const ProductModel = require('./product.model')

function saveProduct(data) {
    var newProduct = new ProductModel({})
    // // map data in newProduct
    // mapProductReq(newProduct, data)
    return newProduct.save()
}

function getProduct() {
    return ProductModel.find()
}
module.exports = {
    saveProduct,
    getProduct,
}
