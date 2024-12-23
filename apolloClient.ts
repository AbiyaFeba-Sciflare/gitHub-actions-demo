// import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from '@apollo/client';

// const authLink = new ApolloLink((operation, forward) => {
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmIzMjJjNGIzM2U3YzMyYTY3NTNiZTYiLCJlbWFpbCI6InZpbm90aGthbm5hLnNAc2NpZmxhcmUuY29tIiwiY3JlYXRlZGF0IjoiMjAyNC0wOC0wM1QwOTozOTo1OC42MzBaIiwiaXNhY3RpdmUiOnRydWUsInByb2ZpbGVTdGF0dXMiOnRydWUsImt5Y1N0YXR1cyI6ZmFsc2UsInJlZmVycmFsIjoiNDlmZjdmIiwic3RlcCI6MiwiX192IjowLCJsYXN0TG9naW5UaW1lIjoiMjAyNC0xMi0xN1QwNToxNjoxMS41NjZaIiwicGFzc3dvcmQiOiIkMmIkMTAkWVFLTldWZC9xaDBiR3l2NW1YNXlST0Vsd1YwV2U1eXJlU0R5bExLUko4MG1ENmN0RUJuSlciLCJpc19yZWYiOiJmMWZlYzYiLCJyZWZfZnJvbSI6IjY2M2IxOWM1NDg3ZDI2NDc5OTJkNzMzZCIsInVzZXJOYW1lIjoidmlub3RoXzE4IiwiT1RQIjoiIiwiZGV2aWNlVHlwZSI6ImFuZHJvaWQiLCJmY21Ub2tlbiI6ImZnaWFYNGFKVDZxQjY4dXJ1bGRLQ3M6QVBBOTFiSFVPQXh6dzE2a1FFYkFKNVlZMkR3V2ljWjJBZHlEcGdVNVhGcFdxRzJncjcxRzFyNFZxWjlrbW8xMjdVdW1yaVg4bFFaZmJEbnhETUJUU0c3OEE5ZVZFNE9Vay1GMTNmbjFYamlSU0pqbGNwUjluWjBDWElNUGN4ZU9HRWMtbnVVdnVFZjIiLCJjcmVhdGVkQXQiOjE3MzQ2NzczNTkzNTEsImlhdCI6MTczNDY3NzM1OSwiZXhwIjoxNzM0NzYzNzU5fQ.IUeD35tDf7FAC9lCoFDJb-0rc7SiQ5yOsz_MNVlOPQU".trim(); 

//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   }));

//   return forward(operation);
// });

// const httpLink = new HttpLink({
//   uri: 'http://3.111.191.36:8000/graphql/', 
// });

// const client = new ApolloClient({
//   link: ApolloLink.from([authLink, httpLink]),
//   cache: new InMemoryCache(),
// });

// export default client;
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const authLink = new ApolloLink((operation, forward) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmIzMjJjNGIzM2U3YzMyYTY3NTNiZTYiLCJlbWFpbCI6InZpbm90aGthbm5hLnNAc2NpZmxhcmUuY29tIiwiY3JlYXRlZGF0IjoiMjAyNC0wOC0wM1QwOTozOTo1OC42MzBaIiwiaXNhY3RpdmUiOnRydWUsInByb2ZpbGVTdGF0dXMiOnRydWUsImt5Y1N0YXR1cyI6ZmFsc2UsInJlZmVycmFsIjoiNDlmZjdmIiwic3RlcCI6MiwiX192IjowLCJsYXN0TG9naW5UaW1lIjoiMjAyNC0xMi0yMFQwODo0NTowMy45ODZaIiwicGFzc3dvcmQiOiIkMmIkMTAkWVFLTldWZC9xaDBiR3l2NW1YNXlST0Vsd1YwV2U1eXJlU0R5bExLUko4MG1ENmN0RUJuSlciLCJpc19yZWYiOiJmMWZlYzYiLCJyZWZfZnJvbSI6IjY2M2IxOWM1NDg3ZDI2NDc5OTJkNzMzZCIsInVzZXJOYW1lIjoidmlub3RoXzE4IiwiT1RQIjoiIiwiZGV2aWNlVHlwZSI6ImFuZHJvaWQiLCJmY21Ub2tlbiI6ImZnaWFYNGFKVDZxQjY4dXJ1bGRLQ3M6QVBBOTFiSFVPQXh6dzE2a1FFYkFKNVlZMkR3V2ljWjJBZHlEcGdVNVhGcFdxRzJncjcxRzFyNFZxWjlrbW8xMjdVdW1yaVg4bFFaZmJEbnhETUJUU0c3OEE5ZVZFNE9Vay1GMTNmbjFYamlSU0pqbGNwUjluWjBDWElNUGN4ZU9HRWMtbnVVdnVFZjIiLCJjcmVhdGVkQXQiOjE3MzQ5MjgyNDcxMzYsImlhdCI6MTczNDkyODI0NywiZXhwIjoxNzM1MDE0NjQ3fQ.7d7vPpQXLItNaYQRlXAyLurIFEBnXx8t79K1rKXfp14".trim();
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  }));
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: 'http://3.111.191.36:8000/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError.message}`);
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
