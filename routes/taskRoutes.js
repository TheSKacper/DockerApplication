const express = require('express');
const {
  createTask,
  getAllTasks
} = require('../controllers/taskControllers.js');

const route = express.Router();

route.post('/', createTask);

route.get('/',getAllTasks)


module.exports = route;
