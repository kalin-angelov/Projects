import styles from "./CreateQuestion.module.css";

export const CreateQuestion = () => {
    return (
        <div className={styles.create}>
            <h1><i class="fa-solid fa-asterisk"></i> Create Your Question <i class="fa-solid fa-asterisk"></i></h1>
            <form className={styles.form}>
                <label htmlFor="question">Question</label>
                <input type="text" name="question"/>

                <label htmlFor="image">Image</label>
                <input type="text" name="image"/>

                <label htmlFor="answerOne">AnswerA</label>
                <input type="text" placeholder="" name="answerOne" />

                <label htmlFor="answerTwo">AnswerB</label>
                <input type="text" name="answerTwo" />

                <label htmlFor="answerThree">AnswerC</label>
                <input type="text" name="answerThree" />

                <label htmlFor="answerFour">AnswerD</label>
                <input type="text" name="answerFour" />

                <section>
                    <button className={styles.saveBtn}>Save</button>
                </section>
            </form>
        </div>

    )
}