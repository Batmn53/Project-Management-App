import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
export default function Tasks({ index, tasks, changeTasks }) {
    return (
        <div>
            <TaskInput index={index} changeTasks={changeTasks}/>
            <TaskList index={index} changeTasks={changeTasks} tasks={tasks}/>
        </div>
    );
}