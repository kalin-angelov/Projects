import styles from "./404.module.css";

import { useNavigate } from "react-router-dom";

export const Page404 = () => {
    const navigate = useNavigate();

    const onClickGoBack = () => {
        navigate('/');
    };

    return (
        <div className={styles.page404}>
            <h1>Oops!</h1>
            <p>I think we have something broken</p>
            <p>Can we try again?</p>
            <button onClick={onClickGoBack}>Go Back</button>
        </div>
    )
};