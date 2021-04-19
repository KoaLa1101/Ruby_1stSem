import ToDoList from '../../molecules/ToDoList';
import useTask from "../../../hooks/useTask";


const TasksWithGraphql = () => {
    const {tasks, loading} = useTask();

    return (
        <>
            <ToDoList list={tasks}/>
        </>
    );
};

export default TasksWithGraphql;
