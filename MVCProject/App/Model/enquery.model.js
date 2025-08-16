const express = require('express');
let mongoose = require('mongoose');

let enquerysch = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

      email:{
        type:String,
        required:true,
        unique:true
    },

      phone:{
        type:String,
        required:true,
        unique:true
    },

    messege:{
        type:String,
        required:true
    }

})

let enquerymo = mongoose.model("enquery",enquerysch)
module.exports= enquerymo