const router = require('express').Router()
const { createParkController, indexParkController } = require('./controller')
const { authenticateUser, authorizeRoles } = require('../../middlewares/auth')

router.post('/park', authenticateUser, authorizeRoles('boss'), createParkController)
router.get('/park/boss', authenticateUser, authorizeRoles('boss'), indexParkController)

module.exports = router