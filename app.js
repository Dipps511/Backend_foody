require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8181;
const productRoute = require("./routes/productRoute");
const connectDB = require("./db/connect");
const notFoundError = require("./middleware/notFoundError");
const customMiddlewareErrorHandler = require("./middleware/customMiddlewareErrorHandler");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1/product/", productRoute);

app.use(notFoundError);
app.use(customMiddlewareErrorHandler);

const start = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log(`Server started listening at port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
