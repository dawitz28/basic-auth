'use strict';

// 3rd Party Resources
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');
const router = require('./route/router.js');
let PORT = process.env.PORT || 3000;


// Prepare the express app
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('homepage');
}) 

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
app.use(router); 
// Create a mongoose model
const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
const Users = mongoose.model('users', usersSchema);



module.exports = {
    app : app,
    start : function(PORT){
        app.listen(PORT,() => {
            console.log('listening on port ' + PORT );
        })
    }

}
