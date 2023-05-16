import styles from '../Quiz/Quiz.module.css';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import data from '../../data/miniData.json';
import { Card } from '../Card/Card';
import { CardTrue } from '../CardTrue/CardTrue';
import { CardFalse } from '../CardFalse/CardFalse';

export const Quiz = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
            questionAndPointControl(data);
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
            questionAndPointControl(data);
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
                    <h2>Welcome: {location.state.username}</h2>
                    <p>{points}/{data.length - 1}0</p>
                    {showPlusPoint && <p>+10</p>}
                </div>
                <p>{data[questionCounter].question}</p>
                <img src={data[questionCounter].img} alt="someImg" />
                {data.length - 1 !== questionCounter ?
                    <div className={styles.answers}>
                        {data[questionCounter].one === true ?
                            <button onClick={onClickIsTrue} name={data[questionCounter].answerOne}>
                                {data[questionCounter].answerOne}
                            </button>
                            :
                            <button onClick={onClickIsFalse} name={data[questionCounter].answerOne}>
                                {data[questionCounter].answerOne}
                            </button>
                        }

                        {data[questionCounter].two === true ?
                            <button onClick={onClickIsTrue} name={data[questionCounter].answerTwo}>
                                {data[questionCounter].answerTwo}
                            </button>
                            :
                            <button onClick={onClickIsFalse} name={data[questionCounter].answerTwo}>
                                {data[questionCounter].answerTwo}
                            </button>
                        }

                        {data[questionCounter].three === true ?
                            <button onClick={onClickIsTrue} name={data[questionCounter].answerThree}>
                                {data[questionCounter].answerThree}
                            </button>
                            :
                            <button onClick={onClickIsFalse} name={data[questionCounter].answerThree}>
                                {data[questionCounter].answerThree}
                            </button>
                        }

                        {data[questionCounter].four === true ?
                            <button onClick={onClickIsTrue} name={data[questionCounter].answerFour}>
                                {data[questionCounter].answerFour}
                            </button>
                            :
                            <button onClick={onClickIsFalse} name={data[questionCounter].answerFour}>
                                {data[questionCounter].answerFour}
                            </button>
                        }
                    </div>
                    :
                    <div className={styles.result}>
                        <button onClick={onClickResult}>
                            {data[questionCounter].answerOne}
                        </button>
                    </div>
                }
                <button onClick={onCLickBack}>Home</button>
            </div>
        </>
    );
};