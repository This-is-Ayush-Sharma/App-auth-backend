const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./router');
const Db_Connect = require('./config/connectDB');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/',routes);

Db_Connect.connectToDB();  // make connection with the database.

app.listen(process.env.PORT,()=>{
    console.log("The server is up and running");
});
