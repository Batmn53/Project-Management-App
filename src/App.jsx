import { useRef, useState, useEffect } from "react";
import styles from "./styles";
import Sidebar from "./components/Sidebar.jsx";
import AddProjectMenu from "./components/AddProjectMenu.jsx";
import EmptyProject from "./components/EmptyProject";
import ShowCurrentProject from "./components/ShowCurrentProject.jsx";
function App() {
    const [isAdding, setIsAdding] = useState(false);
    const [projects, setProjects] = useState([]); //Stores and sets projects
    const [currentProject, setCurrentProject] = useState(null); //Stores the state of whether or not the user is currently adding a project or not

    useEffect(() => {
        if (isAdding) setCurrentProject(projects[projects.length-1]);
        setIsAdding(false);
    }, [projects]);

    function handleCancel() {
        setIsAdding(false);
    }

    function handleDeleteProject(index) {
        setProjects((p) => {
            p.splice(index, 1);
            return p;
        })
        setCurrentProject(null);
    }

    function handleAdd(t, des, dt) {
        setProjects((prevProjects) => {
            return [
                ...prevProjects,
                {
                    title: t,
                    description: des,
                    date: dt,
                    tasks: [],
                    id: projects.length,
                },
            ];
        });
        console.log(projects);
    }

    function changeTasks(content, indexOfProject, indexOfTask, isAppend) {
        setProjects((p) => {
            const updatedProject = [...p];
            const updatedTasks = [...updatedProject[indexOfProject].tasks];
            if (isAppend) {
                updatedTasks.push(content);
            } else {
                updatedTasks.splice(indexOfTask, 1);
            }
            updatedProject[indexOfProject] = {
                ...updatedProject[indexOfProject],
                tasks: updatedTasks,
            };
            setCurrentProject(updatedProject[indexOfProject]);
            console.log(updatedTasks);
            return updatedProject;
        });
    }

    const handleSelectProject = (index) => setCurrentProject(projects[index]);
    const handleIsAdding = (f) => {
        setIsAdding(f);
        setCurrentProject(null);
    }

    return (
        <>
            <main className={styles.mainContainer}>
                <Sidebar
                    handleSelectProject={handleSelectProject}
                    handleIsAdding={handleIsAdding}
                    projects={projects}
                    id={currentProject!==null?currentProject.id:-1}
                />
                {currentProject === null && !isAdding ? (
                    <EmptyProject handleAdding={handleIsAdding} />
                ) : currentProject !== null && !isAdding ? (
                    <ShowCurrentProject del={handleDeleteProject} changeTasks={changeTasks} proj={currentProject} />
                ) : (
                    <AddProjectMenu handleCancel={handleCancel} handle={handleAdd} />
                )}
            </main>
        </>
    );
}

export default App;
