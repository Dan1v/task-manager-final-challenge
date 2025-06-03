'use client';

import { useQuery } from '@apollo/client';

import { CardViewContainer } from '@/containers/card-view-container/card-view-container';
import { ListViewContainer } from '@/containers/list-view-container/list-view-container';
import { GetTasksQuery, GetTasksQueryVariables } from '@/graphql/generated/graphql';
import { GET_TASKS } from '@/graphql/get-tasks';
import { useDisplayModeStore } from '@/stores/use-display-mode-store';

export default function Home() {
  const { displayMode } = useDisplayModeStore();

  const { data, loading, error } = useQuery<GetTasksQuery, GetTasksQueryVariables>(GET_TASKS, {
    variables: {},
  });

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
