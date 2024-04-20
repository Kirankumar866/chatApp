import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import usersRoutes from "./routes/usersRoutes.js"
//import conversationRoutes from "./routes/conversationRoutes.js"
import cookieParser from "cookie-parser";
import dbConnection from "./Database/dbConnection.js";
dotenv.config()


const app = express();


app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)
app.use("/api/user", usersRoutes)
//app.use("/api/conversation", conversationRoutes)



app.listen(process.env.PORT, ()=>{
    dbConnection();
    console.log(`Server running at ${process.env.PORT}`)
})