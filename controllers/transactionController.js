const Transaction = require('../models/Transaction')

//  @desc   Get all transactions
//  @route  GET /api/v1/transactions
//  @access Public

exports.getTransactions = async(req, res, index) =>{
  try {
    const transactions = await Transaction.find()

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    })
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: 'Server Error'
    })
  }
}

//  @desc   Add transactions
//  @route  POST /api/v1/transactions
//  @access Public

exports.addTransaction = async(req, res, index) =>{
  try {
      const { text, amount } = req.body

      const transaction = await Transaction.create(req.body)

      return res.status(201).json({
        success: true,
        data: transaction
      })
    } catch (error) {
      if(error.name === 'ValidationError'){
        const messages = Object.values(error.errors).map(value => value.message)

        return res.status(400).json({
          sucess:false,
          error: messages
        })
      }else {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        })
    }
  }
}

//  @desc   DELETE transaction
//  @route  DELETE /api/v1/transactions/:id
//  @access Public

exports.deleteTransaction = async(req, res, inndex) =>{
  try {
    const transaction = await Transaction.findById(req.params.id)

    if(!transaction){
      res.status(404).json({
        success: false,
        error: 'Transaction not found'
      })
    }
    await transaction.remove()

    return res.status(200).json({
      sucess: true,
      data: {}
    })

  } catch (error) {
    return res.status(500).json({
      success: true,
      error: 'Server Error'
    })
  }
}