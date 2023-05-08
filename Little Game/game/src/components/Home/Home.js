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

                <article >
                    <button className={styles.send} onClick={onClickStart}>Lets get started</button>
                </article>
            </form>
        </div>
    );
};