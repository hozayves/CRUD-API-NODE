require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.routes");
const app = express();
app.use(express.json());

// routers
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("congratulation MongoDB is already connected ");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error! ", error);
  });
