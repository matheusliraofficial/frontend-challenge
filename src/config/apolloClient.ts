import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({ uri: import.meta.env.VITE_GITHUB_API });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = import.meta.env.VITE_GITHUB_API_TOKEN;

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`,
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});