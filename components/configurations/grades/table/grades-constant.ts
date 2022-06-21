import { createDataGrades } from "./grades-function";
import { GradesHeadCell } from "./grades-type-variable";




export const gradesheadCells: readonly GradesHeadCell[] = [
    {
      id: 'classe',
      numeric: false,
      disablePadding: true,
      label: 'Classe',
    },
    {
      id: 'valeur',
      numeric: true,
      disablePadding: true,
      label: 'Valeur',
    },

  ];

  export const gradesrows = [
    createDataGrades('Classe 1', '261'),
    createDataGrades('Classe 2', '195'),
    createDataGrades('Classe 3', '197'),
    createDataGrades('Classe 4', '145'),
    createDataGrades('Classe 5', '195'),
    createDataGrades('Classe 6', '595'),
    createDataGrades('Classe 7', '125'),
    createDataGrades('Classe 8', '125'),
    createDataGrades('Classe 9', '150'),
    createDataGrades('Classe 10', '125'),
    createDataGrades('Classe 11', '160'),
    createDataGrades('Classe 12', '225'),
  ];