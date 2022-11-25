import { Box, Stack, LinearProgress } from '@mui/material';
import { DataGrid, GridValidRowModel } from '@mui/x-data-grid';

import type { TableProps } from './Table.types';

const Table = <RowType extends GridValidRowModel>({
  rows,
  columns,
  loading,
}: TableProps<RowType>) => (
  <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
      loading={loading}
      components={{
        NoRowsOverlay: () => (
          <Stack height="100%" alignItems="center" justifyContent="center">
            No repositores loaded
          </Stack>
        ),
        LoadingOverlay: LinearProgress,
      }}
    />
  </Box>
);

export default Table;
