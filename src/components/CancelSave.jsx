import styles from "../styles";
export default function CancelSave({handleS}) {
    return (
        <div className={styles.menuBar}>
                <button className={styles.inlineTextButton}>Cancel</button>
                <button onClick={handleS} className={styles.ctaButton}>Save</button>
        </div>
    );
}
