import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("items");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new order
router.post("/", async (req, res) => {
  const order = new Order({
    customerName: req.body.customerName,
    items: req.body.items,
    totalAmount: req.body.totalAmount,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
