const router = require('express').Router()
const { createUserController, indexUserController, userLoginController, bossLoginController} = require('./controller')
const { authenticateUser, authorizeRoles } = require('../../middlewares/auth')

router.post('/users', authenticateUser, authorizeRoles('boss'), createUserController)
router.get('/users/boss', authenticateUser, authorizeRoles('boss'), indexUserController)
router.post('/users/loginUser', authenticateUser, authorizeRoles('boss'), userLoginController)
router.post('/users/loginBoss', bossLoginController)

module.exports = router

