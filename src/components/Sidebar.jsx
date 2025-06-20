import styles from "../styles";
export default function Sidebar({
    handleSelectProject,
    handleIsAdding,
    projects,
    id,
}) {
    return (
        <div className={styles.sidebar}>
            <h1 className={styles.sidebarHeading}>Your Projects</h1>
            <button
                className={styles.addButton}
                onClick={() => handleIsAdding(true)}
            >
                + Add Project
            </button>
            {/* <scroll></scroll> */}
            <div>
                <ol className={styles.sidebarList}>
                    {projects.map((proj, index) => (
                        <li key={index}>
                            <button
                                onClick={() => {
                                    console.log(
                                        `Button ${index + 1} has been clicked`
                                    );
                                    handleSelectProject(index);
                                }}
                                className={index===id?styles.sidebarSelectedButton:styles.sidebarSelectableButton}
                            >
                                {proj.title}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
