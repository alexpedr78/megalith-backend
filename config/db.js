const mongoose = require("mongoose");
// require("dotenv").config(); // Load environment variables from .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // Load environment variables from .env only in development
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
