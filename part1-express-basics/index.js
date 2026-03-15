const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/login', (req, res) => {
    res.send("You Can Login Here!");
});

app.get('/register', (req, res) => {
    res.send("You Can Register Here!");
});

app.listen(port, () => {
    console.log("Listening on Port: " + port);
});