import mongoose from "mongoose";
import Dish from "./models/Dish.js";
import User from "./models/User.js";
import Waiter from "./models/Waiter.js";
import Order from "./models/Order.js";

mongoose
  .connect("mongodb://localhost:27017/restaurant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MongoDB connected");

    await Dish.deleteMany({});
    await User.deleteMany({});
    await Waiter.deleteMany({});
    await Order.deleteMany({});

    const dishes = await Dish.insertMany([
      { name: "Pizza", price: 10, description: "Delicious cheese pizza" },
      { name: "Pasta", price: 12, description: "Creamy Alfredo pasta" },
      { name: "Salad", price: 8, description: "Fresh garden salad" },
    ]);

    const users = await User.insertMany([
      { email: "admin@gmail.com", password: "admin", role: "admin" },
      { email: "client@gmail.com", password: "client", role: "client" },
    ]);

    await Waiter.insertMany([{ name: "John Doe" }, { name: "Jane Smith" }]);

    await Order.insertMany([
      {
        clientEmail: "client@gmail.com",
        dishes: [dishes[0]._id, dishes[1]._id],
      },
      {
        clientEmail: "client@gmail.com",
        dishes: [dishes[1]._id, dishes[2]._id],
      },
    ]);

    console.log("Data seeded");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
