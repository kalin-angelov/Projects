const router = require('express').Router();

const authController = require('./controllers/authController');
const questionController = require('./controllers/questionController');

router.get('/littleGame/questions', questionController.getQuestions);

router.post('/littleGame/create/user', authController.postUser);
router.post('/create/question', questionController.postQuestion);

router.delete('/littleGame/delete/user/:id', authController.deleteUser);

module.exports = router;