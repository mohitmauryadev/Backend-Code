// let token = "12345";
let checktoken = (req, res, next) => {
    if(req.query.token == "" || req.query.token == undefined){
        res.send({
            status: 0,
            mess: "Please fill the token first",
        })
    } else if(req.query.token != process.env.MYToken){
        res.send({
            status: 0,
            mess: "Please fill the correct token now",
        })
    }
    next();
}

module.exports = {checktoken}