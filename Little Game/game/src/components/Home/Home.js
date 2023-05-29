import styles from './Home.module.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllQuestions } from '../../service/questionsService';
import { addNewUser } from '../../service/userService';

export const Home = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [questions, setQuestions] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        getAllQuestions()
            .then(questions => setQuestions(questions))
            .catch(error => console.log(error))
    }, []);

    const errorHandler = (error) => {
        setErrorMessage(error);
        setUsername('');
    };

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onClickStart = async (event) => {
        event.preventDefault();

        if (questions === null) {
            navigate('/404');
            return;
        };

        try {
            const user = await addNewUser(username);

            navigate('/quiz', {state: {
                questions: questions,
                user: user
            }});
            
        } catch (error) {
            errorHandler(error);
        }

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

    return (
        <div className={styles.home}>
            <h1>Funny Quiz</h1>
            <form>
                {errorMessage === null ?
                    <input
                        className={styles.input}
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
                    :
                    <input 
                    className={styles.errorInput}
                    type="text"
                    placeholder={errorMessage}
                    name='username'
                    autoComplete='off'
                    onChange={onUsernameChange}
                    value={username}
                    onKeyDown={onClickESC}
                    onFocus={onFocusIn}
                    onBlur={onFocusOut}
                    />
                }
                <section >
                    <button className={styles.send} onClick={onClickStart}>Lets get started</button>
                </section>
            </form>
        </div>
    );
};