import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  CarPic:{type:String,required:true},
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  dailyPrice: { type: Number, required: true },
  category: { type: String, required: true },
  transmission: { type: String, required: true },
  fuelType: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "available" },
}, {
  timestamps: true,
  minimize: false
});

const CarModel = mongoose.model("Car", CarSchema);
export default CarModel;
