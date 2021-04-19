/* eslint-disable */

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory, useParams} from "react-router";
import Button from '../../atoms/Button';
import list from "../../../resoucers/list";


const TaskPage = () => {
    const {id: queryId} = useParams();
    const lists = list.find(({id}) => id === +queryId);
    const history = useHistory();

    const goToPreviousPage = () => {
        history.goBack();
    }

    return (
        <>
            <div class={"text-center"}>
                <p> {lists.text} </p>
            </div>
            <a onClick={goToPreviousPage} class={"btn btn-outline-light my-lg-3"}>
                Go back
            </a>
        </>
    )
}

export default TaskPage;

