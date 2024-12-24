import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos";
import connectDB from "./config/db";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Connect to MongoDB
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
});
