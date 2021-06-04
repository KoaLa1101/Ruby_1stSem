/* eslint-disable */

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div>
            <div>
                <Link to='/tasks' class={"btn btn-outline-info my-lg-3"}>See tasks</Link>
            </div>
            <div>
                <Link to='/gq' class={"btn btn-outline-info my-lg-3"}>Tasks from graphQl</Link>
            </div>
        </div>
    )
}

export default HomePage;