import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, required:true,
    ref: "User",
  },
  ownerId:{
      type: mongoose.Schema.Types.ObjectId, required:true,
    ref: "User",
  },
   car:{type: mongoose.Schema.Types.ObjectId, required:true,
    ref: "Car",},

    pickupDate:{type:Date,required:true},
    returnDate:{type:Date,required:true},
    status:{type:String,enum:["pending","confirmed","cancelled"],default:"pending"},
    price:{type:Number,required:true}
}, {
  timestamps: true,
  minimize: false
});

const BookingModel = mongoose.model("Booking", BookingSchema);
export default BookingModel;

