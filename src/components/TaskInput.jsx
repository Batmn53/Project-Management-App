import { useRef, useState } from "react";
import styles from "../styles";
export default function TaskInput({ index, changeTasks }) {
    const r = useRef();
    function handleChange() {
        if (r.current.value !== "") {
            changeTasks(r.current.value, index, null, true);
            r.current.value = "";
        }
    }
    return (
        <>
            <h2 className={styles.sectionTitleLarge}>Tasks</h2>
            <div className={styles.inputRow}>
                <input ref={r} type="text" onKeyDown={(event) => {
                    if (event.key==="Enter") handleChange();
                }} className={styles.shortInputField} />
                <button
                    onClick={handleChange}
                    className={styles.plainTextButton}
                >
                    Add Task
                </button>
            </div>
        </>
    );
}
