import { gql } from '@apollo/client';

export interface Node {
  node: {
    id: string;
    name: string;
    forkCount: number;
    owner: {
      login: string;
      __typename: string;
    };
    stargazerCount: number;
    url: string;
    __typename: string;
  };
}
export interface RepositoriesQuery {
  search: {
    edges: Node[];
  };
}

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
