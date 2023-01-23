const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER_PASS +
      "@cluster0.zma4q.mongodb.net/netflix",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connetion ");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(` Server Started on Port ${process.env.PORT}`);
});
