'use strict';

require('dotenv').config();
const mongoose = require ('mongoose'); 
const app = require('./src/server.js');
let PORT = process.env.PORT || 3000;
let mongodb = process.env.MONGO_URL;







mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {

  })
  .catch(e => console.error('Could not start server', e.message));
  mongoose.connection.once('open',() => {
      console.log('mongo is connected');
  })
  app.start(PORT, mongodb);