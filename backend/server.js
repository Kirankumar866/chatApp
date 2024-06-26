import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import usersRoutes from "./routes/usersRoutes.js"
//import conversationRoutes from "./routes/conversationRoutes.js"
import cookieParser from "cookie-parser";
import dbConnection from "./Database/dbConnection.js";
import { app, server } from "./socket/socket.js";

dotenv.config()


const port = process.env.PORT || 4000; // You can change 4000 to any available port number




app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)
app.use("/api/user", usersRoutes)
//app.use("/api/conversation", conversationRoutes)

dbConnection();

server.listen(PORT, () => {
  
  console.log(`Server running at ${PORT}`)
})
