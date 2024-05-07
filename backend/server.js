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


const PORT = process.env.PORT; // You can change 3000 to any available port number




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



server.listen(PORT, () => {
  dbConnection();
  console.log(`Server running at ${PORT}`)
})
