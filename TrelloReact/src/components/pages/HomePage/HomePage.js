/* eslint-disable */

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div>
            <Link to='/tasks' class={"btn btn-outline-info my-lg-3"}>See tasks</Link>
        </div>
    )
}

export default HomePage;