import express from "express";
import userRoutes from "./user";
const router = express.Router();
router.use(userRoutes);
export default router;
