import { createDataCategorie } from "./categorie-function";
import { CategorieHeadCell } from "./categorie-type-variable";




export const categorieheadCells: readonly CategorieHeadCell[] = [
    {
      id: 'categorie',
      numeric: false,
      disablePadding: true,
      label: 'Categorie',
    },
    {
      id: 'valeur',
      numeric: true,
      disablePadding: true,
      label: 'Valeur',
    },

  ];

  export const categorierows = [
    createDataCategorie('Categorie 1', '261'),
    createDataCategorie('Categorie 2', '195'),
    createDataCategorie('Categorie 3', '197'),
    createDataCategorie('Categorie 4', '145'),
    createDataCategorie('Categorie 5', '195'),
    createDataCategorie('Categorie 6', '595'),
    createDataCategorie('Categorie 7', '125'),
    createDataCategorie('Categorie 8', '125'),
    createDataCategorie('Categorie 9', '150'),
    createDataCategorie('Categorie 10', '125'),
    createDataCategorie('Categorie 11', '160'),
    createDataCategorie('Categorie 12', '225'),
  ];