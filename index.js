require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const bookRoute = require('./routes/bookRoutes');
const commentRoute = require ('./routes/commentRoutes');
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.get("/", (req, res) => {
    res.send("Yuhuuu")
})

const db = require('../be_bookreview/models');
db.sequelize.sync();

app.use('/api/books', bookRoute);
app.use('/api/comments', commentRoute)

app.listen(PORT, () => {
    console.log(`Express up! http://localhost:${PORT}`);
});