const mongoose = require('mongoose')
const {model, Schema} = mongoose

const menuListWaitersSchema = Schema (
    {
        menuName : {
            type : String,
            required : true
        },
        harga : { // mean in english is price
            type: Number,
            default: 0
        },
          
    }

)

const waitersSchema = Schema(
    {
        userWaiter : {
            type     : mongoose.Types.ObjectId,
            ref      : 'User',
            required : true
        },

        custName : {
            type     : String,
            required : true
        },

        // * menuListWaitersSchema
            menu : {
                type     : [menuListWaitersSchema],
                required : true
            }
        // 
    },
    { timestamps    : true }
)

module.exports = model('Waiter', waitersSchema)