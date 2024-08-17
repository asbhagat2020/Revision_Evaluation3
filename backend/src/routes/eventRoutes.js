const express = require('express');
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
    .post(authMiddleware, adminMiddleware, createEvent)
    .get(authMiddleware, getEvents);

router.route('/:id')
    .get(authMiddleware, getEventById)
    .put(authMiddleware, adminMiddleware, updateEvent)
    .delete(authMiddleware, adminMiddleware, deleteEvent);

module.exports = router;
