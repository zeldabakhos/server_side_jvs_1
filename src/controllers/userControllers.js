const User = require("../models/userModels")

exports.userLogin = (req, res) => {
    res.send("User login")
}

exports.userSignUp = async (req, res) => {
    const { firstName, email, lastName, imageUrl, role } = req.body
    const hashedPassword = req.hashedPassword
    try {
    const newUser = new User({
        firstName,
        email,
        password: hashedPassword,
        lastName,
        imageUrl,
        role,
        inventory: [],
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
} catch (err) {
    res.status(400).json({
        message: err.message
    })
}
}