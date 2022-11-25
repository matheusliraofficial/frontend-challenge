import { GridColDef, GridRowsProp, GridValidRowModel } from '@mui/x-data-grid';

export interface TableProps<RowType extends GridValidRowModel> {
  /**
   * Set the rows of the Table.
   */
  rows: GridRowsProp<RowType>;

  /**
   * Set the columns of the Table.
   */
  columns: GridColDef[];

  /**
   * Controls if is on loading state or not.
   */
  loading: boolean;
}
