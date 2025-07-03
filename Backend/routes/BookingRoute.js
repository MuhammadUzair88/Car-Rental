import express from 'express';
import { BookingCar } from '../controllers/BookingController.js';
const BookRouter=express.Router();

BookRouter.post("/bookcar",BookingCar);
export default BookRouter;