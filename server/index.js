import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import user from "./routers/user.route.js";
import cors from "cors"

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


// apis
app.use("/api/v1/user", user);


app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
