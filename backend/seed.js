import mongoose from "mongoose";
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

    const users = [
      { email: "admin@gmail.com", password: "admin", role: "admin" },
      { email: "client@gmail.com", password: "client", role: "client" },
    ];
    await User.insertMany(users);

    const waiters = [{ name: "John Doe" }, { name: "Jane Smith" }];
    await Waiter.insertMany(waiters);

    console.log("Data seeded");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
