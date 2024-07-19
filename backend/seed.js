import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Dish from "./models/Dish.js";
import User from "./models/User.js";
import Waiter from "./models/Waiter.js";

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

    const dishes = [
      { name: "Pizza", price: 10, description: "Delicious cheese pizza" },
      { name: "Pasta", price: 12, description: "Creamy Alfredo pasta" },
      { name: "Salad", price: 8, description: "Fresh garden salad" },
    ];
    await Dish.insertMany(dishes);

    const adminPassword = await bcrypt.hash("adminpassword", 10);
    const clientPassword = await bcrypt.hash("clientpassword", 10);
    const users = [
      { username: "admin", password: adminPassword, role: "admin" },
      { username: "client", password: clientPassword, role: "client" },
    ];
    await User.insertMany(users);

    const waiters = [{ name: "John Doe" }, { name: "Jane Smith" }];
    await Waiter.insertMany(waiters);

    console.log("Data seeded");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
