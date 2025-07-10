import {v2 as cloudinary} from 'cloudinary';
import UserModel from "../models/UserModel.js";
import bcrypt from 'bcryptjs';

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const Exist = await UserModel.findOne({ email });

    if (Exist) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const NewUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await NewUser.save();

    res.status(200).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Remove password before sending back
    const { password: _, ...userWithoutPassword } = existingUser._doc;

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export const UpdateProfile = async (req, res) => {
  try {
    const { userId } = req.body;

    const FindUser = await UserModel.findById(userId);

    if (!FindUser) {
      return res.status(400).json({ success: false, message: "User doesn't exist" });
    }

    if (!req.file || !req.file.path) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const imageUpload = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    const UpdatedUser = await UserModel.findByIdAndUpdate(userId, {
      profilePic: imageUpload.secure_url,
    }, { new: true });

    res.json({ success: true, UpdatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



