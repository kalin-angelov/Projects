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

    const questions = location.state.questions;
    const user = location.state.user;

    const [showCard, setShowCard] = useState(false);
    const [isTrueCard, setIsTrueCard] = useState(false);
    const [isFalseCard, setIsFalseCard] = useState(false);
    const [questionCounter, setQuestionCounter] = useState(0);
    const [points, setPoints] = useState(0);
    const [showPlusPoint, setShowPlusPoint] = useState(false);
    const [givenAnswers, setGivenAnswers] = useState([]);

    const questionAndPointControl = (questions) => {
        if (questions.length - 1 === questionCounter) {
            setQuestionCounter(questions.length - 1);
            navigate('/result', {
                state:
                {
                    user,
                    points,
                    givenAnswers,
                    questions
                }
            });
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
            setGivenAnswers(givenAnswers => [...givenAnswers, answer]);
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
            setGivenAnswers(givenAnswers => [...givenAnswers, answer]);
        }, 4000);
    };

    const onCLickBack = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <>
            {showCard && <Card />}
            {isTrueCard && <CardTrue />}
            {isFalseCard && <CardFalse />}

            <div className={styles.quiz}>
                <div className={styles.headlineAndPoints}>
                    <h2>Welcome: {user.username}</h2>
                    <p>{points}/{questions.length}0</p>
                    {showPlusPoint && <p>+10</p>}
                </div>
                <p>{questions[questionCounter].question}</p>
                <img src={questions[questionCounter].img} alt="someImg" />
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
                <button onClick={onCLickBack}>Home</button>
            </div>
        </>
    );
};