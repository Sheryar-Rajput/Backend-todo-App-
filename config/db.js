const mongoose = require("mongoose")

const mongoURI = 'mongodb+srv://sherii:sherii47@cluster0.ne9g0n1.mongodb.net/test';

// connect to mongodb
mongoose.connect(mongoURI, {useNewUrlParser: true})

module.exports = mongoose