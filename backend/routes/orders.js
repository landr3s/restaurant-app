// routes/orders.js
import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { clientEmail, dishes } = req.body;
    const order = new Order({ clientEmail, dishes });
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/client/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const orders = await Order.find({ clientEmail: email }).populate("dishes");
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
