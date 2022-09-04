const mongoose = require('mongoose');

const otp = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    }
});

module.export = mongoose.model('otpData',otp);