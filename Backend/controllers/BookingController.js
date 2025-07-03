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

    const UserBookings=await BookingModel.find(userId);

    res.status(201).json({ success: true,UserBookings});
 }
 catch(error){
    res.status(500).json({ success: false, message: error.message });
 }

}
