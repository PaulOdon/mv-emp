import { Order } from "../../../contracts/table/type-variable";

export default interface FonctionData {
  fonction: string;
}

export interface FonctionHeadCell {
  disablePadding: boolean;
  id: keyof FonctionData;
  label: string;
  numeric: boolean;
}


export interface  FonctionEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof FonctionData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}