const { createWaiter, getAllWaiter } = require('../../services/mongoose/waiters')
const { StatusCodes } = require('http-status-codes')

const createWaiterController = async(req, res, next) => {

    try {
        const resultCreate = await createWaiter(req)

        res.status(StatusCodes.CREATED).json({
            status : 'succsess',
            data   : resultCreate
        })

    }
    catch(err) {
        next(err)
    }

}

const indexWaiterController = async(req, res, next) => {
    try {
        const resultUser = await getAllWaiter()
        res.status(StatusCodes.OK).json({
            status : 'succsess',
            data   : resultUser
        })
    }
    catch(error) {
        next(error)
    }
}

module.exports = { createWaiterController, indexWaiterController }