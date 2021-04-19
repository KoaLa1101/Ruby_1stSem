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
            <div>
                {lists.text}
            </div>
            <Button onClick={goToPreviousPage} class={"btn btn-outline-dark my-lg-3"}>
                Go back
            </Button>
        </>
    )
}

export default TaskPage;

