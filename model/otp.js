const mongoose = require('mongoose');

const opt = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    }
})

module.export = mongoose.model('otpData',otp);