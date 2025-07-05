import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js";

const router = Router();
router.route('/register').post((req, res) => {
    res.status(201).json({ message: "User registered successfully" });
});
router.route('/login').post((req, res) => {
    res.status(200).json({ message: "User logged in successfully" });
});
export default router;