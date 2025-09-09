const Flight=require('../models/flight');

const addFlight= async (req,res)=>{
    try{
        const d=await Flight.create(req.body);
        console.log(d);
        return res.status(201).json({success:true,data:d});
    }
    catch(err){
        return res.status(400).json({success:true,data:"Origin and destination are required fields."});
    }
};

// const updateStatus= async (req,res)=>{
//     try{
//         const d=await Flight.findByIdAndUpdate(req.params.id,{staus:});
//         console.log(d);
//         return res.status(201).json({success:true,data:d});
//     }
//     catch(err){
//         return res.status(400).json({success:true,data:"Origin and destination are required fields."});
//     }
// };




module.exports={addFlight};
