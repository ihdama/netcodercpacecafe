const Park = require('../../appStaff/staffParking/modelPark')
const { checkingUsers } = require('./users')
const { }  = require('../../errors')

const createPark = async (req) => {
    const { 
        userPark, 
        date, 
        vehicleType, 
        totalPassenger 
    } = req.body

    await checkingUsers(userPark)

    const resultPark = await Park.create({ 
        userPark, 
        date, 
        vehicleType, 
        totalPassenger 
    })

    return resultPark

}

const getAllPark = async() => {
    const resultUser = await Park.find().select('_id userPark date vehicleType totalPassenger')
    return resultUser
}

module.exports = { createPark, getAllPark }