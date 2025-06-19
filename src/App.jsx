import { useRef, useState, useEffect } from "react";
import styles from "./styles";
import Sidebar from "./components/Sidebar.jsx";
import AddProjectMenu from "./components/AddProjectMenu.jsx";
import EmptyProject from "./components/EmptyProject";
function App() {
    const hasProjectBeenAdded = useRef(false);
    const [projects, setProjects] = useState([]); //Stores and sets projects
    const [currentProject, setCurrentProject] = useState(null); //Stores the state of whether or not the user is currently adding a project or not

    useEffect(() => {
        if (projects.length > 0 && hasProjectBeenAdded.current) {
            setCurrentProject(projects[projects.length - 1]); // last added project
            hasProjectBeenAdded.current = false;
            console.log(hasProjectBeenAdded);
        } else {
            setCurrentProject(null);
        }
    }, [projects]);

    const handleAdd = () => {
        setProjects((prevProjects) => {
            hasProjectBeenAdded.current = true;
            return [
                ...prevProjects,
                {
                    title: `default ${prevProjects.length}`,
                    description: "",
                    date: "",
                    id: prevProjects.length,
                },
            ];
        });
        console.log(hasProjectBeenAdded);
    };

    function handleSelectProject(index) {
        setCurrentProject(projects[index]);
    }

    function handleSaveSelectedProject(t, des, dt, index) {
        setProjects((prev) => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                title: t,
                description: des,
                date: dt,
            };
            return updated;
        });
    }

    return (
        <>
            <main className={styles.mainContainer}>
                <Sidebar
                    handleSelectProject={handleSelectProject}
                    handleIsAdding={handleAdd}
                    projects={projects}
                />
                {currentProject === null ? (
                    <EmptyProject handleAdding={handleAdd} />
                ) : (
                    <AddProjectMenu
                        handle={handleSaveSelectedProject}
                        project={currentProject}
                    />
                )}
            </main>
        </>
    );
}

export default App;
