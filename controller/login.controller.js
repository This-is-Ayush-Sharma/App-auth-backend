const User = require('../model/user');
const crypt = require('../utils/crypt');
exports.login = async(req,res)=>{
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email:email});
        if(!user)
        {
            res.json({
                status:"Failed",
                message:"User Dosent exist."
            });
        }
        else
        {
            if(await crypt.Decrypt(password,user.password))
            {
                res.json({
                    status:"success",
                    message:"login successfull."
                });
            }
            else
            {
                res.json({
                    status:"failed",
                    message:"Wrong password."
                });
            }
        }
    }
    catch(err)
    {
        console.log(err);
        res.json({
            status:"failed",
            message:"Some error occured"
        })
    }
}