import express from "express";
import Controllers from "../controllers";

const router = express.Router();
router.route("/").get(Controllers.getAll);

export default router;
