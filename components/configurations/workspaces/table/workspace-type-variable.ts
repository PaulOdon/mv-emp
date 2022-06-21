import { Order } from "../../../contracts/table/type-variable";

export default interface WorkspaceData {
  ville: string;
  adresse:string;
}

export interface WorkspaceHeadCell {
  disablePadding: boolean;
  id: keyof WorkspaceData;
  label: string;
  numeric: boolean;
}


export interface  WorkspaceEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof WorkspaceData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}