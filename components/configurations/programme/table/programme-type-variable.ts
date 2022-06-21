import { Order } from "../../../contracts/table/type-variable";

export default interface ProgrammeData {
  programme: string;
  parente: string;
}

export interface ProgrammeHeadCell {
  disablePadding: boolean;
  id: keyof ProgrammeData;
  label: string;
  numeric: boolean;
}

export interface ProgrammeEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof ProgrammeData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
