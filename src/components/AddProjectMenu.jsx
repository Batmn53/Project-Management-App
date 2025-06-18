import styles from "../styles";
import LabelInput from "./LabelInput";
import CancelSave from "./CancelSave";
export default function AddProjectMenu({ project }) {
    return (
        <div className={styles.formWrapper}>
            <CancelSave/>
            <LabelInput title="Title" data={project.title} type="text"/>
            <LabelInput title="Description" data={project.description} type="text"/>
            <LabelInput title="Date" data={project.date} type="date"/>
        </div>
    );
}
