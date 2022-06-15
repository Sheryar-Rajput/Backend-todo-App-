const express = require('express')
const router = express.Router()
const Users = require('../models/todos')
const bcryptjs = require("bcryptjs")

// router.get('/all', async(req, res) => {
//     const user =  await Users.find({})
//     res.send(user)
// })

// router.post('/add', async(req, res) => {
//    const user = await  Users.create({name : req.body.data})
//   //  const response = await user.save() 
//    res.send(user)
// })
// router.put('/update/:id',async(req,res)=>{
//   const _id =  req.params.id 

//   const user = await Users.updateOne({ _id : req.params.id},{ name : req.body.data})
//   // const response = await user.save()
//   res.send(user)
// })
// router.delete('/delete/:id',async (req,res)=>{
// const user = await Users.deleteOne({_id : req.params.id})
// res.send(user)
// }
// )
router.post('/signup', async (req, res) => {
  console.log('req', req.body)

  try {
    const user = new Users(req.body.email_value)

    const response = await user.save()

    res.send({ message: 'Data added successfully!', data: response })
  } catch (e) {
    res.send({ message: e })
  }
})
router.post('/login', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body.email_value
  const user = await Users.findOne({ email })
  if (!user) {
    return res.send({ message: 'No user found. Please register!' })
  }

  const isAuthenticated =  bcryptjs.compareSync(password, user.password, );
  if (!isAuthenticated) {
    return res.send({ message: 'invalid password ' })
  }

  const token = await user.generateToken()
  return (
    res.send({user, current_token : token})

  )


})

module.exports = router

