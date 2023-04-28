
import { useState } from 'react';

import { CardTrue } from '../CardTrue/CardTrue';
import { CardFalse } from '../CardFalse/CardFalse';

export const Test = () => {
    const [isTrueCard, setIsTrueCard] = useState(false);
    const [isFalseCard, setIsFalseCard] = useState(false);
    const onClickIsTrue = () => {
        setIsTrueCard(true);

        setTimeout(() => {
            setIsTrueCard(false);
        },4000);
    }

    const onClickIsFalse = () => {
        setIsFalseCard(true);

        setTimeout(() => {
            setIsFalseCard(false);
        },4000);
    }

    return(
        <div>
            <h1>Hello Test</h1>
            <button onClick={onClickIsTrue}>True</button>
            <button onClick={onClickIsFalse}>False</button>

            {isTrueCard && <CardTrue />}
            {isFalseCard && <CardFalse />}
        </div>
    )
}