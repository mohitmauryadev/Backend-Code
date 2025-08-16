const express = require('express');
let mongoose = require('mongoose');
const enquerymo = require('./Model/enquery.model');
const e = require('express');
require('dotenv').config()
let app = express();
app.use(express.json());

app.post('/enquery', (req, res) => {
  let { sname, semail, sphone, smessege } = req.body;

  let enquery = new enquerymo({
    name: sname,
    email: semail,
    phone: sphone,
    messege: smessege
  });

  enquery.save().then(() => {
    res.send({
      status: 1,
      mess: "saved Successfully"
    })
  }).catch((err) => {
    res.send({
      status: 0,
      mess: "something went wrong",
      error: err
    })
  })
})

app.get('/enquerylist', async (req, res) => {
  let enlist = await enquerymo.find();
  res.send(enlist)
})

app.delete('/enquerydelete/:id', async (req, res) => {
  let detid = req.params.id;
  let det = await enquerymo.deleteOne({ _id: detid }).then(() => {
    res.send({
      status: 1,
      mess: "Deleted Successfully",
    })
  })
})

app.put('/enqueryupdate/:id', async (req, res) => {
  let upid = req.params.id;
  let { sname, semail, sphone, smessege } = req.body;
  let upobj = {
    name: sname,
    email: semail,
    phone: sphone,
    messege: smessege
  }
  let updaits = await enquerymo.updateOne({_id:upid},upobj).then(() => {
    res.send({
      status: 1,
      mess: "Updated Successfully",
      
    })
  })
})



mongoose.connect(process.env.DBURL).then(() => {
  console.log("Conneced to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log("It is working on : " + process.env.PORT)
  });

})

