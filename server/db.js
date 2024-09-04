const mongoose = require('mongoose');
require('dotenv').config({path: ".env"});

const connection = mongoose.connect(process.env.MONGO_URI);
 
 module.exports = {
     connection
 }