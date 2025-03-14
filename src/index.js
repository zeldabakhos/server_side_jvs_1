const express = require("express");
const app = express();
const port = 3000;

// MIDDLEWARE
app.use((req, res, next) => {
    req.requestTime = Date.now();
    req.arithmetical_value = 4 * 7; 
    next();
});

app.get("/", (req, res) => {
    res.send(`Request Time: ${req.requestTime} | Arithmetical Value: ${req.arithmetical_value}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
