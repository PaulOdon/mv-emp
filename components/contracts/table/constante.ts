import { createData } from "./function";
import { HeadCell } from "./type-variable";

export const headCells: readonly HeadCell[] = [
    {
      id: 'reference',
      numeric: false,
      disablePadding: true,
      label: 'Référence',
    },
    {
      id: 'employe',
      numeric: true,
      disablePadding: false,
      label: 'Employé',
    },
    {
      id: 'type',
      numeric: true,
      disablePadding: false,
      label: 'Type',
    },
    {
      id: 'debut',
      numeric: true,
      disablePadding: false,
      label: 'Début',
    },
    {
      id: 'fin',
      numeric: true,
      disablePadding: false,
      label: 'Fin',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
  ];

  export const rows = [
    createData('CTR/2022/0001', 'Employé 1', 'CDI', '01/01/2022', '01/01/2022', 'Nouveau'),
    createData('CTR/2022/0002', 'Employé 2', 'CDD', '01/12/2022', '01/01/2023', 'Encours'),
    createData('CTR/2022/0003', 'Employé 3', 'CDI', '12/01/2022', '01/01/2024', 'Expiré'),
    createData('CTR/2022/0004', 'Employé 4', 'Stage', '11/01/2022', '01/03/2022', 'Annulé'),
    createData('CTR/2022/0005', 'Employé', 'Stage', '12/01/2022', '01/07/2022', 'Nouveau'),
    createData('CTR/2022/0006', 'Employé 6', 'CDI', '01/01/2022', '01/01/2022', 'Nouveau'),
    createData('CTR/2022/0007', 'Employé 2', 'CDD', '01/12/2022', '01/01/2023', 'Encours'),
    createData('CTR/2022/0008', 'Employé 3', 'CDI', '12/01/2022', '01/01/2024', 'Expiré'),
    createData('CTR/2022/0009', 'Employé 4', 'Prestations', '11/01/2022', '01/03/2022', 'Annulé'),
    createData('CTR/2022/0010', 'Employé', 'Stage', '12/01/2022', '01/07/2022', 'Nouveau'),
  
  
  ];