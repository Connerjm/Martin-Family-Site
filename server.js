//Imports.
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

//Constant variables.
const app = express();
const PORT = process.env.PORT || 3001;

//Set up morgan logging.
app.use(morgan("dev"));

//Connect to the database.
mongoose.connect('mongodb://localhost/familyDB',
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(error => console.error(error));

//Setting a test route.
app.get("/", (req, res) => {
    res.send("Hello world!");
});

//Start the server.
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
