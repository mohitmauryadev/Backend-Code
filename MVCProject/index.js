const express = require('express');
const enRouter = require('./App/Routes/Web/enquiryroutes');
require('dotenv').config()
let mongoose = require('mongoose');
let app = express();
app.use(express.json());


app.use('/web/api',enRouter)



mongoose.connect(process.env.DBURL).then(() => {
  console.log("Conneced to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log("It is working on : " + process.env.PORT)
  });

})

