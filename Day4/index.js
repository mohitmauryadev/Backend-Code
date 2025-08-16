const express = require('express');
const app = express();
app.use(express.json());

let token = "12345";
let pass = "54321";

let checkToken = (req, res, next) => {
    if(req.query.token == "" || req.query.token == undefined){
        res.send({
            status: 0,
            mess: "Please fill the token first",
        })
    } else if(req.query.token != token){
        res.send({
            status: 0,
            mess: "Please fill the correct token now",
        })
    }
    next();
}

app.use(checkToken);

app.use((req, res, next) => {
    if(req.query.pass == pass){
        next();
    }else {
        res.send("Something went wrong please check password first");
    }
})

app.get('/', (req, res) =>{
    res.send("Hello Mohit")
})

app.get('/about', (req, res) =>{
    res.send({
        status:1,
        name:"Mohit Maurya",
        // data:req.body,
        // data:req.query,
    })
})

app.post('/news', (req, res) =>{
    res.send("Hello Mohit Maurya BBD University Lucknow")
})

app.get('/contact', (req, res) =>{
    res.send("Hello Mohit Maurya")
})

app.listen('8000');