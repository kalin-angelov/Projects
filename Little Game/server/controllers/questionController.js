const { createNewQuestion, getAllQuestions } = require("../manager/questionsManager");

exports.getQuestions = async (req, res) => {
    try {
        const questions = await getAllQuestions();
        res.json({questions});
    } catch(error) {
        console.log(error.message);
    }
};

exports.postQuestion = async (req, res) => {
    const { question, image, answerOne, one, answerTwo, two, answerThree, three, answerFour, four } = req.body;
    
    try {
        await createNewQuestion(question, image, answerOne, one, answerTwo, two, answerThree, three, answerFour, four);
    } catch (error) {
        console.log(error.message);
    }
};