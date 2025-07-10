import express from 'express';
import upload from '../middlewares/Multer.js';
import { addCar, fetchAdminCars, fetchAllCars, updateStatus } from '../controllers/CarController.js';

const CarRouter=express.Router();

CarRouter.post("/addcar",upload.single("CarPic"),addCar);
CarRouter.post("/getadmin",fetchAdminCars);
CarRouter.get("/getall",fetchAllCars);
CarRouter.put("/status",updateStatus);


export default CarRouter;