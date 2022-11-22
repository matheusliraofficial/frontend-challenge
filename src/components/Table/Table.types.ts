import { GridColDef, GridRowsProp, GridValidRowModel } from "@mui/x-data-grid";

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
   * Controls wether the Button is on loading state or not.
   */
  loading: boolean;
}
