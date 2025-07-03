import {v2 as cloudinary} from 'cloudinary';
import CarModel from '../models/CarModel.js';

export const addCar=async(req,res)=>{
try{
    const {
      userId,
      brand,
      model,
      year,
      dailyPrice,
      category,
      transmission,
      fuelType,
      seatingCapacity,
      location,
      description,
    } = req.body;
    
       if (!req.file || !req.file.path) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

  const CarImage=await cloudinary.uploader.upload(req.file.path,{
    resource_type: "image",
  })

  const NewCar=new CarModel({
    userId:userId,
    brand:brand,
    model:model,
    year:year,
    dailyPrice:dailyPrice,
    category:category,
    transmission:transmission,
    fuelType:fuelType,
    seatingCapacity:seatingCapacity,
    location:location,
    description:description,
    CarPic:CarImage.secure_url,
   
  })

  await NewCar.save();

res.status(200).json({success:true,NewCar})
}

catch(error){
     res.status(500).json({ success: false, message: error.message });
}

}


//fetching the cars based on userid

export const fetchAdminCars=async(req,res)=>{

try{
        const {userId}=req.body;

    if(!userId){
         return res.status(400).json({ success: false, message: "Missing Id" });
    }

    const cars=await CarModel.find({ userId })

    res.status(200).json({success:true,cars})
}

catch(error){
    res.status(500).json({ success: false, message: error.message });
}}

export const fetchAllCars=async(req,res)=>{
    try{
        const cars=await CarModel.find({})
     res.status(200).json({success:true,cars})
}

catch(error){
    res.status(500).json({ success: false, message: error.message });
}

}


export const updateStatus=async(req,res)=>{

try{
    const {id}=req.body

    const findCar=await CarModel.findById(id)
    if(!findCar){
        return res.status(400).json({ success: false, message: "Missing Id" });
    }

    const newStatus=findCar.status==="available"?"Unavailable":"available"

    const UpdatedStatus=await CarModel.findByIdAndUpdate(id,{
        status:newStatus
    })
    res.status(200).json({success:true,UpdatedStatus})
}
catch(error){
    res.status(500).json({ success: false, message: error.message });
}


}