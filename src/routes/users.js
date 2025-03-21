const express = require("express")
const router = express.Router()
const { hashPassword } = require("../middleware/passencrypt")
const { userLogin, userSignUp } = require("../controllers/userControllers")

router.post("/login", userLogin)    

router.post("/signup", hashPassword, userSignUp)


module.exports = router;