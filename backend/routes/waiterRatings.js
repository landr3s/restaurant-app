import express from "express";
import WaiterRating from "../models/WaiterRating.js";

const router = express.Router();

// GET all waiter ratings
router.get("/", async (req, res) => {
  try {
    const ratings = await WaiterRating.find();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new waiter rating
router.post("/", async (req, res) => {
  const rating = new WaiterRating({
    waiterName: req.body.waiterName,
    rating: req.body.rating,
    comment: req.body.comment,
  });

  try {
    const newRating = await rating.save();
    res.status(201).json(newRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
