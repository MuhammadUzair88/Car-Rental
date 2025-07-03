
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRouter from './routes/UserRoute.js';
import connectCloudinary from './config/Cloudinary.js';
import CarRouter from './routes/CarRoute.js';

import BookRouter from './routes/BookingRoute.js';



const app=express();

app.use(express.json());
app.use(cors());
dotenv.config();

//Connect Cloudinary

connectCloudinary()

//Routes

app.use('/api/user',UserRouter)
app.use('/api/car',CarRouter)
app.use('/api/book',BookRouter)
app.listen(process.env.PORT,()=>{
    console.log(`Server is Started At ${process.env.PORT} `)
})

//database Connection

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Database Connected Successfully");
  })
  .catch((error) => {
    console.error("❌ Error In Database Connection:", error.message);
  });


app.get('/', (req, res) => {
  res.send('Welcome to the API backend!');
});



