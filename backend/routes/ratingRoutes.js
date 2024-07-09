import express from "express";
import { rateOrder, getUserRatings } from "../controllers/ratingController.js";

const router = express.Router();

router.post("/", rateOrder);
router.get("/:userId", getUserRatings);

export default router;
