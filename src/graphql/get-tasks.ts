import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query {
    tasks(input: {}) {
      name
      tags
      dueDate
      pointEstimate
      position
      status
      assignee {
        id
        fullName
        avatar
      }
    }
  }
`;
