import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'https://syn-api-prod.herokuapp.com/graphql': {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNmU1OGNlMzMtMjdkMi00OWM2LTg4ZmMtNmMxYTEzZjZlNGUwIiwicHJvamVjdElkIjoiZDgzNzA3ZWUtYjkyOS00M2I4LTgzZjEtZjliMTYyOGEzZGIzIiwiZnVsbE5hbWUiOiJEYW5pZWwgVmVsYXJkZSIsImVtYWlsIjoiZGFuaWVsdmVsYXJkZUByYXZuLmNvIiwiaWF0IjoxNzQ4NDQ3NDQzfQ.dFkLFr4dUdIbXfwgzP0BF9QSjq48W7toxvUFfaDhbDk`,
        },
      },
    },
  ],
  documents: 'src/graphql/**/*.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
  config: {
    withHooks: true,
  },
};

export default config;
