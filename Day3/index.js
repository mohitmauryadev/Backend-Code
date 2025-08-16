const express = require('express');
const app = express();

app.use(express.json());

app.get('/' ,(req, res) =>{
    res.send("In home page")
})

app.get('/about' ,(req, res) =>{
    res.send({name:"Mohit Maurya",
        age:19,
        arr:[1,3,,8,9]
    })
})

app.get('/contact' ,(req, res) =>{
    res.send("In contact page")
})

app.post('/form', (req, res) => {
    res.send({
        name:"mohit Maurya",
        data:req.body
    })
})


app.post('/data', (req, res) => {
    res.send({
        name:"mohit Maurya",
        data:req.query
    })
})

app.post('/news/:id', (req, res) => {
    res.send({
        name:"BBD University Lucknow",
        // data:req.query
        
    })
})

app.post('/newres', (req, res) =>{
    res.status(200).json({
        status:200,
        name:"Mohit Maurya"
    })
})


app.listen('8000');