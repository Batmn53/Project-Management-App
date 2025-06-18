import { useState, useEffect } from "react";
import styles from "../styles";
export default function LabelInput({ pass, title, data, type }) {
    const [val, setVal] = useState(data);

    useEffect(() => {
        setVal(data);
    }, [data]);

    const handleChange = () => setVal(pass.current.value);
    return (
        <div>
            <label className={styles.formLabel}>{title}</label>
            <input
                ref={pass}
                onChange={handleChange}
                type={type}
                className={styles.inputField}
                value={val}
            />
        </div>
    );
}
