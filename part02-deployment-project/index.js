require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;

sampleData = {
    id: 123,
    city: "Lahore",
    country: "Pakistan"
}

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/login', (req, res) => {
    res.send("You Can Login Here!");
});

app.get('/info', (req, res) => {
    res.json(sampleData);
});

app.listen(port, () => {
    console.log("Listening on Port: " + port);
});