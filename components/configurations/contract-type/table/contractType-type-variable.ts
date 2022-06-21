import { Order } from "../../../contracts/table/type-variable";

export default interface ContractTypeData {
  contractType: string;
}

export interface ContractTypeHeadCell {
  disablePadding: boolean;
  id: keyof ContractTypeData;
  label: string;
  numeric: boolean;
}


export interface  ContractTypeEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof ContractTypeData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}