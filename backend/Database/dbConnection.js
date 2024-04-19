import mongoose from "mongoose"

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDb Connected");
        
    } catch (error) {
        console.log(`Error connecting to mongoDB : ${error}`)
    }
}

export default dbConnection