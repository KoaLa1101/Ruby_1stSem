/* eslint-disable */

import { gql } from '@apollo/client';
import task from '../fragments/task';

export default gql`
  mutation createCard($input: CreateCardInput!) {
    createCard(input: $input) {
      ...TaskFragment
    }
  }
  ${task}
`;