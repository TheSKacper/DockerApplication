const express = require('express');
const {
    addMemberToProject,
    getProjectMembers
} = require('../controllers/projectMemberControllers.js');

const route = express.Router();

route.post('/:projectId', addMemberToProject );
route.get('/:projectId', getProjectMembers);

module.exports = route;
