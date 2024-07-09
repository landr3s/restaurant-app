import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const { userId, restaurantId, items, total } = req.body;

  const newOrder = new Order({
    userId,
    restaurantId,
    items,
    total,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
