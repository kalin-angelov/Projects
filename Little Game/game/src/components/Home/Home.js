import styles from './Home.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onClickStart = (event) => {
        event.preventDefault();
        if (username !== '') {
            navigate('/quiz', {state: {username: username}});
        };
    };

    return(
        <div className={styles.home}>
            <form className={styles.form}>
                <input type="text" placeholder="Enter you'r name here...." name='username' onChange={onUsernameChange} value={username}/>

                <article >
                    <button className={styles.send} onClick={onClickStart}>Lets get started</button>
                </article>
            </form>
        </div>
    );
};