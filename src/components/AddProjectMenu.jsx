import { useRef } from "react";
import styles from "../styles";
import LabelInput from "./LabelInput";
import CancelSave from "./CancelSave";
export default function AddProjectMenu({ project, handle }) {

    const titleRef= useRef(), descriptionRef= useRef(), dateRef= useRef();

    function handleSave() {
        handle(titleRef.current.value, descriptionRef.current.value, dateRef.current.value, project.id);
    }

    return (
        <div className={styles.formWrapper}>
            <CancelSave handleS={handleSave}/>
            <LabelInput pass={titleRef} title="Title" data={project.title} type="text"/>
            <LabelInput pass={descriptionRef} title="Description" data={project.description} type="text"/>
            <LabelInput pass={dateRef} title="Date" data={project.date} type="date"/>
        </div>
    );
}
