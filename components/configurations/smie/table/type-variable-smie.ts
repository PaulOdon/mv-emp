import { Order } from "../../../contracts/table/type-variable";

export default interface DataSMIE {
  smie: string;
}

export interface HeadCellSMIE {
  disablePadding: boolean;
  id: keyof DataSMIE;
  label: string;
  numeric: boolean;
}

export interface EnhancedTablePropsSMIE {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DataSMIE
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
