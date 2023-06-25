const express = require('express');
const {
    createComment,
    getAllComments
} = require('../controllers/commentControllers.js');

const route = express.Router();

route.post('/:taskId', createComment);
route.get('/:taskId', getAllComments);

module.exports = route;
