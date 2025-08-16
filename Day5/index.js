const express = require('express');
require('dotenv').config();

const {checktoken} = require('./checktoken')
const app = express();
app.use(express.json());


app.get('/', (req, res) =>{
    res.send("In Home Page")
})

app.get('/about', (req, res) =>{
    res.send({
        status:1,
        name:"Mohit Maurya",
        mes: "In About Page"
    })
})

app.post('/news',checktoken, (req, res) =>{
    res.send("Hello Mohit Maurya BBD University Lucknow.In news page ")
})


app.listen(process.env.port || 5000);