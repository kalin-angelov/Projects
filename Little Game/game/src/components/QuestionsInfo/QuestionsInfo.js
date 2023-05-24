import styles from "./QuestionsInfo.module.css"

export const QuestionsInfo = ({
    question,
    givenAnswers
}) => {
    return (
        <div className={styles.questionsInfo}>
            <p>{question.question}</p>
            <img src={question.img} alt="someImg" />
            <div className={styles.answers}>
                <button style={{ background: "red" }} name={question.answerOne}>{question.answerOne}</button>
                <button name={question.answerTwo}>{question.answerTwo}</button>
                <button name={question.answerThree}>{question.answerThree}</button>
                <button name={question.answerFour}>{question.answerFour}</button>
            </div>
        </div>
    )
};