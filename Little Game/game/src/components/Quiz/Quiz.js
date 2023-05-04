import styles from '../Quiz/Quiz.module.css';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import data from '../../data/data.json';
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

    const questionAndPointControl = (questions) => {
        if (questions.length - 1 === questionCounter) {
            setQuestionCounter(0);
            setPoints(0);
        } else {
            setQuestionCounter(questionCounter => ++questionCounter);
        }
    };

    const onClickIsTrue = () => {
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

    const onClickIsFalse = () => {
        setShowCard(true);

        setTimeout(() => {
            setShowCard(false);
            setIsFalseCard(true);
        },2000);

        setTimeout(() => {
            setIsFalseCard(false);
            questionAndPointControl(data);
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
                    <h1>Funny Quiz</h1>
                    <h2>Welcome: {location.state.username}</h2>
                    <p>{points}/{data.length}0</p>
                    {showPlusPoint && <p>+10</p>}
                </div>
                <p>{data[questionCounter].question}</p>
                <img src={data[questionCounter].img} alt="someAnimal" />
                <div className={styles.answers}>
                    {data[questionCounter].one === true ?
                        <button onClick={onClickIsTrue}>{data[questionCounter].answerOne}</button>
                        :
                        <button onClick={onClickIsFalse}>{data[questionCounter].answerOne}</button>
                    }

                    {data[questionCounter].two === true ?
                        <button onClick={onClickIsTrue}>{data[questionCounter].answerTwo}</button>
                        :
                        <button onClick={onClickIsFalse}>{data[questionCounter].answerTwo}</button>
                    }

                    {data[questionCounter].three === true ?
                        <button onClick={onClickIsTrue}>{data[questionCounter].answerThree}</button>
                        :
                        <button onClick={onClickIsFalse}>{data[questionCounter].answerThree}</button>
                    }

                    {data[questionCounter].four === true ?
                        <button onClick={onClickIsTrue}>{data[questionCounter].answerFour}</button>
                        :
                        <button onClick={onClickIsFalse}>{data[questionCounter].answerFour}</button>
                    }
                </div>
                <button onClick={onCLickBack}>Home</button>
            </div>
        </>
    );
};