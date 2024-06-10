const JWT = require('jsonwebtoken');
const UsersModel = require ('../models/userModel')

// verify token 
exports.requireSignIn = async(req, res, next )=>{
    try {
        const decode = await JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({
                message:"token not found",
                success:false
            })
        }
        req.user=decode;
        next();
        
    } catch (error) {
        return res.status(500).json({
            message:"internal error middleware",
            success:false,
            error
        })
    }
}

// admin middle ware

exports.isAdmin = async(req, res, next)=>{
    try {
         
        const finduser = await UsersModel.findById(req.user.userid);
        if (finduser.role !== "admin") {
            return res.status(401).json({
                message:"unauthorized",
                success:false
            })
        }else{
            next()
        }
        
    } catch (error) {
        return res.status(500).json({
            message:"internal server middle admin error",
            success:false,
            error:error.message
        })
    }
}