const User = require('../../appStaff/users/modelUsers')
const { BadRequestError, NotFoundError, ForbiddenError, UnauthorizedError, InternalServerError }  = require('../../errors')
const { createJWT, createTokenUser } = require('../../utils/jwt')

const createUser = async (req) => {
    const { name, email, password, confirmPassword, role } = req.body
    if(password !== confirmPassword) throw new BadRequestError('Passwords do not match')

    const checkUser = await User.findOne({ email })
    if (checkUser) throw new BadRequestError('the user is already registered')

    const resultUser = await User.create({name, email, password, confirmPassword, role})
    delete resultUser._doc.password
    return resultUser
}

const getAllUsers = async() => {
    const resultUser = await User.find().select('_id name email role')
    return resultUser
}

const checkingUsers = async (id) => {
    const resultChecking = await User.findOne({ _id: id })
    
    if(!resultChecking) throw new NotFoundError(`no registered user with id ${id}`)
    
    return resultChecking
}

const LoginUsers = async(req) => {
    
    const { email, password } = req.body
    if(!email || !password) throw new BadRequestError('please enter email and password correctly')

    const resultLogin = await User.findOne({ email })
    if(!resultLogin) throw new ForbiddenError('invalid credentials: Email does not match as registered!')

    const isPasswordCorrect = await resultLogin.comparePassword(password)
    if(!isPasswordCorrect) throw new ForbiddenError('invalid credentials: Password does not match as registered!')

    delete resultLogin._doc.password

    return resultLogin

}

const LoginBoss = async(req) => {
    
    const { email, password } = req.body
    if(!email || !password) throw new BadRequestError('please enter email and password correctly')

    const resultLogin = await User.findOne({ email })
    if(!resultLogin) throw new ForbiddenError('invalid credentials: Email does not match as registered!')

    const isPasswordCorrect = await resultLogin.comparePassword(password)
    if(!isPasswordCorrect) throw new ForbiddenError('invalid credentials: Password does not match as registered!')

    const token = createJWT({ payload: createTokenUser(resultLogin) })
    return token

}

module.exports = { createUser, getAllUsers, checkingUsers, LoginUsers, LoginBoss }