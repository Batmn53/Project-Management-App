import { useEffect, useState } from "react";
import styles from "../styles";
import LabelInput from "./LabelInput";
import CancelSave from "./CancelSave";
export default function AddProjectMenu({ handle, handleCancel }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [canSave, setCanSave] = useState(null);

    useEffect(() => {
        if (title !== "" && description !== "" && date !== "") setCanSave(true);
    }, [title, description, date]);

    function setDefault() {
        setTitle("");
        setDescription("");
        setDate("");
    }

    function handleSave() {
        if (canSave) {
            handle(
                title
                    .split(" ")
                    .map(
                        (s) =>
                            s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
                    )
                    .join(" "),
                description,
                date
            );
            setDefault();
        } else {
            setCanSave(false);
        }
    }

    function cancelHandler() {
        handleCancel();
        setDefault();
    }

    return (
        <div className={styles.formWrapper}>
            <CancelSave handleCancel={cancelHandler} handleS={handleSave} />
            <LabelInput
                value={title}
                setValue={setTitle}
                title="Title"
                type="text"
            />
            <LabelInput
                value={description}
                setValue={setDescription}
                title="Description"
                type="text"
            />
            <LabelInput
                value={date}
                setValue={setDate}
                title="Date"
                type="date"
            />
            {canSave === false && (
                <p className={styles.errorMessage}>Please fill all fields</p>
            )}
        </div>
    );
}
