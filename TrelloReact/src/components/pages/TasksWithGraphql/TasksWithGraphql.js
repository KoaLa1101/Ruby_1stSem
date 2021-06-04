import useTask from "../../../hooks/useTask";
import React, { useEffect, useState } from 'react';
import ToDoList from '../../molecules/ToDoList'
import ToDoForm from "../../molecules/ToDoForm";
import useCreateTask from "../../../hooks/useCreateTask";
import useRemoveTask from "../../../hooks/useRemoveTask";


const TasksWithGraphql = () => {
    const {tasks, loading} = useTask();
    const {createTask} = useCreateTask();
    const {removeTask} = useRemoveTask();
    return (
        <>
            <ToDoForm onSubmit={createTask}/>
            <ToDoList list={tasks} remove={removeTask} />
        </>
    );
};

export default TasksWithGraphql;
