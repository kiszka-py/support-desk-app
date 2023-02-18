require("dotenv").config();
const colors = require("colors");
const express = require("express");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 8000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
