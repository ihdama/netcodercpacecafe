const { StatusCodes } = require('http-status-codes')

class BadRequestError extends Error { //! error 400
    constructor(message) {
        super(message)
        this.status = StatusCodes.BAD_REQUEST
    }
}

class UnauthorizedError extends Error { //! error 401
    constructor(message) {
        super(message)
        this.status = StatusCodes.UNAUTHORIZED
    }
}

class ForbiddenError extends Error { //! error 403
    constructor(message) {
        super(message)
        this.status = StatusCodes.FORBIDDEN
    }
}

class NotFoundError extends Error { //! error 404
    constructor(message) {
        super(message)
        this.status = StatusCodes.NOT_FOUND
    }
}

class RequestTimeoutError extends Error { //! error 408
    constructor(message) {
        super(message)
        this.status = StatusCodes.REQUEST_TIMEOUT
    }
}

class InternalServerError extends Error { //! error 500
    constructor(message) {
        super(message)
        this.status = StatusCodes.INTERNAL_SERVER_ERROR
    }
}


module.exports = { BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, RequestTimeoutError, InternalServerError }