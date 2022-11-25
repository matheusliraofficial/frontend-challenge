import { GridColDef, GridRowsProp, GridValidRowModel } from '@mui/x-data-grid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TableProps<R extends GridValidRowModel = any> {
  /**
   * Set the rows of the Table.
   */
  rows: GridRowsProp<R>;

  /**
   * Set the columns of the Table.
   */
  columns: GridColDef[];

  /**
   * Controls if is on loading state or not.
   */
  loading: boolean;
}
