import express from "express";
import Menu from "../models/Menu.js";

const router = express.Router();

// GET all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new menu item
router.post("/", async (req, res) => {
  const menuItem = new Menu({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
