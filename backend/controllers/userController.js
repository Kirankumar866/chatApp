import User from "../models/userSchema.js"

export const getUsersForSidebar = async(req,res)=>{
    const loggedInUser = req.user._id;
    try {
        const filteredUsers = await User.find({_id : {$ne: loggedInUser}}).select("-password")
        res.status(200).json({
            success : true,
            message: "Retrived All Users",
            filteredUsers
        })
        
    } catch (error) {
        console.log("Error in getUsersForSidebar controller: ", error.message)
        res.status(500).json({error: "Internal server error"})

        
    }
}

export const loggedInUser = async (req,res)=>{
    const loggedInUser = req.user;
    
    try {
        res.status(200).json({
            success : true,
            message: `You are loggedIn as ${loggedInUser.userName}`,
            loggedInUser
        })
        
    } catch (error) {
        console.log("Error in getUsersForSidebar controller: ", error.message)
        res.status(500).json({error: "Internal server error"})

        
    }

}
