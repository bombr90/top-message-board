const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  added: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("message",MessageSchema);