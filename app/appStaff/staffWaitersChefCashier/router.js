const router = require('express').Router()
const { createWaiterController, indexWaiterController } = require('./controller')
const { authenticateUser, authorizeRoles  } = require('../../middlewares/auth')

router.post('/waiters', authenticateUser, authorizeRoles('boss'), createWaiterController)
router.get('/waiters/boss', authenticateUser, authorizeRoles('boss'),  indexWaiterController)

module.exports = router