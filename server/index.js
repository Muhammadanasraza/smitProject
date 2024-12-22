import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import user from "./routers/user.js";

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());

// apis
app.use("/api/v1/user", user);

app.get("home", (req, res) => {
    res.status(200).json({
        success: true,
        message:"Hello World!"
    });
})

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
