const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String
})

const Users = mongoose.model('Users', UserSchema)
module.exports = Users