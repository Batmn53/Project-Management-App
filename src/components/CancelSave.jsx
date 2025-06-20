import styles from "../styles";
export default function CancelSave({handleS, handleCancel}) {
    return (
        <div className={styles.menuBar}>
                <button onClick={handleCancel} className={styles.inlineTextButton}>Cancel</button>
                <button onClick={handleS} className={styles.ctaButton}>Save</button>
        </div>
    );
}
