// External Imports
const { Schema, model } = require('mongoose');

// Reviews Schema
const reviewsSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true, trim: true },
    },
    // eslint-disable-next-line comma-dangle
    { timestamps: true }
);

// Product Schema
const ProductSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        reviews: [reviewsSchema],
        image: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    // eslint-disable-next-line comma-dangle
    { timestamps: true }
);

module.exports = model('Product', ProductSchema);
