const { createPark, getAllPark } = require('../../services/mongoose/park')
const { StatusCodes } = require('http-status-codes')

const createParkController = async(req, res, next) => {

    try {
        const resultCreate = await createPark(req)

        res.status(StatusCodes.CREATED).json({
            status : 'succsess',
            data   : resultCreate
        })

    }
    catch(err) {
        next(err)
    }

}

const indexParkController = async(req, res, next) => {
    try {
        const resultUser = await getAllPark()
        res.status(StatusCodes.OK).json({
            status : 'succsess',
            data   : resultUser
        })
    }
    catch(error) {
        next(error)
    }
}


module.exports = { createParkController, indexParkController }