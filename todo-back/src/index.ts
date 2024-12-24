import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos";
import connectDB from "./config/db";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/todos", todoRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
