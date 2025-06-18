import styles from "../styles";
export default function Sidebar({ handleSelectProject, handleIsAdding, projects }) {
    return (
        <div className={styles.sidebar}>
            <h1 className={styles.sidebarHeading}>Your Projects</h1>
            <button className={styles.addButton} onClick={handleIsAdding}>
                + Add Project
            </button>
            {/* <scroll></scroll> */}
            <div>
                <ol>
                    {projects.map((proj, index) => (
                        <li key={index}>
                            <button onClick={() => handleSelectProject(index)} className={styles.sidebarList}>
                                {proj.title}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
