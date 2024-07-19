// models/Dish.js
import mongoose from "mongoose";

const DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Dish = mongoose.model("Dish", DishSchema);

export default Dish;
