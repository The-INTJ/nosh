import { useState } from "react";
import styles from "@styles/components/Feedback.module.scss";

const Feedback = () => {
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [feedback, setFeedback] = useState('');
    const [subject, setSubjectInfo] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const message = {
            name,
            contactInfo,
            subject,
            feedback
        };

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });

        // Reset the form
        setName('');
        setContactInfo('');
        setSubjectInfo('');
        setFeedback('');

        closeModal();
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
            <button type="button" onClick={() => openModal()}>Feedback</button>
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
                        Subject:
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubjectInfo(e.target.value)}
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
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
                <button type="button" onClick={() => closeModal()} className={styles.cancelButton}>Cancel</button>
            </dialog>
        </div>
    );
};

export default Feedback;
