const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users")

const connectDB = require("./utils/db");

// MIDDLEWARE
app.use(express.json())
// app.use((req, res, next) => {
//     req.requestTime = Date.now();
//     req.arithmetical_value = 4 * 7; 
//     next();
// });

// ROUTES
app.use("/api/users", userRoutes)

// cors middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    next()
   })

app.get("/", (req, res) => {
    res.send("Welcome to my API ! e-commerce backed 🤳")
   })

// app.get("/", (req, res) => {
//     res.send(`Request Time: ${req.requestTime} | Arithmetical Value: ${req.arithmetical_value}`);
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

connectDB()