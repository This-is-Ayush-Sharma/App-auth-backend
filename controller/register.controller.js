const User = require('../model/user');
const crypt = require('../utils/crypt');
const otpgen = require('../utils/otpgen');
const sendOtp = require('../utils/sendOtp');
const Otp = require('../model/otp');
exports.register = async(req,res)=>{
    const { username, email, password } = req.body;
    try{
        await User.create({
            username,
            email,
            password:await crypt.Encrypt(password),
            status:"INACTIVE"
        });
        
        res.json({
            status:"success",
            message:"Registration Done."
        });
    }
    catch(err)
    {
        console.log(err);
        res.json({
            status:"failed",
            message:"Email already exist."
        })
    }
}