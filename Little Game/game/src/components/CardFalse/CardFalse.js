import styles from './CardFalse.module.css';

export const CardFalse = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardFront}>
                <img src="/images/card-front-false.png" alt="card-front-false" className={styles.cardImg} />
            </div>
        </div>
    );
};