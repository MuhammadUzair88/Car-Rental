import express from 'express';
import { BookingCar, changeStatus, getAdminBooking, getUserBooking } from '../controllers/BookingController.js';
const BookRouter=express.Router();

BookRouter.post("/bookcar",BookingCar);
BookRouter.get("/getuser",getUserBooking);
BookRouter.get("/getowner",getAdminBooking);
BookRouter.put("/status",changeStatus);
export default BookRouter;