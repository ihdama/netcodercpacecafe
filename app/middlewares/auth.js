const { UnauthorizedError } = require('../errors')
const { isTokenValid } = require('../utils/jwt')

const authenticateUser = async(req, res, next) => {
    try {
        let token
        const authHeader = req.headers.authorization

        if(authHeader && authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1] 
        }
        
        if(!token) throw new UnauthorizedError('invalid authentication')

        const payload = isTokenValid({ token })
        req.user = {
            id    : payload.userId,
            name  : payload.name,
            email : payload.email,
            role  : payload.role
        }

        next()
    } catch (error) {
        next(error)
    }
}

const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) throw new UnauthorizedError('access to this route is not allowed')
        next()
    }
}

module.exports = { authenticateUser, authorizeRoles }