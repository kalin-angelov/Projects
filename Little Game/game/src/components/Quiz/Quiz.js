import styles from '../Quiz/Quiz.module.css';

import { useState } from 'react';

import { CardTrue } from '../CardTrue/CardTrue';
import { CardFalse } from '../CardFalse/CardFalse';

import data from '../../data/data.json';

export const Quiz = () => {
    const [isTrueCard, setIsTrueCard] = useState(false);
    const [isFalseCard, setIsFalseCard] = useState(false);
    const onClickIsTrue = () => {
        setIsTrueCard(true);

        setTimeout(() => {
            setIsTrueCard(false);
        }, 4000);
    }

    const onClickIsFalse = () => {
        setIsFalseCard(true);

        setTimeout(() => {
            setIsFalseCard(false);
        }, 4000);
    }

    return (
        <div className={styles.quiz}>
            <h1>Funny Quiz</h1>
            <p>{data[0].question}</p>
            <img src={data[0].img} alt="someAnimal" />
            <div className={styles.answers}>
                <button onClick={onClickIsTrue}>{data[0].answerOne}</button>
                <button onClick={onClickIsFalse}>{data[0].answerTwo}</button>
                <button onClick={onClickIsFalse}>{data[0].answerThree}</button>
                <button onClick={onClickIsFalse}>{data[0].answerFour}</button>
            </div>


            {isTrueCard && <CardTrue />}
            {isFalseCard && <CardFalse />}
        </div>
    )
}