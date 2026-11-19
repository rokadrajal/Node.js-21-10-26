import { Homepage , Aboutpage , Profilepage } from "../controllers/usecontrollers.js";
import express from "express";

const router = express.Router();

router.get("/",Homepage);
router.get("/about",Aboutpage);
router.get("/profile",Profilepage);

export default router;

