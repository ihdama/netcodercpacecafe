const mongoose = require('mongoose')
const {model, Schema} = mongoose

const parkSchema = Schema(
    {
        userPark : {
            type     : mongoose.Types.ObjectId,
            ref      : 'User',
            required : true
        },

        date : { 
            type     : String,
            required : true
        },

        vehicleType : {
            type     : String,
            required : true
        },

        totalPassenger : {
            type     : Number,
            required : true
        }

    },
    { timestamps    : true }
)

module.exports = model('Park', parkSchema)