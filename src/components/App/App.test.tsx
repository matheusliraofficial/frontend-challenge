import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GET_REPOSITORIES_BY_QUERY } from '../../graphql/queries/getRepositoriesByQuery';
import App from './App';

describe('App', () => {
  const elContainer = 'app';

  const setup = (mocks?: MockedResponse[]) => {
    const utils = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    const app = utils.getByTestId(elContainer);

    return {
      app,
      ...utils,
    };
  };

  it(`should render component #${elContainer}`, () => {
    const { app } = setup();

    expect(app).toBeTruthy();
  });

  it(`should render no results when search input is empty`, () => {
    const { getByText } = setup();

    expect(getByText('No repositores loaded')).toBeTruthy();
  });

  it(`should render results when a search is made`, async () => {
    const mocks = [
      {
        request: {
          query: GET_REPOSITORIES_BY_QUERY,
          variables: {
            searchTerm: 'test',
          },
        },
        result: {
          data: {
            search: {
              edges: [
                {
                  node: {
                    id: 'testresult',
                    name: 'testresult',
                    forkCount: 10,
                    owner: {
                      login: 'testuser',
                      __typename: 'testuser',
                    },
                    stargazerCount: 10,
                    url: 'http://google.com',
                    __typename: 'testrepo',
                  },
                },
              ],
            },
          },
        },
      },
    ];

    const { getByText, app } = setup(mocks);

    const searchBar = app.querySelector('input') as HTMLInputElement;

    fireEvent.change(searchBar, { target: { value: 'test' } });

    expect(waitFor(() => getByText('testresult'))).toBeTruthy();
  });
});
