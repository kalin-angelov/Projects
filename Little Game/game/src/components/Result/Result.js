import styles from "./Result.module.css";

import { useLocation, useNavigate } from "react-router-dom";

import data from '../../data/miniData.json';

export const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userResult = location.state;
    console.log(userResult.results);

    const onPlayAgain = () => {
        navigate('/');
    }

    return (
        <div className={styles.result}>
            <div className={styles.headlineAndPoints}>
                <h1>Funny Quiz</h1>
                <h2>Welcome: {location.state.username}</h2>
                <p>{location.state.points}/{data.length - 1}0</p>
            </div>
            <p>Result's</p>
            <section>

            </section>
            <button onClick={onPlayAgain}>Play Again</button>
        </div>
    )
};