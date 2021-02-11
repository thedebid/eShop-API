const productModel = require('./product.model')
const helper = require('./../../helpers/isValid')
function save(data) {
    var newProduct = new productModel({})
    // map data in newProduct
    mapProductReq(newProduct, data)
    return newProduct.save()
}

function getAll() {
    return productModel.find()
}
function getById(id) {
    if (!helper.isValidId(id)) throw 'Product with' + ` ${id} ` + 'not found'
    const product = productModel.findById(id)
    if (!product) throw 'Product with' + ` ${id} ` + 'not found'
    return product
}
function remove(id) {}

module.exports = {
    save,
    getAll,
    getById,
}

//Helper function
function mapProductReq(product, productDetails) {
    if (productDetails.name) product.name = productDetails.name
    if (productDetails.description)
        product.description = productDetails.description
    if (productDetails.richDescription)
        product.richDescription = productDetails.richDescription
    if (productDetails.image) product.image = productDetails.image
    if (productDetails.images) product.images = productDetails.images.split(',')
    if (productDetails.brand) product.brand = productDetails.brand
    if (productDetails.price) product.price = productDetails.price
    if (productDetails.category) product.category = productDetails.category
    if (productDetails.countInStock)
        product.countInStock = productDetails.countInStock
    if (productDetails.rating) product.rating = productDetails.rating
    if (productDetails.tags) product.tags = productDetails.tags.split(',')
    if (productDetails.isFeatured)
        product.isFeatured = productDetails.isFeatured
}
