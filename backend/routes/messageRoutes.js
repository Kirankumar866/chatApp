import express from "express"
import isAuthorized from "../middlewares/isAuthorized.js"
import {getMessages, sendMessage} from "../controllers/messageController.js"

const router = express.Router();


router.get("/:id",isAuthorized, getMessages)
router.post("/send/:id", isAuthorized, sendMessage);



export default router