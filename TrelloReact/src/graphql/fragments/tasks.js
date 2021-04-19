import {gql} from "@apollo/client/core";

export default gql `
    fragment TaskFragment on Task {
        id
        title
        createdAt
    }
`