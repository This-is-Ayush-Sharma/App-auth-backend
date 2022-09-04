const mongoose = require('mongoose');

exports.connectToDB = ()=>{
    mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`,()=>{
        console.log("Successfully connected to the database.");
    })
};