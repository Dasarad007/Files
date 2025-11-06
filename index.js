require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/db");


var imageRoutes = require("./routes/image-routes")







var cors = require("cors")

const app = express();

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(express.json());

app.use(cors())

// Routes

app.use("/api/images",imageRoutes)








// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});