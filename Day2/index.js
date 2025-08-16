const { create } = require('domain');
let http = require('http');

let server = http.createServer((req,res) => {
    res.end("Mohit Maurya");
})

server.listen('3000')