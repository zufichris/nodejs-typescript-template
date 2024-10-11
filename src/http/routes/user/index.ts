import express from "express";
import { userControllers } from "../../controllers/user";

const router = express.Router();
router.route("/").get(userControllers.createUser);

export default router;
