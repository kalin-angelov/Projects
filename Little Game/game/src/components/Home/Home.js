import styles from './Home.module.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllQuestions } from '../service/questionsService';

export const Home = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [questions, setQuestions] = useState();

    useEffect(() => {
        getAllQuestions()
            .then(questions => setQuestions(questions))
            .catch(error => console.log(error))
    },[]);

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onClickStart = async (event) => {
        event.preventDefault();

        if (username !== '') {
            navigate('/quiz', {state: {
                username: username, 
                questions: questions
            }});
        };
    };

    const onClickESC = (event) => {
        if (event.keyCode === 27) {
            setUsername('');
        }
    };

    const onFocusIn = (event) => {
        event.target.placeholder = "";
    };

    const onFocusOut = (event) => {
        event.target.placeholder = "Enter you'r name here....";
    };

    return(
        <div className={styles.home}>
            <form className={styles.form}>
                <input 
                    type="text" 
                    placeholder="Enter you'r name here...." 
                    name='username' 
                    autoComplete='off'
                    onChange={onUsernameChange} 
                    value={username}
                    onKeyDown={onClickESC}
                    onFocus={onFocusIn}
                    onBlur={onFocusOut}
                />
                <section >
                    <button className={styles.send} onClick={onClickStart}>Lets get started</button>
                </section>
            </form>
        </div>
    );
};