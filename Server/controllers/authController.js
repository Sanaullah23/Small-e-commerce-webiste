const UsersModel= require('../models/userModel');
const {hashPassword, comparePassword}= require('../helpers/authHelper')
const JWT = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
exports.registercontroller = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const finduser= await UsersModel.findOne({email});
    if (!finduser) {
        const hashedPassword=  await hashPassword(password)
        const newUser= await UsersModel.create({
            name:name,
            email:email,
            password:hashedPassword,
            phone:phone,
            address:address
        })
        return res.status(201).json({
            message:"user created successfully",
            success:true,
            user:newUser
        })
    }else{
       return res.status(409).json({
            message:"email already exist",
            success:false,

        })
    }
  } catch (error) {
   return res.status(500).json({
      message: "registration error",
      success: false,
      error: error,
    });
  }
};

//login controller

exports.logincontroller=async(req, res)=>{
  try {
     const {email, password}= req.body;
     if (email=="" || password=="") {
      return res.status(400).json({
        message:"all fields are required",
        success:false
      })
     }else{
      const finduser = await UsersModel.findOne({email});
    
        if (!finduser) {
          return res.status(404).json({
            message:"Invalid Credintials",
            success:false
          })
        }
        const comparePass = await comparePassword(password, finduser.password);

        if (!comparePass) {
          return res.status(401).json({
            message:"invalid password",
            success:false
          })
        }
        const TOKEN = await JWT.sign({userid:finduser._id}, process.env.JWT_SECRET, {expiresIn:"7d"});
         
         res.status(200).json({
          message:"login successfully",
          success:true,
          user:{
            name:finduser.name,
            email:finduser.email,
            phone:finduser.phone,
            address:finduser.address,
            role:finduser.role
          },
           TOKEN
        })
     }
  } catch (error) {
    return res.status(500).json({
      message:"login error",
      success:false,
      error:error
    })
  }
}


exports.getUsers= async(req, res)=>{
  try {
    const users = await UsersModel.find({role: {$ne:"admin"}});
    if (users) {
      return res.status(200).json({
        message:"All Users",
        success:true,
        users:users
      })
    }else{
      return res.status(404).json({
        message:"Not Found",
        success:false
      })
    }
  } catch (error) {
    return res.status(500).json({
      message:"internal server error in get users",
      success:false,
      e:error.message

    })
  }
}