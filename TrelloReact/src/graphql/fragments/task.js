/* eslint-disable */

import { gql } from '@apollo/client';

export default gql`
    fragment TaskFragment on Card {
        id
        title
    }
`