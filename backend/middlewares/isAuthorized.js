import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const isAuthorized = async(req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(404).json({message : "Unauthorized No Token provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message : "Unauthorized Invalid Token"})
        }

        const user = await User.findById(decoded._id).select("-password");
        
        if(!user){
            return res.status(404).json({message : "User not found"})
        }
        req.user = user;
        

        next()
    } catch (error) {
        console.log('Error in isAuthorized middleware:',error)
        return res.status(500).json({message : "Internal server error"})
        
    }
}

export default isAuthorized