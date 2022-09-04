const express = require('express');
const app = express();


// controllers
const registerUser = require('./controller/register.controller');
const loginUser = require('./controller/login.controller');

app.get('/health',(req,res)=>{
    res.send("The server is healty...");
})

app.post('/login',loginUser.login);
app.post('/register',registerUser.register);

module.exports = app;