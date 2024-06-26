import express from "express";
import { deleteUser, getUsers, getUsersCount, getUser, updateUser} from "../controllers/userController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import upload from "../utils/multerConfig.js";


const router = express.Router();

router.use(protect)

router.get("/getUsers",adminOnly, getUsers);
router.get("/getUser", getUser)
router.get("/getUsersCount", getUsersCount);
router.delete("/deleteUser/:id", deleteUser); //verifyJWT,
router.patch("/updateUser", upload.single('profilePicture'), updateUser)


export default router;
