const jwt = require('jsonwebtoken')
const { jwtExpiration, jwtSecret } = require('../config')

const createJWT = ({ payload }) => {
    const token = jwt.sign(
        payload, 
        jwtSecret, 
        { expiresIn: jwtExpiration }
    )
    return token
}

const createTokenUser = (user) => {
    return {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    }
}

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret)

module.exports = { createJWT, createTokenUser, isTokenValid }