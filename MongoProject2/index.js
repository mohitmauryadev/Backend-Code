const express = require('express');
const {dbconection} = require('./dbcoll');
const { ObjectId } = require('mongodb');

const app = express();

app.use(express.json());

app.get('/read', (req, res) => {
    res.send("in read");
})

app.post('/insert',async (req, res) => {
let mydb = await dbconection();
let stds = mydb.collection("list");

let obj = {
    name: req.body.name,
    email:req.body.email
}

let reqobj = await stds.insertOne(obj);
let reqprint = {
    status : 1,
    mess : "Successful",
    reqobj
}
    res.send(reqprint);
})

app.delete('/delete/:id',async (req, res) => {

    let {id} = req.params;
    let mydb = await dbconection();
    let stds = mydb.collection("list");
    let del = await stds.deleteOne({_id:new ObjectId(id)});

    let robj = {
        status:1,
        mess : "Delete Successfully",
        del
    }
    res.send(robj);

 })

 app.put('/upd/:id',async (req, res) => {
     let {id} = req.params;
     let obj = {
    sname: req.body.name,
    email:req.body.email
}
let mydb = await dbconection();
let stds = mydb.collection("list");
  let up = await stds.updateOne({_id:new ObjectId(id)}, {$set: {email}});
  
    let reobj = {
        status:1,
        mess : "Update Successfully",
        up
    }
    res.send(reobj);

 })

app.listen('8000');