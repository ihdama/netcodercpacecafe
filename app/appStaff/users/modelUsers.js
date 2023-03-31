const mongoose = require('mongoose')
const { model, Schema } = mongoose
const bycrypt = require('bcryptjs')

const userSchema = Schema(
    {
        name: {
            type        : String,
            required    : [true, 'Please enter your name'],
            minLenght   : [3, 'The name character is at least 3 characters long'],
            maxLenght   : [50, 'Maximum character name is 50 characters']
        },
        email: {
            type        : String,
            unique      : true,
            required    : [true, 'Please enter your email too'],
        },
        password: {
            type        : String,
            required    : [true, 'please enter your password'],
            minLenght   : [6, 'character password is at least 6 characters long'],
        },
        role: {
            type        : String,
            enum        : ['boss', 'cashier', 'chef', 'parking', 'waiter'],
            default     : 'boss'
        }
    },
    { timestamps    : true }
)

// * password hash
    userSchema.pre('save', async function (next) {
        
        const User = this

        if (User.isModified('password')) {
            User.password = await bycrypt.hash(User.password, 12)
        }
        
        next()
    })

    userSchema.methods.comparePassword = async function (candidatePassword) {
        
        const isMatch = await bycrypt.compare(candidatePassword, this.password)

        return isMatch
    }
// 

module.exports = model ('User', userSchema)