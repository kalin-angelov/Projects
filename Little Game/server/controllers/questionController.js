const { createNewQuestion } = require("../manager/questionsManager");

exports.postQuestion = async (req, res) => {
    const { question, image, answerOne, one, answerTwo, two, answerThree, three, answerFour, four } = req.body;
    
    try {
        await createNewQuestion(question, image, answerOne, one, answerTwo, two, answerThree, three, answerFour, four);
    } catch (error) {
        console.log(error.message);
    }
};