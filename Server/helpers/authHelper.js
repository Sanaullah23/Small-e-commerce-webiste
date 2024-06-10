const bcrypt = require('bcrypt');

exports.hashPassword= async(password)=>{
    try {
        const hashed = await bcrypt.hash(password, 12);
        return hashed
    } catch (error) {
        console.log(error.message)
    }
}

exports.comparePassword = async(password, hashedPassword)=>{
    try {
        const checkPassword = await bcrypt.compare(password, hashedPassword);
        if (!checkPassword) {
            console.log("incorrect password")
        }
        return checkPassword
    } catch (error) {
        console.log(error)
    }
}