const mongoose = require('mongoose');


const shipmentSchema = new mongoose.Schema({
  origin:{
    type:String,
    required:true
  },
  destination: {
    type:String,
    required:true
  },
  shipment_number:{
    type:String,
    unique:true,
    required:true
  },
  hops:[],
});

module.exports=mongoose.model('Shipment',shipmentSchema);