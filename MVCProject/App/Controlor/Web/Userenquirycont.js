const enquerymo = require('../../Model/enquery.model');
const e = require('express');
let controller =(req, res) => {
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
}

let enlist = async (req, res) => {
  let enlist = await enquerymo.find();
  res.send(enlist)
}

let deletes =  async (req, res) => {
  let detid = req.params.id;
  let det = await enquerymo.deleteOne({ _id: detid }).then(() => {
    res.send({
      status: 1,
      mess: "Deleted Successfully",
    })
  })
}

let update =  async (req, res) => {
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
}

let Demo = async (req, res) => {
  res.send("Hello Mohit Maurya")
}

module.exports= {controller, enlist,  deletes, update, Demo}