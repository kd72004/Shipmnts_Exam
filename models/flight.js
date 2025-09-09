const mongoose = require('mongoose');
const Shipment= require('../models/shipment');


const flightSchema = new mongoose.Schema({
  carrier:{
    type:String,
    required:true
  },
  from: {
    type:String,
    required:true
  },
  to:{
    type:String,
    required:true
  },
  flight_number:{
    type:String,
    required:true
  },
  departure:{
    type:String,
  },
  arrival:{
    type:String,
  },
  status:{
    type:String,
    default:'in-transit'
  },
  id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Shipment
  }
});

module.exports=mongoose.model('Flight',flightSchema);