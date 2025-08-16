const express = require('express');
const {controller, enlist,  deletes, update, Demo} = require('../../Controlor/Web/Userenquirycont');

let enRouter = express.Router();

enRouter.post('/enquery', controller)
enRouter.get('/enquerylist',enlist )
enRouter.delete('/enquerydelete/:id', deletes)
enRouter.put('/enqueryupdate/:id',update)
enRouter.get('/demo',Demo)

module.exports = enRouter