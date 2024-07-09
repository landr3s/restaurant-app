// seed.js
import mongoose from "mongoose";

// Conectar a la base de datos
const mongoUri = "mongodb://localhost:27017/restaurantDB"; // Cambia esto a tu URI de MongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Definir el esquema y modelo para el menú
const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Menu = mongoose.model("Menu", menuSchema);

// Definir el esquema y modelo para la orden
const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [menuSchema],
  totalAmount: Number,
});

const Order = mongoose.model("Order", orderSchema);

// Definir el esquema y modelo para la calificación del mesero
const waiterRatingSchema = new mongoose.Schema({
  waiterName: String,
  rating: Number,
  comment: String,
});

const WaiterRating = mongoose.model("WaiterRating", waiterRatingSchema);

// Datos de prueba
const sampleMenus = [
  {
    name: "Pizza Margherita",
    description: "Tomato, mozzarella, and basil",
    price: 12,
  },
  {
    name: "Spaghetti Carbonara",
    description: "Pasta with egg, cheese, pancetta, and pepper",
    price: 15,
  },
  {
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert",
    price: 8,
  },
];

const sampleOrders = [
  {
    customerName: "John Doe",
    items: [sampleMenus[0], sampleMenus[2]],
    totalAmount: 20,
  },
  { customerName: "Jane Smith", items: [sampleMenus[1]], totalAmount: 15 },
];

const sampleRatings = [
  { waiterName: "Mario Rossi", rating: 5, comment: "Excellent service!" },
  {
    waiterName: "Luigi Bianchi",
    rating: 4,
    comment: "Very good, but can improve",
  },
];

// Insertar los datos de prueba
const seedDB = async () => {
  await Menu.deleteMany({});
  await Order.deleteMany({});
  await WaiterRating.deleteMany({});

  await Menu.insertMany(sampleMenus);
  await Order.insertMany(sampleOrders);
  await WaiterRating.insertMany(sampleRatings);

  console.log("Database seeded!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
