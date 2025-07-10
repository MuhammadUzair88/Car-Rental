import express from 'express';
import { Login, Register,UpdateProfile } from '../controllers/UserController.js';
import upload from '../middlewares/Multer.js';

const UserRouter=express.Router();

UserRouter.post("/register",Register);
UserRouter.post("/login",Login);

UserRouter.post('/profile',upload.single("profilePic"),UpdateProfile)

export default UserRouter;