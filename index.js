const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

//CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("CONNECTED TO DB")
)

//IMPORT ROUTES
const authRoute = require("./routes/auth");

//ROUTE MIDDLEWARE
app.use("/api/user", authRoute)

app.listen(4000, function () {
    console.log("SERVER IS CONNECTED:")
})