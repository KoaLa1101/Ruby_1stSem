/* eslint-disable */

import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory, useParams} from "react-router";
import useTask from "../../../hooks/useTask";


const TaskPageGq = () => {
    const {id: queryId} = useParams();
    const task = getValue(useTask().tasks, queryId);
    const todo = task.todos;
    const history = useHistory();

    const goToPreviousPage = () => {
        history.goBack();
    }

    return (
        <>
            <div class={"d-flex flex-column text-center"}>
                <div>
                    <p> {task.title} </p>
                    <div id="todos">
                        {todo.map((todoItem, i) => (
                            <>
                            <div className={"d-flex my-lg-3 m-lg-3"}>
                                <p>{todoItem.title} : {todoItem.description}</p>
                            </div>
                            </>
                        ))}
                    </div>
                </div>
                <a onClick={goToPreviousPage} class={"btn btn-outline-light my-lg-3"}>
                    Go back
                </a>
            </div>
        </>
    )
}

function getValue(array, search) {
    let i = array.length;
    while (i--) {
        if (array[i].id === search) {
            return array[i];
        }
    }
}


export default TaskPageGq;

