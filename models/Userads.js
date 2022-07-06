const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ads = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }

  }
)
const UserAds = mongoose.model('products', Ads)
module.exports = UserAds