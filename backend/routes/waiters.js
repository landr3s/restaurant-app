import express from "express";
import Waiter from "../models/Waiter.js";

const router = express.Router();

// Get all waiters
router.get("/", async (req, res) => {
  const waiters = await Waiter.find();
  res.json(waiters);
});

// Add a new waiter
router.post("/", async (req, res) => {
  const newWaiter = new Waiter(req.body);
  await newWaiter.save();
  res.json(newWaiter);
});

// Rate a waiter
router.post("/rate/:id", async (req, res) => {
  const { rating } = req.body;
  const waiter = await Waiter.findById(req.params.id);
  waiter.rating =
    (waiter.rating * waiter.ratingsCount + rating) / (waiter.ratingsCount + 1);
  waiter.ratingsCount += 1;
  await waiter.save();
  res.json(waiter);
});

export default router;
