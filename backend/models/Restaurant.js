// models/Restaurant.js
import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  dishes: [{ name: String, price: Number }],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
