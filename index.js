require('dotenv').config()
const express = require("express");
const app = express();

//port 8000
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hae")
})

app.listen(PORT, () => {
    console.log(`Express up! http://localhost:${PORT}`);
});