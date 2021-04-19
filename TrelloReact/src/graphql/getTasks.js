import {gql} from '@apollo/client';

export default gql`
    query getTasks {
        tasks {
            id
            title
            createdAt
        }
    }
    `;