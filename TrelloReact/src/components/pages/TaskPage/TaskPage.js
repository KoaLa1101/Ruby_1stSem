/* eslint-disable */

import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory, useParams} from "react-router";
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
            <div class={"d-flex flex-column text-center"}>
                <div>
                    <p> {lists.title} </p>
                </div>
                <a onClick={goToPreviousPage} class={"btn btn-outline-light my-lg-3"}>
                    Go back
                </a>
            </div>
        </>
    )
}

export default TaskPage;

