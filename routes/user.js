const express = require('express')
const router = express.Router()
const Users = require('../models/todos')

router.get('/all', async(req, res) => {
    const user =  await Users.find({})
    res.send(user)
})

router.post('/add', async(req, res) => {
   const user = new Users(req.body)
   const response = await user.save() 
   res.send(response)
})




module.exports = router

