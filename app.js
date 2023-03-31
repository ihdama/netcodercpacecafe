var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// variable for router
    const netcoderspace = '/app/stakeholder'
    const userRouter = require('./app/appStaff/users/router')
    const waiterRouter = require('./app/appStaff/staffWaitersChefCashier/router')
    const parkingOfficerRouter = require('./app/appStaff/staffParking/router')

//

// variable for middleware
    const notFoundMiddleware = require('./app/middlewares/not-found')
    const handleErrorMiddleware = require('./app/middlewares/handler-error')
//

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect to router
    app.get('/', (req, res) => { 
        res.status(200).json({ status: 'succsess', message: 'Welcome to netcoderspace'}) 
    })

    app.use(`${netcoderspace}/app`, userRouter)
    app.use(`${netcoderspace}/app`, waiterRouter)
    app.use(`${netcoderspace}/app`, parkingOfficerRouter)
// 

// connect to middleware
    app.use(notFoundMiddleware)
    app.use(handleErrorMiddleware)
// 

module.exports = app