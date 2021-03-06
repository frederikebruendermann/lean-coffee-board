const mongoose = require('mongoose')

const cardSchema = {
  text: { type: String, required: true },
  author: { type: String, required: true },
  votes: { type: Number, default: 0 },
}

module.exports = mongoose.model('Card', cardSchema)
