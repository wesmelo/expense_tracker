//  @desc   Get all transactions
//  @route  GET /api/v1/transactions
//  @access Public

exports.getTransactions = (req, res, inndex) =>{
  res.send('GET transactions')
}

//  @desc   Add transactions
//  @route  POST /api/v1/transactions
//  @access Public

exports.addTransaction = (req, res, inndex) =>{
  res.send('POST transaction')
}

//  @desc   DELETE transaction
//  @route  DELETE /api/v1/transactions/:id
//  @access Public

exports.deleteTransaction = (req, res, inndex) =>{
  res.send('DELETE transactions')
}