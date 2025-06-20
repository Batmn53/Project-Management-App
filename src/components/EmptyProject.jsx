import styles from "../styles";
import image from "../assets/emptyProjectImage.png";
export default function EmptyProject({ handleAdding }) {
    return (
        <>
            <div className={styles.emptyStateContainer}>
                <img className={styles.emptyStateIcon} src={image} alt="Empty Project Image" />
                <h2 className={styles.emptyStateTitle}>No project selected</h2>
                <p className={styles.emptyStateDescription}>Select a project or add a new one</p>
                <button className={styles.addButton} onClick={() => handleAdding(true)}>Create new project</button>
            </div>
        </>
    );
}
