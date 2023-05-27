import styles from "./Result.module.css";

import { useLocation, useNavigate } from "react-router-dom";

import { QuestionsInfo } from "../QuestionsInfo/QuestionsInfo";

export const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const user = location.state.user;
    const points = location.state.points;
    const givenAnswers = location.state.givenAnswers;
    const questions = location.state.questions;

    const onPlayAgain = () => {
        navigate('/');
    }

    return (
        <div className={styles.result}>
            <div className={styles.headlineAndPoints}>
                <h2>Welcome: {user.username}</h2>
                <p>{points}/{questions.length - 1}0</p>
            </div>
            <p>Given Answer</p>
            <section>
                {givenAnswers.map(questionAndAnswer => <QuestionsInfo key={questions._id} questionAndAnswer={questionAndAnswer} />)}
            </section>
            <button className={styles.playAgain} onClick={onPlayAgain}>Play Again</button>
        </div>
    )
};