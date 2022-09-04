const express = require('express');
const app = express();

app.get('/health',(req,res)=>{
    res.send("The server is healty...");
})


module.exports = app;