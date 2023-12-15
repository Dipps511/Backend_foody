const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connection success...");
    return db;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
