const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const recipeRoutes = require("./routes/recipeRoutes");


const app = express();


const port = process.env.PORT || 5000;

// routes middleware
app.use("/api/recipe", recipeRoutes)
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home page is running")
})

// connecting to mongoDB and starting th server 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    });
})
.catch((error) => {
    console.log(error.message)
})

