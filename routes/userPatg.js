const express = require('express');
const {
    createUser,
    userLogin,
    getAllUser
  } = require('../controllers/userControllers.js');
  
const route = express.Router()

route.post('/registration',createUser)

route.post('/login',userLogin)

route.get('/', getAllUser)

module.exports = route;