const Waiter = require('../../appStaff/staffWaitersChefCashier/modelWaitersChefCashier')
const { checkingUsers } = require('./users')
const { BadRequestError }  = require('../../errors')

const createWaiter = async (req) => {
    const { userWaiter, custName, menu } = req.body

    await checkingUsers(userWaiter)

    const checkCustName = await Waiter.findOne({ custName })
    if (checkCustName) throw new BadRequestError('waiter with this name is already registered')

    const resultWaiter = await Waiter.create({ userWaiter, custName, menu })
  
    return resultWaiter
    
}

const getAllWaiter = async() => {
    const resultUser = await Waiter.find().select('_id custName email menu')
    return resultUser
}

module.exports = { createWaiter, getAllWaiter }