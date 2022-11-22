import { gql } from '@apollo/client';

export const GET_REPOSITORIES_BY_QUERY = gql`
  query GetRepositoriesByQuery($searchTerm: String!) {
    search(query: $searchTerm, type: REPOSITORY, first: 100) {
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            url
            forkCount
            stargazerCount
          }
        }
      }
    }
  }
`;
