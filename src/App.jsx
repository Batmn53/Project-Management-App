import { useState } from "react";
import styles from "./styles";
import Sidebar from "./components/Sidebar.jsx";
import AddProjectMenu from "./components/AddProjectMenu.jsx";
import EmptyProject from "./components/EmptyProject";
function App() {

    const [projects, setProjects] = useState([]);//Stores and sets projects
    const [currentProject, setCurrentProject] = useState(null);//Stores the state of whether or not the user is currently adding a projet or not

    const handleAdd = () => {
      const newProject = {title: "default", description: "", date: ""};
      setProjects(prev => [...prev, newProject]);
      setCurrentProject(newProject);
      console.log(projects);
    }

    return (
        <>
            <main className={styles.mainContainer}>
                <Sidebar handleIsAdding={handleAdd} projects={projects}/>
                {currentProject === null ? (
                    <EmptyProject handleAdding={handleAdd}/>
                ) : (
                    <AddProjectMenu project={currentProject}/>
                )}
            </main>
        </>
    );
}

export default App;
