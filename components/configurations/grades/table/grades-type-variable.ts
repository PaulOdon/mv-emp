import { Order } from "../../../contracts/table/type-variable";

export default interface GradesData {
  classe: string;
  valeur:string;
}

export interface GradesHeadCell {
  disablePadding: boolean;
  id: keyof GradesData;
  label: string;
  numeric: boolean;
}


export interface  GradesEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof GradesData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}