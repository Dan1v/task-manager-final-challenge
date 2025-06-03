import { gql } from '@apollo/client';

export const GET_TASKS_BY_ASSIGNEE = gql`
  query Tasks($assigneeId: String) {
    tasks(input: { assigneeId: $assigneeId }) {
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
