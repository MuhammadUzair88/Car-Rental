import BookingModel from "../models/BookingModel.js";

export const BookingCar = async (req, res) => {
  try {
    const {
      userId,
      ownerId,
      car,
      pickupDate,
      returnDate,
      price
    } = req.body;

    if (!userId || !ownerId || !car || !pickupDate || !returnDate || !price) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const booking = new BookingModel({
      userId,
      ownerId,
      car,
      pickupDate,
      returnDate,
      price,
      status: "pending", // default, optional
    });

    await booking.save();

    res.status(201).json({ success: true, message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// get Users Booking

export const getUserBooking=async(req,res)=>{

 try{
       const {userId}=req.body

    const UserBookings=await BookingModel.find({ userId });

    res.status(201).json({ success: true,UserBookings});
 }
 catch(error){
    res.status(500).json({ success: false, message: error.message });
 }

}

export const getAdminBooking=async(req,res)=>{

 try{
       const {ownerId}=req.body

    const OwnerBookings=await BookingModel.find({ ownerId });

    res.status(201).json({ success: true,OwnerBookings});
 }
 catch(error){
    res.status(500).json({ success: false, message: error.message });
 }

}



export const changeStatus = async (req, res) => {
  try {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({ success: false, message: "ID and status are required" });
    }

    const updatedStatus = await BookingModel.findByIdAndUpdate(
      id,
      { status },
      { new: true } // return updated doc
    );

    if (!updatedStatus) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({ success: true, updatedStatus });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

