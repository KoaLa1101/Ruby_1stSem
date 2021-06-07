import useTask from "../../../hooks/useTask";
import React, { useEffect, useState } from 'react';
import ToDoForm from "../../molecules/ToDoForm";
import useCreateTask from "../../../hooks/useCreateTask";
import useRemoveTask from "../../../hooks/useRemoveTask";
import ToDoListGq from "../../molecules/ToDoListGq/ToDoListGq";


const TasksWithGraphql = () => {
    const {tasks, loading} = useTask();
    const {createTask} = useCreateTask();
    const {removeTask} = useRemoveTask();
    return (
        <>
            <ToDoForm onSubmit={createTask}/>
            <ToDoListGq list={tasks} remove={removeTask} />
        </>
    );
};

export default TasksWithGraphql;
