import { Order } from "../../../contracts/table/type-variable";

export default interface CategorieData {
  categorie: string;
  valeur:string;
}

export interface CategorieHeadCell {
  disablePadding: boolean;
  id: keyof CategorieData;
  label: string;
  numeric: boolean;
}


export interface  CategorieEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof CategorieData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}