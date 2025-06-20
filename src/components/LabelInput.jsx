import { useState, useEffect } from "react";
import styles from "../styles";
export default function LabelInput({ value, setValue, title, type }) {
    if(value==="" && type==="date") {
        const today = new Date().toISOString().split("T")[0];
        setValue(today);
    }
    return (
        <div>
            <label className={styles.formLabel}>{title}</label>
            <input
                onChange={(e) => setValue(e.target.value)}
                type={type}
                className={styles.inputField}
                value={value}
            />
        </div>
    );
}
