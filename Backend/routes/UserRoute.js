import express from 'express';
import { Register,UpdateProfile } from '../controllers/UserController.js';
import upload from '../middlewares/Multer.js';

const UserRouter=express.Router();

UserRouter.post("/register",Register);
UserRouter.post('/profile',upload.single("profilePic"),UpdateProfile)

export default UserRouter;