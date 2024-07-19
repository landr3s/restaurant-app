import express from "express";
import Dish from "../models/Dish.js";

const router = express.Router();

// Get all dishes
router.get("/", async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
});

// Add a new dish
router.post("/", async (req, res) => {
  const newDish = new Dish(req.body);
  await newDish.save();
  res.json(newDish);
});

export default router;
