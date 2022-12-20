
const router = require('express').Router()
const passportJWT = require('../middleware/auth.middleware')

const userServices = require('./users.services')

//! router.get("/", passportJWT.authenticate('jwt', {session: false}), userServices.getAllUsers) //? /api/v1/users
//! router.post("/", userServices.postUser) //? /api/v1/users/:id

router.route("/")
    .get(passportJWT.authenticate('jwt', {session: false}), userServices.getAllUsers)
    .post(userServices.postUser)

router.get('/me', passportJWT.authenticate('jwt', {session: false}), userServices.getMyUser) //? /api/v1/users/me
router.patch('/me', passportJWT.authenticate('jwt', {session: false}), userServices.patchMyUser)//? /api/v1/users/me
router.delete('/me', passportJWT.authenticate('jwt', {session: false}), userServices.deleteMyUser)//? /api/v1/users/me

router.get("/:id", userServices.getUserById) //? /api/v1/users/:id
router.patch('/:id', userServices.patchUser)
router.delete('/:id', userServices.deleteUser)



module.exports = router