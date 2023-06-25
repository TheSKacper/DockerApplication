const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// Ścieżka do dodawania nowego członka
router.post('/', memberController.addMember);

// Ścieżka do pobierania wszystkich członków
router.get('/', memberController.getAllMembers);

// Ścieżka do pobierania pojedynczego członka na podstawie ID
router.get('/:id', memberController.getMemberById);

// Ścieżka do aktualizowania członka na podstawie ID
router.put('/:id', memberController.updateMember);

// Ścieżka do usuwania członka na podstawie ID
router.delete('/:id', memberController.deleteMember);

module.exports = router;
