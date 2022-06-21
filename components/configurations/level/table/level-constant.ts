import { createDataLevel } from "./level-function";
import { LevelHeadCell } from "./level-type-variable";




export const levelheadCells: readonly LevelHeadCell[] = [
    {
      id: 'echellon',
      numeric: false,
      disablePadding: true,
      label: 'Echellon',
    },
    {
      id: 'valeur',
      numeric: true,
      disablePadding: true,
      label: 'Valeur',
    },

  ];

  export const levelrows = [
    createDataLevel('SMIE 1', '261'),
    createDataLevel('SMIE 2', '195'),
    createDataLevel('SMIE 3', '197'),
    createDataLevel('SMIE 4', '145'),
    createDataLevel('SMIE 5', '195'),
    createDataLevel('SMIE 6', '595'),
    createDataLevel('SMIE 7', '125'),
    createDataLevel('SMIE 8', '125'),
    createDataLevel('SMIE 9', '150'),
    createDataLevel('SMIE 10', '125'),
    createDataLevel('SMIE 11', '160'),
    createDataLevel('SMIE 12', '225'),
  ];