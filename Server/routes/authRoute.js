const express = require('express');
const { registercontroller, logincontroller, getUsers } = require('../controllers/authController');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddle');

//router object 
const router = express.Router();

//routing

router.post('/register', registercontroller);
router.post('/login', logincontroller);
router.get('/auth-admin',requireSignIn, isAdmin, (req, res)=>{
    res.status(200).json({
        success:true,
        message:"admin"
    })
});
router.get('/get-users',requireSignIn, isAdmin, getUsers);

module.exports=router