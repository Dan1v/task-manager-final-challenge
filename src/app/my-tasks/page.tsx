'use client';

import { useQuery } from '@apollo/client';
import React from 'react';

import { CardViewContainer } from '@/containers/card-view-container/card-view-container';
import { ListViewContainer } from '@/containers/list-view-container/list-view-container';
import { GetTasksQuery, GetTasksQueryVariables } from '@/graphql/generated/graphql';
import { GET_TASKS_BY_ASSIGNEE } from '@/graphql/get-tasks-by-assigne';
import { useDisplayModeStore } from '@/stores/use-display-mode-store';

export default function MyTasks() {
  const { displayMode } = useDisplayModeStore();

  const assigneeId = '95b485bf-f49c-44d7-bf3b-5ffeb63693f2';

  const { data, loading, error } = useQuery<GetTasksQuery, GetTasksQueryVariables>(
    GET_TASKS_BY_ASSIGNEE,
    {
      variables: { assigneeId },
    },
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {displayMode === 'list' ? (
        <ListViewContainer tasks={data!} />
      ) : (
        <CardViewContainer tasks={data!} />
      )}
    </div>
  );
}
