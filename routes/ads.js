const express = require('express')
const router = express.Router()
const UserAds = require('../models/Userads')

router.get('/', async(req,res)=>{
const getAds = await UserAds.find({})
res.send(getAds)


})
router.post('/',async(req,res)=>{
       const {title,description,price} = req.body
        const user =  await UserAds.create({title,description,price}) 
        res.send(user)

    
})

module.exports = router