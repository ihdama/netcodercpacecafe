const { createUser, getAllUsers, LoginUsers, LoginBoss } = require ('../../services/mongoose/users')
const { StatusCodes } = require ('http-status-codes')

const createUserController = async(req, res, next) => {

    try {
        const resultCreate = await createUser(req)

        res.status(StatusCodes.CREATED).json({
            status : 'succsess',
            data   : resultCreate
        })

    }
    catch(err) {
        next(err)
    }

}

const indexUserController = async(req, res, next) => {
    try {
        const resultUser = await getAllUsers()
        res.status(StatusCodes.OK).json({
            status : 'succsess',
            data   : resultUser
        })
    }
    catch(error) {
        next(error)
    }
}

const userLoginController = async(req, res, next) => {

    try {
        const resultLogin = await LoginUsers(req)
        
        res.status(StatusCodes.CREATED).json({ 
            status: 'success', 
            data: resultLogin
        })
    } 
    catch (error) {
        next(error)
    }

}

const bossLoginController = async(req, res, next) => {

    try {
        const resultLogin = await LoginBoss(req)
        
        res.status(StatusCodes.CREATED).json({ 
            status: 'success', 
            data: {token: resultLogin}
        })
    } 
    catch (error) {
        next(error)
    }

}

module.exports = { createUserController, indexUserController, userLoginController, bossLoginController}