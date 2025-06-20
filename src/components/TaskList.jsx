import { useEffect, useState } from "react";
import styles from "../styles";
export default function TaskList({ index, tasks, changeTasks }) {
    const [visibleTasks, setVisibleTasks] = useState([]);
    useEffect(() => {
        setVisibleTasks(tasks);
    }, [tasks]); 
    return (
        <>
            {visibleTasks.length > 0 && (
                <ol className={styles.taskList}>
                    {visibleTasks.map((task, i) => {
                        return (
                            <li key={i} className={styles.taskListItem}>
                                <p>{task}</p>
                                <button onClick={() => changeTasks("", index, i, false)} className={styles.deleteButton}>
                                    Clear
                                </button>
                            </li>
                        );
                    })}
                </ol>
            )}
        </>
    );
}
