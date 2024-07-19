// routes/dishes.js
import express from "express";
import Dish from "../models/Dish.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, price } = req.body;
  const dish = new Dish({ name, price });
  await dish.save();
  res.status(201).send(dish);
});

router.get("/", async (req, res) => {
  const dishes = await Dish.find();
  res.send(dishes);
});

export default router;
