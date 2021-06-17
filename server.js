//Imports.
const express = require("express");
require("dotenv").config();

//Constant variables.
const app = express();
const PORT = process.env.PORT || 3001;

//Setting a test route.
app.get("/", (req, res) => {
    res.send("Hello world!");
});

//Start the server.
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
