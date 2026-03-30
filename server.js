const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use("/api/recipes", recipeRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});