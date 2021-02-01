const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
        id: String,
        name: String,
        description: String,
        richDescription: [String],
        image: String,
        images: [String],
        brand: String,
        price: Number,
        category: [Category],
        countInStock: Number,
        rating: Number,
        isFeatured: Boolean,
        dateCreated: Date,
        tags: [String],
        reviews: [ReviewSchema],
    },
    {
        timestamps: true,
    }
)

const ProductModel = mongoose.model('product', ProductSchema)
module.exports = ProductModel
