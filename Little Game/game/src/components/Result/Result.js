import styles from "./Result.module.css";

import { removeUser } from "../../service/userService"

import { useLocation, useNavigate } from "react-router-dom";

import { QuestionsInfo } from "../QuestionsInfo/QuestionsInfo";

export const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const user = location.state.user;
    const points = location.state.points;
    const givenAnswers = location.state.givenAnswers;
    const questions = location.state.questions;

    const onPlayAgain = async () => {
        try {
            await removeUser(user._id);

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.result}> 
            <h2><i class="fa-solid fa-asterisk"></i> Name: {user.username} - Points: {points}/{questions.length - 1}0 <i class="fa-solid fa-asterisk"></i></h2>
            <p>Given Answer</p>
            <section>
                {givenAnswers.map(questionAndAnswer => <QuestionsInfo key={questions._id} questionAndAnswer={questionAndAnswer} />)}
            </section>
            <button className={styles.playAgain} onClick={onPlayAgain}>Play Again</button>
        </div>
    )
};