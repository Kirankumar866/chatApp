import express from "express"
import isAuthorized from "../middlewares/isAuthorized.js"
import {getUsersForSidebar,loggedInUser} from "../controllers/userController.js"

const router = express.Router();


router.get("/users",isAuthorized, getUsersForSidebar)
router.get("/getuser",isAuthorized, loggedInUser)

export default router;