import { useRef, useState } from "react";
import styles from "../styles";
export default function LabelInput({ title, data, type }) {
    const [val, setVal] = useState(data);
    const ref = useRef();
    const handleChange = () => setVal(ref.current.value);
    return (
        <div>
            <label className={styles.formLabel}>{title}</label>
            <input
                ref={ref}
                onChange={handleChange}
                type={type}
                className={styles.inputField}
                value={val}
            />
        </div>
    );
}
