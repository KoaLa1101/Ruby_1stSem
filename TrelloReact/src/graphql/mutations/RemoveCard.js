
/* eslint-disable */

import { gql } from '@apollo/client';
import task from '../fragments/task';

export default gql`
  mutation removeCard($input: DestroyCardInput!) {
    destroyCard(input: $input) {
      ...TaskFragment
    }
  }
  ${task}
`;