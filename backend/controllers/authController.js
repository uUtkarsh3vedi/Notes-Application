const bcrypt = require("bcrypt")
const User = require("../models/userModel");
const { generateToken } = require("../utils/token");


const registerUser = async(req, res) => {
    try {
        const {name, email , password} = req.body;
        if(!email) return res.status(400).json({message: "Email is required "})
            const existingUser = await User.findOne({email});
        if (existingUser)  return res.status(409).json({message: "User Already exists"});
        const hashedPassword = await bcrypt.hash(password,10)
        const user =  new User({name, email, password:hashedPassword});
        await user.save();

        res.status(201).json({
            id:user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),



    })
        
    } catch (error) {
        res.status(500).json({message:"Server Error " , error: error.message})
        
    }

}

module.exports = { registerUser}
