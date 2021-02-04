const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
        id: String,
        name: {
            type: String,
            required: type,
        },
        description: {
            type: String,
            required: type,
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
        price: Number,
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: type,
        },
        countInStock: {
            type: Number,
            required: true,
            min: 0,
            max: 500,
        },
        rating: Number,
        isFeatured: Boolean,
        dateCreated: Date,
        tags: [String],
        // reviews: [ReviewSchema],
    },
    {
        timestamps: true,
    }
)

const ProductModel = mongoose.model('product', ProductSchema)
module.exports = ProductModel
