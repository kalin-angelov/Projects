const Question = require('../models/Question');

exports.createNewQuestion = ( question, image, answerOne, one, answerTwo, two, answerThree, three, answerFour, four ) => Question.create({ question, image, answerOne, one, answerTwo, two, answerThree, three, answerFour, four });