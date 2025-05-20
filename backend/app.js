const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware")
const userRoutes = require("./routes/userRoutes")
const notesRoutes = require("./routes/notesRoutes")


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use("/api", userRoutes)
app.use("/api", notesRoutes)

connectDatabase()


app.listen(process.env.PORT,()=>{
  console.log(`Server is Running on http://localhost:${process.env.PORT}`)
})