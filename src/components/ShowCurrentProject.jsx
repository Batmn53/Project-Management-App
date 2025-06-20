import styles from "../styles";
import Tasks from "./Tasks";
export default function ShowCurrentProject({ del, proj, changeTasks }) {
    return (
        <div className={styles.formWrapper}>
            <div className={styles.header}>
                <div className={styles.taskListItem}>
                    <div>
                        <h2 className={styles.pageTitle}>{proj.title}</h2>
                        <p className={styles.paragraphSubtle}>{proj.date}</p>
                    </div>
                    <div>
                        <button onClick={() => del(proj.id)} className={styles.deleteButton}>Delete</button>
                    </div>
                </div>
                <p className={styles.paragraphDark}>{proj.description}</p>
            </div>
            <Tasks index={proj.id} changeTasks={changeTasks} tasks={proj.tasks}/>
        </div>
    );
}
