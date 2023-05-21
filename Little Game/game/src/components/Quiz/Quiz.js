import styles from '../Quiz/Quiz.module.css';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import questions from '../../questions/questions.json';
import { Card } from '../Card/Card';
import { CardTrue } from '../CardTrue/CardTrue';
import { CardFalse } from '../CardFalse/CardFalse';


export const Quiz = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const username = location.state.username;
    const questions = location.state.questions;

    const [showCard, setShowCard] = useState(false);
    const [isTrueCard, setIsTrueCard] = useState(false);
    const [isFalseCard, setIsFalseCard] = useState(false);
    const [questionCounter, setQuestionCounter] = useState(0);
    const [points, setPoints] = useState(0);
    const [showPlusPoint, setShowPlusPoint] = useState(false);
    const [givenAnswer, setGivenAnswer] = useState({});
    const [results, setResults] = useState([]);

    const questionAndPointControl = (questions) => {
        if (questions.length - 1 === questionCounter) {
            setQuestionCounter(questions.length - 1);
        } else {
            setQuestionCounter(questionCounter => ++questionCounter);
        }
    };

    const onClickIsTrue = (event) => {
        const answer = event.target.name;
        setShowCard(true);

        setTimeout(() => {
            setShowCard(false);
            setIsTrueCard(true);
            setShowPlusPoint(true);
            setPoints(points => points + 10);
        }, 2000);

        setTimeout(() => {
            setIsTrueCard(false);
            setShowPlusPoint(false);
            questionAndPointControl(questions);
        }, 4000);
    };

    const onClickIsFalse = (event) => {
        const answer = event.target.name;

        setShowCard(true);

        setTimeout(() => {
            setShowCard(false);
            setIsFalseCard(true);
        }, 2000);

        setTimeout(() => {
            setIsFalseCard(false);
            questionAndPointControl(questions);
        }, 4000);
    };

    const onCLickBack = (event) => {
        event.preventDefault();
        navigate('/');
    };

    const onClickResult = (event) => {
        event.preventDefault();
        navigate('/result', { state: { username: location.state.username, points, results } });
    };

    return (
        <>
            {showCard && <Card />}
            {isTrueCard && <CardTrue />}
            {isFalseCard && <CardFalse />}

            <div className={styles.quiz}>
                <div className={styles.headlineAndPoints}>
                    <h1>Funny Quiz</h1>
                    <h2>Welcome: {username}</h2>
                    <p>{points}/{questions.length - 1}0</p>
                    {showPlusPoint && <p>+10</p>}
                </div>
                <p>{questions[questionCounter].question}</p>
                <img src={questions[questionCounter].img} alt="someImg" />
                {questions.length - 1 !== questionCounter ?
                    <div className={styles.answers}>
                        {questions[questionCounter].one === true ?
                            <button onClick={onClickIsTrue} name={questions[questionCounter].answerOne}>
                                {questions[questionCounter].answerOne}
                            </button>
                            :
                            <button onClick={onClickIsFalse} name={questions[questionCounter].answerOne}>
                                {questions[questionCounter].answerOne}
                            </button>
                        }

                        {questions[questionCounter].two === true ?
                            <button onClick={onClickIsTrue} name={questions[questionCounter].answerTwo}>
                                {questions[questionCounter].answerTwo}
                            </button>
                            :
                            <button onClick={onClickIsFalse} name={questions[questionCounter].answerTwo}>
                                {questions[questionCounter].answerTwo}
                            </button>
                        }

                        {questions[questionCounter].three === true ?
                            <button onClick={onClickIsTrue} name={questions[questionCounter].answerThree}>
                                {questions[questionCounter].answerThree}
                            </button>
                            :
                            <button onClick={onClickIsFalse} name={questions[questionCounter].answerThree}>
                                {questions[questionCounter].answerThree}
                            </button>
                        }

                        {questions[questionCounter].four === true ?
                            <button onClick={onClickIsTrue} name={questions[questionCounter].answerFour}>
                                {questions[questionCounter].answerFour}
                            </button>
                            :
                            <button onClick={onClickIsFalse} name={questions[questionCounter].answerFour}>
                                {questions[questionCounter].answerFour}
                            </button>
                        }
                    </div>
                    :
                    <div className={styles.result}>
                        <button onClick={onClickResult}>
                            {questions[questionCounter].answerOne}
                        </button>
                    </div>
                }
                <button onClick={onCLickBack}>Home</button>
            </div>
        </>
    );
};