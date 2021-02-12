const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
        id: String,
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        richDescription: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: '',
        },
        images: [
            {
                type: String,
            },
        ],
        brand: String,
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category',
            required: true,
        },
        countInStock: {
            type: Number,
            required: true,
            min: 0,
            max: 500,
        },
        rating: Number,
        isFeatured: Boolean,
        tags: [String],
        // reviews: [ReviewSchema],
    },
    {
        timestamps: true,
    }
)

const productModel = mongoose.model('product', ProductSchema)
module.exports = productModel
