const express = require('express');
const {
  createProject,
  getAllProjects,
} = require('../controllers/projectControllers.js');

const route = express.Router();

route.post('/', createProject);
route.get('/', getAllProjects);

module.exports = route;
