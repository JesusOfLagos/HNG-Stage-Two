
const express = require('express')
const personRouter = express.Router()
const userController = require('./user.controller')


personRouter.post('/api', userController.createNewPerson)

personRouter.get('/api/:id', userController.getPerson)

personRouter.put('/api/:id', userController.updatePerson)

personRouter.delete('/api/:id', userController.deletePerson)

module.exports = personRouter