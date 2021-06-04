import { gql } from '@apollo/client';
import task from '../fragments/task';

export default gql`
  mutation updateCard($input: UpdateCardInput!) {
    updateCard(input: $input) {
      ...TaskFragment
    }
  }
  ${task}
`;