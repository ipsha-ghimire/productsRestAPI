const mongoose= require('mongoose');

const productSchema= mongoose.Schema({
    name:{
        type:String,
        required:['true','name must be provided']
    },
    price:{
        type: Number,
        required:[true,'price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type: Number,
        default:4.1
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","lenovo","acer","mi"],
            message:`not supported`,
        },
    }, 
})

module.exports= mongoose.model('Product',productSchema);
 