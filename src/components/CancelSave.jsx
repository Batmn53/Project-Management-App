import styles from "../styles";
export default function CancelSave() {
    return (
        <div className={styles.menuBar}>
                <button className={styles.inlineTextButton}>Cancel</button>
                <button className={styles.ctaButton}>Save</button>
        </div>
    );
}
