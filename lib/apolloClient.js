// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Set up Apollo Client with environment variables for API URL and API Key
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_APPSYNC_API_URL, // Access the AppSync API URL
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_APPSYNC_API_KEY, // Access the AppSync API Key
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
