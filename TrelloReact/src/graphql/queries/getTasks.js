import {gql} from '@apollo/client';

export default gql`
  query getTasks {
    cards {
      id,
      title
    }
  }
`;