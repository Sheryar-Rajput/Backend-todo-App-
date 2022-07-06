const express = require('express')
 const router = express.Router()

 router.use('/user',require('./user'))
 router.use('/ads',require('./ads'))
 module.exports = router
