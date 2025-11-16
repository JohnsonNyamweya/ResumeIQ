import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Resume from "../models/Resume.js";

const generateToken = (userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "7d"})
    return token
}

//Controller for user registration
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({message: "Missing required fields."})
        }

        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message: "User with email already exists."})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({name, email, password: hashedPassword})

        const token = generateToken(newUser._id)
        newUser.password = undefined

        return res.status(201).json({message: "User created successfully", token, user: newUser})
        
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

//Controller for user login
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({message: "Missing email or password."})
        }

        //Check if user exists
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({message: "User with the email does not exist."})
        }

        if(!(await user.comparePassword(password))) {
            return res.status(400).json({message: "Invalid password."})
        }
        const token = generateToken(user._id)
        user.password = undefined

        return res.status(200).json({message: "Logged in successfully", token, user})
        
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

//Controller for getting user by id
const getUserById = async (req, res) => {
    try {
        const userId = req.userId

        const user = await User.findById(userId)

        if(!user) {
            return res.status(404).json({message: "User not found."})
        }

        user.password = undefined

        return res.status(200).json({user})
        
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

//Controller for getting user resumes
const getUserResumes = async (req, res) => {
    try {
        const userId = req.userId

        const resumes = await Resume.find({userId})

        res.status(200).json({resumes})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export {registerUser, loginUser, getUserById, getUserResumes}