import { useState } from "react";
import styles from "@styles/components/Feedback.module.scss";

const Feedback = () => {
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO: Replace <HANDLE_SUBMIT> with your actual backend handling function
        //await <HANDLE_SUBMIT>({ name, contactInfo, feedback });

        // Reset the form
        setName('');
        setContactInfo('');
        setFeedback('');
    };

    const openModal = () => {
        let element: HTMLElement = document.getElementById(styles.dialogSelect)!;
        console.log(element);
        (element as HTMLDialogElement).showModal();
    }

    const closeModal = () => {
        let element: HTMLElement = document.getElementById(styles.dialogSelect)!;
        (element as HTMLDialogElement).close();
    }

    return (
        <div className={styles.feedbackButton}>
            <button onClick={() => openModal()}>Feedback</button>
            <dialog className={styles.feedbackDialogue} id={styles.dialogSelect}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Contact Info:
                        <input
                            type="text"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Feedback:
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                            className={styles.textarea}
                        />
                    </label>
                    <input type="submit" value="Submit" className={styles.submitButton} />
                </form>
                <button onClick={() => closeModal()} className={styles.cancelButton}>Cancel</button>
            </dialog>
        </div>
    );
};

export default Feedback;
