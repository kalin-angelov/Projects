import styles from './CardFalse.module.css';

export const CardFalse = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardFront}>
                <img src="/images/card-front-false.png" alt="card-front-false" />
            </div>
            <div className={styles.cardBack}>
                <img src="/images/card-back.png" alt="card-Back" />
            </div>
        </div>
    )
}
