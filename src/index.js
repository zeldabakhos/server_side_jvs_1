const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

const userRoutes = require("./routes/users")
const productRoutes = require("./routes/products")
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
app.use("/api/products", productRoutes)

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

connectDB()