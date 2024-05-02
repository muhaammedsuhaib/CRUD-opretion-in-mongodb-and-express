const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    discription:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true  
    },
    category: {
        type: String,
        required: true
    }
    
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product