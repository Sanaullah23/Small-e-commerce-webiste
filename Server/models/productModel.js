const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
       
    },
    image:{
        type:String,
        required:true
    }

},{timestamps:true});


module.exports= mongoose.model("Products", productSchema);