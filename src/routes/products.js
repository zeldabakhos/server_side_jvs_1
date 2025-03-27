const express = require("express")
const router = express.Router()

router.get('/', (req, res) =>{
    res.send('Products')
})

router.post('/', (req, res) =>{
    res.send('Create Product')
})
module.exports = router