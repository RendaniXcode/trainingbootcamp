import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT, // AppSync GraphQL endpoint
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_APPSYNC_API_KEY, // Your AppSync API Key
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
