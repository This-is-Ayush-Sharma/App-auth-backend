const mongoose = require('mongoose');

const user = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("userData",user);