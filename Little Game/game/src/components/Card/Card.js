import styles from './Card.module.css';

export const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardFront}>
                <img src="/images/card-back.png" alt="card-back" className={styles.cardImg} />
            </div>
        </div>
    );
};