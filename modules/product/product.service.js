const productModel = require('./product.model')
const categoryModel = require('./../category/category.model')
const helper = require('./../../helpers/isValid')

async function save(data) {
    //Check category exist or not
    const category = await categoryModel.findById(data.category)
    if (!category) throw { status: 400, message: 'Invalid Category' }

    var newProduct = new productModel({})
    // map data in newProduct
    mapProductReq(newProduct, data)
    return newProduct.save()
}

function getAll() {
    return productModel.find()
}
async function findById(id) {
    if (!helper.isValidId(id)) throw 'Invalid product id: ' + `${id}`
    const product = await productModel.findById(id).populate('category')

    if (!product) throw 'Product with' + ` ${id} ` + 'not found'
    return product
}
async function remove(id) {
    const product = await findById(id)
    await product.remove(id)
}
async function update(id, data) {
    const product = await findById(id)

    //Check category exist or not
    const category = await categoryModel.findById(data.category)
    if (!category) throw { status: 400, message: 'Invalid Category' }

    //Copy params to product and save
    Object.assign(product, data)
    await product.save()
    return product
}
async function count() {
    const productCount = await productModel.countDocuments(count > count)
    if (!productCount) throw { status: 500, success: false }

    return productCount
}
async function featured(count) {
    const products = await productModel.find({ isFeatured: true }).limit(count)
    if (!products) throw { status: 500, message: 'Featured products not found' }

    return products
}

module.exports = {
    save,
    getAll,
    findById,
    remove,
    update,
    count,
    featured,
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
