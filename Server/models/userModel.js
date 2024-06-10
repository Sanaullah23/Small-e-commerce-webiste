const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    }


}, {timestamps:true})

module.exports= mongoose.model("Users", userSchema);