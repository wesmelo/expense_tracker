const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text: {
      type: String,
      trim: true,
      required: [ true, 'Some text is required']
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)