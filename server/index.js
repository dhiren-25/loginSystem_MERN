require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/auth');
const userRouter = require("./routes/userRouter");

connection();

app.use(express.json())
app.use(cors());

app.use("/api/register",userRoutes);
app.use("/api/login",authRoutes);
app.use("/api/users", userRouter);



const port = process.env.PORT || 8080;
app.listen(port);
console.log("app listening on port " + port);