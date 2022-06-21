import { createDataFonction } from "./fonction-function";
import { FonctionHeadCell } from "./function-type-variable";




export const fonctionheadCells: readonly FonctionHeadCell[] = [
    {
      id: 'fonction',
      numeric: false,
      disablePadding: true,
      label: 'fonction',
    },
  ];

  export const fonctionrows = [
    createDataFonction('fonction 1'),
    createDataFonction('fonction 2'),
    createDataFonction('fonction 3'),
    createDataFonction('fonction 4'),
    createDataFonction('fonction 5'),
    createDataFonction('fonction 6'),
    createDataFonction('fonction 7'),
    createDataFonction('fonction 8'),
    createDataFonction('fonction 9'),
    createDataFonction('fonction 10'),
    createDataFonction('fonction 11'),
    createDataFonction('fonction 12'),
  ];