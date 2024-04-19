import bcrypt from "bcrypt";
import User from "../models/userSchema.js"
import { generatejwtToken } from "../utils/generatejwtToken.js";

export const register = async(req,res)=>{
    try {
        const {fullName,userName,password,confirmPassword,gender} = req.body;

        if(!fullName || !userName || !password || !gender){
            return res.status(400).json({message: "provide all required fields"})
        }
        if(password !== confirmPassword){
            return res.status(400).json({message: "passwords didn't match"})
        }

        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({message: "Username already exist"})
        }

        //Hash Password 
        const hashPassword = await bcrypt.hash(password,10);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePic : gender==='male' ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            await newUser.save();
        generatejwtToken(newUser,201,"User registered Succesfully!",res)

        }else{
            res.status(400).json({error: "Invalid user data"})
        }   
    } catch (error) {
        console.log("Error in Regisster controller", error.message)
        res.status(500).json({
            error : "Internal server error"
        })   
    }
    
}

export const login = async(req,res)=>{
    try {
        const {userName,password} = req.body;
        console.log(req.body)
        if(!userName || !password ){
            return res.status(400).json({message: "provide username and password"})
        }
        const user = await User.findOne({userName});
        if(!user){
            return res.status(400).json({message: "Username doesnt exist"})
        }
        // camparing haspassword with normal paswword
        const isMatch = await bcrypt.compare(password, user?.password || "");
        console.log(isMatch)
        if(!isMatch){
            return res.status(400).json({message: "Invalid password or username"})
        }
        generatejwtToken(user,200,"User login successfull!",res)


    } catch (error) {
        console.error("Error in login controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
        
    }

    
}

export const logout = (req,res)=>{
    res.status(201).cookie("token","",{
        httpOnly: true,
        expires: new Date(Date.now()),
        secure: true,
        sameSite: "None",
    }).json({
        success: true,
        message: "User logged out successfully!!"

    })
    
}


