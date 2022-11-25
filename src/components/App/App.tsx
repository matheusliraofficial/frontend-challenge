import { ChangeEvent, useState, useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import {
  GET_REPOSITORIES_BY_QUERY,
  RepositoriesQuery,
} from '../../graphql/queries/getRepositoriesByQuery';
import { useDebounce } from '../../hooks/useDebounce';
import Search from '../Search';
import Table from '../Table';
import { columns } from './App.constants';
import type { Results } from './App.types';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Results>([]);
  const debouncedSearchTerm = useDebounce(searchTerm);

  const [searchRepositories, { loading, error, data }] =
    useLazyQuery<RepositoriesQuery>(GET_REPOSITORIES_BY_QUERY, {
      variables: { searchTerm: debouncedSearchTerm },
    });

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setSearchResults([]);
      return;
    }
    // function for executing query doesn't return a promise
    searchRepositories();
    if (data) {
      setSearchResults(
        data.search.edges.map(({ node }) => ({
          ...node,
          owner: node.owner.login,
        })),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, data]);

  const parsedColumns: GridColDef[] = columns.map((column) =>
    column.field === 'name'
      ? {
          ...column,
          renderCell: ({ row }) => (
            <a href={row.url} target="_blank" rel="noreferrer">
              {row.name}
            </a>
          ),
        }
      : column,
  );

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target.value);
  };

  if (error) return <>`Error: ${error.message}`</>;

  return (
    <Box sx={{ maxWidth: '1024px', margin: 'auto' }} data-testid="app">
      <Search onChange={handleChange} value={searchTerm} />
      <Table rows={searchResults} columns={parsedColumns} loading={loading} />
    </Box>
  );
};

export default App;
