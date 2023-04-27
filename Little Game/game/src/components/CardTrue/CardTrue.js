import styles from './CardTrue.module.css';

export const CardTrue = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardFront}>
                <img src="/images/card-front-true.png" alt="card-front-true" />
            </div>
            <div className={styles.cardBack}>
                <img src="/images/card-back.png" alt="card-Back" />
            </div>
        </div>
    );
};
