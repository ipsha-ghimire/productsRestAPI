const mongoose = require('mongoose');
const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.1
    },
    price: {
        type: Number,
        required: true
    }


})

module.exports= mongoose.model('Products',productSchema);