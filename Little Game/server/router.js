const router = require('express').Router();

const authController = require('./controllers/authController');
const questionController = require('./controllers/questionController');

router.post('/create/User', authController.postUser);
router.post('/create/Question', questionController.postQuestion);

module.exports = router;