const express = require('express');
const router = express.Router();
const kanbanController = require('../controller/kanban.controller');

router.get('/', kanbanController.getTickets);
router.post('/', kanbanController.createTicket);
router.put('/:id', kanbanController.updateTicket);
router.delete('/:id', kanbanController.deleteTicket);

module.exports = router;
