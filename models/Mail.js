const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mailSchema = new Schema({
  fullname: {
    type: String
  },
  email: {
    type: String
  },
  subject: {
    type: String
  },
  message: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Mail = mongoose.model('mail', mailSchema);