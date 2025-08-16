const express = require('express');
const { mongoConection } = require('./mongoConection')
const app = express();

app.use(express.json());

app.get('/read', async (req, res) => {
    let mydb = await mongoConection();

    let studentCollection = mydb.collection("student");
    let data = await studentCollection.find().toArray();
    let resobj = {
        status: 1,
        mes: "Students list",
        data
    }

    res.send(resobj)
})

app.post('/insert', async (req, res) => {
    let mydb = await mongoConection();

    let studentCollection = mydb.collection("student");

    let obj = {
        "sname": req.body.name,
        "semail": req.body.Email,
        "sage": req.body.age
    }

    let insertr = await studentCollection.insertOne(obj);
    let insobj = {
        status: 1,
        mes: "Succesful",
        insertr
    }

    res.send(insobj);
})

app.listen('8000')