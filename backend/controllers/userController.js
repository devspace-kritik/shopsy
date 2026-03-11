import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}
// Route for user login
const loginUser = async (req, res) => {
    res.json({msg: "Login API working"})
}

// Route for user register
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //Checking user already exists or not
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success: false, message: "User already exists"});
        }

        //Validating email format and strong password
        if(!validator.isEmail){
            return res.json({success: false, message: "Please enter a valid email"});
        }
        if(password.length < 8){
            return res.json({success: false, message: "Please enter a sttrong password"});
        }
        
        //Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });
        const user = await newUser.save();

        const token = createToken(user._id);

        response.json({success:true, token});


    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

// Route for admin login
const adminLogin = async (req, res) => {
    res.json({msg: "Admin Login API working"})
}

export {loginUser, registerUser, adminLogin}