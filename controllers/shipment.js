const Shipment=require('../models/shipment');

const createShipment= async (req,res)=>{
    try{
        const d=await Shipment.create(req.body);
        console.log(d);
        return res.status(201).json({success:true,data:{message:"Shipment created successfully.",data}});
    }
    catch(err){
        return res.status(400).json({success:false,message:"Origin and destination are required fields."});
    }
};

const addhop= async (req,res)=>{
    try{
        const value=res.body
        // const filter = { name: 'Jean-Luc Picard' };
        const update = { hops: [req.body.previous_hop,req.body.next_hop,req.body.newhop] };
        // const data=await Shipment.findOneAndUpdate(req.params.shipment_number,{update});
        const data=await Shipment.updateOne({ _id: req.params.id }, { $push: { hops: req.body }});
        return res.status(201).json({success:true,data:{shipment_number:data.id,hops:[req.body.previous_hop,req.body.next_hop,req.body.newhop]}});
    }
    catch(err){
        return res.status(400).json({success:false,data:err});
    }
};




module.exports={createShipment,addhop};
