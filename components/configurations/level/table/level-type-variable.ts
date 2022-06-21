import { Order } from "../../../contracts/table/type-variable";

export default interface LevelData {
  echellon: string;
  valeur:string;
}

export interface LevelHeadCell {
  disablePadding: boolean;
  id: keyof LevelData;
  label: string;
  numeric: boolean;
}


export interface LevelEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof LevelData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}